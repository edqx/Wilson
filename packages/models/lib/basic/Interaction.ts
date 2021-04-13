import { InteractionType, Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "./GuildMember";
import { BasicIdentifiable } from "./Identifiable";
import { BasicUser } from "./User";

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
    application_id: Snowflake;
    type: InteractionType;
    data?: ApplicationCommandInteractionData;
    guild_id?: Snowflake;
    channel_id?: Snowflake;
    member?: BasicGuildMember;
    user?: BasicUser;
    token: string;
    version: number;
}
