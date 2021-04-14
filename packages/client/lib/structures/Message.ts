import { MessageType, Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember, BasicMessage } from "@wilsonjs/models";
import { MaskedCache } from "../cache/Cache";
import { ReactionCache } from "../cache/ReactionCache";
import { WilsonClient } from "../Client";
import { AttachmentInfo, MessageOptions } from "../models/MessageOptions";
import { GuildMember } from "./GuildMember";
import { Identifiable } from "./Identifiable";
import { RichEmbed } from "./RichEmbed";
import { Role } from "./Role";
import { TextChannel } from "./TextChannel";
import { User } from "./User";

export interface MessageMentions {
    users: MaskedCache<User>;
    members: MaskedCache<GuildMember>;
    roles: MaskedCache<Role>;
    channels: MaskedCache<TextChannel>;
    everyone: boolean;
}

export class Message extends Identifiable<BasicMessage> {
    private channel_id: Snowflake;
    private guild_id: Snowflake;
    author: User;
    member: GuildMember;
    content: string;
    created_at: Date;
    edited_at: Date;
    tts: boolean;
    mentions: MessageMentions;
    attachments: MaskedCache<Identifiable>;
    embeds: unknown[];
    reactions: ReactionCache;
    nonce: number | string;
    pinned: boolean;
    webhook_id: Snowflake;
    type: MessageType;
    replied_to: Message | null;
    deleted: boolean;

    constructor(
        protected client: WilsonClient,
        message: Partial<BasicMessage>
    ) {
        super(client, message);
    }

    get channel() {
        return this.client.channels.resolve(this.channel_id) as TextChannel;
    }

    get guild() {
        return this.client.guilds.resolve(this.guild_id);
    }

    patch(basic: Partial<BasicMessage>) {
        if (basic.channel_id !== undefined) {
            this.channel_id = basic.channel_id;
            this.client.channels.add({ id: basic.channel_id });
        }
        if (basic.guild_id !== undefined) {
            this.guild_id = basic.guild_id;
            this.client.guilds.add({ id: basic.guild_id });
        }
        if (basic.author !== undefined && this.guild) {
            this.author = this.client.users.add(basic.author);
            if (basic.member !== undefined) {
                this.member = this.client.members.add(
                    this.guild,
                    basic.author.id,
                    basic.member
                );
            }
        }
        if (basic.content !== undefined) this.content = basic.content;
        if (basic.timestamp !== undefined)
            this.created_at = new Date(basic.timestamp);
        if (basic.edited_timestamp !== undefined)
            this.edited_at = basic.edited_timestamp
                ? new Date(basic.edited_timestamp)
                : this.created_at;
        if (basic.tts !== undefined) this.tts = basic.tts;
        if (!this.mentions)
            this.mentions = {
                users: new MaskedCache(
                    this.client,
                    this.client.users,
                    new Set()
                ),
                members: new MaskedCache(
                    this.client,
                    this.client.members,
                    new Set()
                ),
                roles: new MaskedCache(
                    this.client,
                    this.client.roles,
                    new Set()
                ),
                channels: new MaskedCache(
                    this.client,
                    this.client.channels,
                    new Set()
                ),
                everyone: false,
            };
        if (basic.mentions !== undefined) {
            this.mentions.users.mask.clear();
            for (const basic_user of basic.mentions) {
                const user = this.client.users.add(basic_user);
                if (basic_user.member && this.guild) {
                    this.client.members.add(
                        this.guild,
                        user.id,
                        basic_user.member as BasicGuildMember
                    );
                    this.mentions.members.mask.add(user.id);
                }
                this.mentions.users.mask.add(user.id);
            }
            this.mentions.users.mask;
        }
        if (basic.mention_roles !== undefined && this.guild) {
            this.mentions.roles.mask.clear();
            for (const basic_role of basic.mention_roles) {
                const role = this.client.roles.add(this.guild, basic_role);
                this.mentions.roles.mask.add(role.id);
            }
        }
        if (basic.mention_channels !== undefined) {
            this.mentions.channels.mask.clear();
            for (const basic_channel of basic.mention_channels) {
                const channel = this.client.channels.add(basic_channel);
                this.mentions.channels.mask.add(channel.id);
            }
        }
        if (basic.mention_everyone !== undefined) {
            this.mentions.everyone = basic.mention_everyone;
        }
        if (basic.attachments !== undefined) null;
        if (basic.embeds !== undefined) null;
        if (basic.reactions !== undefined) {
            this.reactions = new ReactionCache(this.client);
            for (const basic_reaction of basic.reactions) {
                this.reactions.add(
                    this,
                    basic_reaction.emoji?.id,
                    basic_reaction
                );
            }
        }
        if (basic.nonce !== undefined) this.nonce = basic.nonce;
        if (basic.pinned !== undefined) this.pinned = basic.pinned;
        if (basic.webhook_id !== undefined) this.webhook_id = basic.webhook_id;
        if (basic.type !== undefined) this.type = basic.type;
        if (basic.referenced_message !== undefined)
            this.replied_to = basic.referenced_message
                ? this.client.messages.add(basic.referenced_message)
                : null;
    }

    async reply(
        content: string | RichEmbed | MessageOptions,
        files: AttachmentInfo[] = []
    ) {
        if (typeof content === "string") {
            return await this.channel.send({ content, reply_to: this }, files);
        } else if (content instanceof RichEmbed) {
            return await this.channel.send(
                { embed: content, reply_to: this },
                files
            );
        } else {
            return await this.channel.send(
                { ...content, reply_to: this },
                files
            );
        }
    }

    async delete() {
        return await this.channel.deleteMessage(this);
    }
}
