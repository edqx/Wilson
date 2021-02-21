import { InteractionType, Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "./GuildMember";
import { BasicIdentifiable } from "./Identifiable";

export interface ApplicationCommandInteractionDataOption {
    name: string;
    value: any;
    options: ApplicationCommandInteractionDataOption;
}

export interface ApplicationCommandInteractionData {
    id: Snowflake;
    name: string;
    options: ApplicationCommandInteractionDataOption[];
}

export interface BasicInteraction extends BasicIdentifiable {
    type: InteractionType;
    data?: ApplicationCommandInteractionData;
    guild_id: Snowflake;
    channel_id: Snowflake;
    member: BasicGuildMember;
    token: string;
    version: number;
}
