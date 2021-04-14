import WebSocket from "ws";
import Emittery from "emittery";
import erlpack from "erlpack";
import zlib from "zlib-sync";
import fetch, { Request, RequestInit } from "node-fetch";

import {
    BaseUrls,
    ApiEndpoints,
    GatewayCompression,
    GatewayEncoding,
    GatewayEvent,
    GatewayOpcode,
    Timestamp,
    Snowflake,
} from "@wilsonjs/constants";

import {
    DispatchPayload,
    GatewayPayload,
    GetGatewayBotResponse,
    GetGuildResponse,
    GetUserResponse,
} from "@wilsonjs/models";

import { ClientOptions } from "./models/ClientOptions";

import {
    Resolvable,
    EmojiCache,
    GuildCache,
    GuildMemberCache,
    MessageCache,
    RoleCache,
    UserCache,
    ChannelCache,
    AnyMessageable,
    MaskedCache,
} from "./cache";

import {
    User,
    Guild,
    Message,
    Emoji,
    Reaction,
    GuildMember,
    Role,
} from "./structures";

import { formatEndpoint, Querystring, stringifyQuery } from "./utils";
import { JsonError } from "./errors/JsonError";

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export enum HttpResponse {
    NoContent = "",
}

export interface ClientEvents {
    connect: Record<string, never>;
    ready: Record<string, never>;
    channelCreate: {
        channel: AnyMessageable;
    };
    channelUpdate: {
        old?: AnyMessageable;
        channel: AnyMessageable;
    };
    channelDelete: {
        channel: AnyMessageable;
    };
    channelPinsUpdate: {
        channel: AnyMessageable;
        timestamp: Timestamp;
    };
    guildCreate: {
        guild: Guild;
    };
    guildUpdate: {
        old?: Guild;
        guild: Guild;
    };
    guildDelete: {
        guild: Guild;
    };
    guildBanAdd: {
        guild: Guild;
        user: User;
    };
    guildBanRemove: {
        guild: Guild;
        user: User;
    };
    guildEmojisUpdate: {
        guild: Guild;
        emojis: MaskedCache<Emoji>;
    };
    guildIntegrationsUpdate: {
        guild: Guild;
    };
    guildMemberAdd: {
        member: GuildMember;
    };
    guildMemberRemove: {
        guild: Guild;
        user: User;
    };
    guildMemberUpdate: {
        old?: GuildMember;
        member: GuildMember;
    };
    guildMembersChunk: {
        members: MaskedCache<GuildMember>;
        notFound: Snowflake[];
        remaining: number;
        presences: unknown[];
        nonce: string;
    };
    guildRoleCreate: {
        role: Role;
    };
    guildRoleUpdate: {
        old: Role;
        role: Role;
    };
    guildRoleDelete: {
        role: Role;
    };
    inviteCreate: {
        invite: unknown;
    };
    inviteDelete: {
        invite: unknown;
    };
    message: {
        author: User;
        message: Message;
    };
    messageUpdate: {
        old?: Message;
        message: Message;
    };
    messageDelete: {
        message: Message;
    };
    messageDeleteBulk: {
        messages: MaskedCache<Message>;
    };
    messageReactionAdd: {
        user: User;
        message: Message;
        reaction: Reaction;
        emoji: Emoji;
    };
    messageReactionRemove: {
        user: User;
        message: Message;
        reaction: Reaction;
        emoji: Emoji;
    };
    messageReactionRemoveAll: {
        message: Message;
    };
    messageReactionRemoveEmoji: {
        message: Message;
        emoji: Emoji;
    };
    presenceUpdate: Record<string, never>;
    typingStart: {
        channel: AnyMessageable;
        timestamp: Timestamp;
        user: User;
        member?: GuildMember;
    };
    userUpdate: {
        old?: User;
        user: User;
    };
    voiceStateUpdate: Record<string, never>;
    voiceServerUpdate: {
        token: string;
        guild: Guild;
        endpoint: string;
    };
    webhooksUpdate: {
        guild: Guild;
        channel: AnyMessageable;
    };
    applicationCommandCreate: Record<string, never>;
    applicationCommandUpdate: Record<string, never>;
    applicationCommandDelete: Record<string, never>;
    interactionCreate: Record<string, never>;
}

export interface HTTPRequestOptions extends RequestInit {
    query?: Querystring;
    type?: string;
}

export class WilsonClient extends Emittery<ClientEvents> {
    private _token: string;
    private _socket: WebSocket;
    private _inflate: zlib.Inflate;
    private _heartbeat: NodeJS.Timeout;
    private _heartbeat_interval: number;
    private _seqnum: number;
    private _sessionid: string;
    private _did_recieve_ack: boolean;

    options: ClientOptions;
    user: User;

    readonly users: UserCache;
    readonly roles: RoleCache;
    readonly guilds: GuildCache;
    readonly channels: ChannelCache;
    readonly members: GuildMemberCache;
    readonly emojis: EmojiCache;
    readonly messages: MessageCache;

