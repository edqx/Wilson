import { InteractionType, Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "./GuildMember";

export interface ApplicationCommandInteractionDataOption {
    id: Snowflake;
    name: string;
    value: any;
    options: ApplicationCommandInteractionDataOption;
}

export interface ApplicationCommandInteractionData {
    id: Snowflake;
    name: string;
    options: ApplicationCommandInteractionDataOption[];
}

export interface BasicInteraction {
    id: Snowflake;
    type: InteractionType;
    data?: ApplicationCommandInteractionData;
    guild_id: Snowflake;
    channel_id: Snowflake;
    member: BasicGuildMember;
    token: string;
    version: number;
}
