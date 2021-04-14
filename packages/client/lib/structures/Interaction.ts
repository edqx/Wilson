import { ApiEndpoints, InteractionResponseType } from "@wilsonjs/constants";
import { InteractionType, Snowflake } from "@wilsonjs/constants";
import {
    BasicInteractionApplicationCommandCallbackData,
    BasicInteractionResponse,
} from "@wilsonjs/models";
import {
    ApplicationCommandInteractionData,
    BasicInteraction,
} from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Embed, InteractionResponseOptions } from "../models/MessageOptions";
import { Channel } from "./Channel";
import { Guild } from "./Guild";
import { GuildMember } from "./GuildMember";
import { Identifiable } from "./Identifiable";
import { RichEmbed } from "./RichEmbed";
import { User } from "./User";

export class Interaction extends Identifiable {
    application_id: Snowflake;
    type: InteractionType;
    data?: ApplicationCommandInteractionData;
    guild?: Guild;
    channel?: Channel;
    member?: GuildMember;
    user?: User;
    token: string;
    version: number;

    constructor(client: WilsonClient, basic: Partial<BasicInteraction>) {
        super(client, basic);
    }

    patch(basic: Partial<BasicInteraction>) {
        if (basic.application_id !== undefined)
            this.application_id = basic.application_id;
        if (basic.type !== undefined) this.type = basic.type;
        if (basic.data !== undefined) this.data = basic.data;
        if (basic.guild_id !== undefined)
            this.guild = this.client.guilds.add({ id: basic.guild_id });
        if (basic.channel_id !== undefined)
            this.channel = this.client.channels.add({ id: basic.channel_id });
        if (basic.member !== undefined && basic.member?.user !== undefined)
            this.member = this.client.members.add(
                this.guild as Guild,
                basic.member.user?.id,
                basic.member
            );
        if (basic.user !== undefined)
            this.user = this.client.users.add(basic.user);
        if (basic.token !== undefined) this.token = basic.token;
        if (basic.version !== undefined) this.version = basic.version;
    }

    private async _respond(
        type: InteractionResponseType,
        data?: BasicInteractionApplicationCommandCallbackData
    ) {
        return await this.client.make<BasicInteractionResponse>(
            "POST",
            {
                body: JSON.stringify({
                    type,
                    data,
                }),
            },
            ApiEndpoints.CreateInteractionResponse,
            this.id,
            this.token
        );
    }

    async reply(
        content: string | RichEmbed | Embed[] | InteractionResponseOptions
    ) {
        const options: Partial<BasicInteractionApplicationCommandCallbackData> = {};

        if (typeof content === "string") {
            options.content = content;
        } else if (content instanceof RichEmbed) {
            options.embeds = [content.toJSON()];
        } else if (Array.isArray(content)) {
            options.embeds = content.map((embed) =>
                embed instanceof RichEmbed ? embed.toJSON() : embed
            );
        } else {
            if (content.tts !== undefined) options.tts = content.tts;
            if (content.content !== undefined)
                options.content = content.content;
            if (content.embeds !== undefined)
                options.embeds = content.embeds.map((embed) =>
                    embed instanceof RichEmbed ? embed.toJSON() : embed
                );
            if (content.allowed_mentions !== undefined) {
                options.allowed_mentions = {
                    parse: content.allowed_mentions.parse,
                    roles: content.allowed_mentions.roles?.map((role) =>
                        this.client.roles.resolveID(role)
                    ),
                    users: content.allowed_mentions.roles?.map((user) =>
                        this.client.users.resolveID(user)
                    ),
                    replied_user: content.allowed_mentions.replied_user,
                };
            }
            if (content.flags !== undefined) options.flags = content.flags;
        }

        return await this._respond(
            InteractionResponseType.ChannelMessageWithSource,
            options
        );
    }

    async defer() {
        return await this._respond(
            InteractionResponseType.DeferredChannelMessageWithSource
        );
    }
}
