import {
    ApiEndpoints,
    ChannelType,
    PermissionOverwriteType,
    Snowflake,
} from "@wilsonjs/constants";
import { BasicChannel, BasicMessage } from "@wilsonjs/models";

import { Cache, Resolvable } from "../cache/Cache";
import { HttpResponse, WilsonClient } from "../Client";
import { AttachmentInfo, MessageOptions } from "../models/MessageOptions";
import { createMessageForm } from "../utils";
import { Channel } from "./Channel";
import { MemberOverwrite } from "./MemberOverwrite";
import { Message } from "./Message";
import { RoleOverwrite } from "./RoleOverwrite";

export class TextChannel extends Channel {
    type: ChannelType.GuildText;

    private guild_id: Snowflake;
    last_message_id: Snowflake;
    parent_id: Snowflake;
    last_pin_timestamp: number;
    last_pin_at: Date;

    name: string;
    position: number;
    rate_limit: number;
    nsfw: boolean;
    topic: string;

    overwrites: Cache<MemberOverwrite | RoleOverwrite>;

    constructor(protected client: WilsonClient, basic: Partial<BasicChannel>) {
        super(client, basic);
    }

    get guild() {
        return this.client.guilds.resolve(this.guild_id);
    }

    get last_message() {
        return this.client.messages.resolve(this.last_message_id);
    }

    get parent() {
        return this.client.messages.resolve(this.parent);
    }

    patch(basic: Partial<BasicChannel>) {
        if (basic.guild_id !== undefined) {
            this.guild_id = basic.guild_id;
            this.client.guilds.add({ id: basic.guild_id });
        }
        if (basic.name !== undefined) this.name = basic.name;
        if (basic.position !== undefined) this.position = basic.position;

        if (basic.permission_overwrites !== undefined) {
            this.overwrites = new Cache(this.client);
            for (const basic_overwrite of basic.permission_overwrites) {
                switch (basic_overwrite.type) {
                    case PermissionOverwriteType.Member:
                        this.overwrites.set(
                            basic_overwrite.id,
                            new MemberOverwrite(this.client, basic_overwrite)
                        );
                        break;
                    case PermissionOverwriteType.Role:
                        this.overwrites.set(
                            basic_overwrite.id,
                            new RoleOverwrite(this.client, basic_overwrite)
                        );
                        break;
                }
            }
        }

        if (basic.rate_limit_per_user !== undefined)
            this.rate_limit = basic.rate_limit_per_user;
        if (basic.nsfw !== undefined) this.nsfw = basic.nsfw;
        if (basic.topic !== undefined) this.topic = basic.topic;

        if (basic.last_message_id !== undefined) {
            this.last_message_id = basic.last_message_id;
            this.client.messages.add({ id: basic.last_message_id });
        }
        if (basic.parent_id !== undefined) {
            this.parent_id = basic.parent_id;
            this.client.messages.add({ id: basic.parent_id });
        }

        if (basic.last_pin_timestamp !== undefined) {
            this.last_pin_at = new Date(basic.last_pin_timestamp);
            this.last_pin_timestamp = this.last_pin_at.getTime();
        }
    }

    async send(content: string | MessageOptions, files: AttachmentInfo[] = []) {
        const form = createMessageForm(content, files);

        const message = await this.client.make<BasicMessage>(
            "POST",
            {
                body: form,
                headers: {
                    ...form.getHeaders(),
                },
            },
            ApiEndpoints.CreateMessage,
            this.id
        );
        return this.client.messages.add(message);
    }

    async deleteMessage(message: Resolvable<Message>) {
        const message_id = this.client.messages.resolveID(message);
        const res = await this.client.make<HttpResponse.NoContent>(
            "DELETE",
            {},
            ApiEndpoints.DeleteMessage,
            this.id,
            message_id
        );

        return res === HttpResponse.NoContent;
    }
}