    private handleMessage: () => Promise<void>;

    constructor(options: ClientOptions = {}) {
        super();

        this.options = {
            encoding: GatewayEncoding.Erlang,
            compression: GatewayCompression.ZLibStream,
            ...options,
        };

        this._inflate = new zlib.Inflate();

        this.handleMessage = this._handleMessage.bind(this);
        this._seqnum = -1;

        this.users = new UserCache(this);
        this.roles = new RoleCache(this);
        this.guilds = new GuildCache(this);
        this.channels = new ChannelCache(this);
        this.members = new GuildMemberCache(this);
        this.emojis = new EmojiCache(this);
        this.messages = new MessageCache(this);
    }

    get socket() {
        return this._socket;
    }

    private async send(payload: GatewayPayload): Promise<number> {
        const buffer =
            this.options.encoding === GatewayEncoding.JSON
                ? Buffer.from(JSON.stringify(payload))
                : erlpack.pack(payload);
        await this._socket.send(buffer);
        return buffer.byteLength;
    }

    async disconnect() {
        clearInterval(this._heartbeat);
        this._socket.close();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    async resume() {
        // TODO
    }

    private async heartbeat() {
        if (!this._did_recieve_ack) {
            await this.disconnect();
            await this.resume();
        }

        this._did_recieve_ack = false;
        await this.send({
            op: GatewayOpcode.Heartbeat,
            d: this._seqnum,
        });
    }

    private async identify(resume: boolean) {
        if (resume) {
            await this.send({
                op: GatewayOpcode.Resume,
                d: {
                    token: this._token,
                    session_id: this._sessionid,
                    seq: this._seqnum,
                },
            });
        } else {
            await this.send({
                op: GatewayOpcode.Identify,
                d: {
                    token: this._token,
                    intents: 0x7efd,
                    properties: {
                        $os: "linux",
                        $browser: "wilson",
                        $device: "wilson",
                    },
                    shard: this.options.shard,
                },
            });
        }
    }

    private async handleEvent(payload: DispatchPayload) {
        switch (payload.t) {
            case GatewayEvent.Ready:
                this._sessionid = payload.d.session_id;
                this.user = this.users.add(payload.d.user);
                this.emit("ready", {});
                break;
            case GatewayEvent.ChannelCreate: {
                const channel = this.channels.add(payload.d);
                this.emit("channelCreate", { channel });
                break;
            }
            case GatewayEvent.ChannelUpdate: {
                const [old, channel] = this.channels.update(payload.d);
                if (channel) {
                    this.emit("channelUpdate", { old, channel });
                }
                break;
            }
            case GatewayEvent.ChannelDelete: {
                const channel = this.channels.remove(payload.d);
                if (channel) {
                    this.emit("channelDelete", { channel });
                }
                break;
            }
            case GatewayEvent.ChannelPinsUpdate: {
                const channel = this.channels.patch({
                    id: payload.d.channel_id,
                });
                if (channel) {
                    this.emit("channelPinsUpdate", {
                        channel,
                        timestamp: new Date(
                            payload.d.last_pin_timestamp
                        ).getTime(),
                    });
                }
                break;
            }
            case GatewayEvent.GuildCreate: {
                const guild = this.guilds.add(payload.d);
                this.emit("guildCreate", { guild });
                break;
            }
            case GatewayEvent.GuildUpdate: {
                const [old, guild] = this.guilds.update(payload.d);
                if (guild) {
                    this.emit("guildUpdate", { old, guild });
                }
                break;
            }
            case GatewayEvent.GuildDelete: {
                const guild = this.guilds.remove(payload.d);
                if (guild) {
                    this.emit("guildDelete", { guild });
                }
                break;
            }
            case GatewayEvent.GuildBanAdd: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                const user = this.users.add(payload.d.user);
                this.emit("guildBanAdd", { guild, user });
                break;
            }
            case GatewayEvent.GuildBanRemove: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                const user = this.users.add(payload.d.user);
                this.emit("guildBanRemove", { guild, user });
                break;
            }
            case GatewayEvent.GuildEmojisUpdate: {
                const guild = this.guilds.add({
                    id: payload.d.guild_id,
                    emojis: payload.d.emojis,
                });
                this.emit("guildEmojisUpdate", { guild, emojis: guild.emojis });
                break;
            }
            case GatewayEvent.GuildIntegrationsUpdate: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                this.emit("guildIntegrationsUpdate", { guild });
                break;
            }
            case GatewayEvent.GuildMemberAdd: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                const member = this.members.add(
                    guild,
                    payload.d.user?.id || "",
                    payload.d
                );
                this.emit("guildMemberAdd", { member });
                break;
            }
            case GatewayEvent.GuildMemberRemove: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                const user = this.users.add(payload.d.user);
                guild.members?.cache?.delete(user.id);
                this.emit("guildMemberRemove", { guild, user });
                break;
            }
            case GatewayEvent.GuildMemberUpdate: {
                const guild = this.guilds.add({ id: payload.d.guild_id });
                const [old, member] = this.members.update(
                    guild,
                    payload.d.user?.id,
                    payload.d
                );
                if (member) {
                    this.emit("guildMemberUpdate", { old, member });
                }
                break;
            }
            case GatewayEvent.MessageCreate: {
                const message = this.messages.add(payload.d);
                if (message.channel)
                    message.channel.last_message_id = message.id;
                this.emit("message", {
                    author: message.author,
                    message,
                });
                break;
            }
            case GatewayEvent.MessageReactionAdd: {
                const user = this.users.add({ id: payload.d.user_id });
                const message = this.messages.add({ id: payload.d.message_id });
                const emoji = this.emojis.add(payload.d.emoji);

                const cached = message.reactions.get(emoji.id);
                if (cached) {
                    cached.count++;
                    cached.me = user.id === this.user.id;

                    this.emit("messageReactionAdd", {
                        user,
                        message,
                        reaction: cached,
                        emoji,
                    });
                } else {
                    const reaction = message.reactions.add(
                        message,
                        emoji.id,
                        {}
                    );
                    reaction.count = 1;
                    reaction.me = user.id === this.user.id;
                    reaction.emoji = emoji;

                    this.emit("messageReactionRemove", {
                        user,
                        message,
                        reaction,
                        emoji,
                    });
                }
                break;
            }
        }
    }

    private async handlePayload(payload: GatewayPayload) {
        if (typeof payload.s === "number") this._seqnum = payload.s;
        switch (payload.op) {
            case GatewayOpcode.Dispatch:
                await this.handleEvent(payload);
                break;
            case GatewayOpcode.Hello:
                this._heartbeat_interval = payload.d.heartbeat_interval;
                this._heartbeat = setInterval(async () => {
                    await this.heartbeat();
                }, this._heartbeat_interval);

                await this.identify(false);
                break;
            case GatewayOpcode.HeartbeatAck:
                this._did_recieve_ack = true;
                break;
        }
    }

    private async _handleMessage(buffer: Buffer) {
        const do_flush =
            buffer.byteLength >= 4 &&
            buffer.readUInt32BE(buffer.byteLength - 4) === 0x0000ffff; // flush suffix
        this._inflate.push(buffer, do_flush && zlib.Z_SYNC_FLUSH);
        if (do_flush) {
            const data = this._inflate.result as Buffer;
            switch (this.options.encoding) {
                case GatewayEncoding.Erlang:
                    return await this.handlePayload(erlpack.unpack(data));
                case GatewayEncoding.JSON:
                    return await this.handlePayload(
                        JSON.parse(data.toString("utf8"))
                    );
            }
        }
    }

    async make<T = any>(
        method: HttpMethod,
        options: HTTPRequestOptions,
        path: string,
        ...params: any[]
    ): Promise<T> {
        const formatted = formatEndpoint(path, ...params);
        const query = options.query ? "?" + stringifyQuery(options.query) : "";

        const request_init = new Request(
            (formatted[0] === "/"
                ? "https://" + BaseUrls.API + formatted
                : formatted) + query,
            {
                method,
                ...options,
                headers: {
                    Authorization: "Bot " + this._token,
                    ...(method !== "GET"
                        ? {
                              "Content-Type":
                                  options.type || "application/json",
                          }
                        : {}),
                    ...options.headers,
                },
            }
        );

        const res = await fetch(request_init);

        if (res.status >= 200 && res.status < 300) {
            if (res.status === 204) {
                return "" as any;
            }

            if (res.headers.get("Content-Type") === "application/json") {
                return (await res.json()) as T;
            } else if (res.headers.get("Content-Type") === "text/plain") {
                return (await res.text()) as any;
            }

            return (await res.blob()) as any;
        } else {
            try {
                const json = await res.json();

                throw new JsonError(json.message, json.code);
            } catch (e) {
                throw res.status;
            }
        }
    }

    async connect(token: string) {
        this._token = token;
        const { url: baseUrl } = await this.make<GetGatewayBotResponse>(
            "GET",
            {},
            ApiEndpoints.GetBotGateway
        );

        let url = baseUrl + "?v=8&encoding=" + this.options.encoding;
        if (this.options.compression === GatewayCompression.ZLibStream) {
            url += "&compress=" + this.options.compression;
        }

        this._socket = new WebSocket(url);
        this._socket.on("message", this.handleMessage);
    }

    async getUser(resolvable: Resolvable<User>) {
        const resolved_id = this.users.resolveID(resolvable);
        const basic = await this.make<GetUserResponse>(
            "GET",
            {},
            ApiEndpoints.GetUser,
            resolved_id
        );
        const user = new User(this, basic);
        this.users.add(user);

        return user;
    }

    async getGuild(resolvable: Resolvable<Guild>) {
        const resolved_id = this.users.resolveID(resolvable);
        const basic = await this.make<GetGuildResponse>(
            "GET",
            {},
            ApiEndpoints.GetGuild,
            resolved_id
        );

        return this.guilds.add(basic);
    }
}
