import { ApplicationCommandOptionType, Snowflake } from "@wilsonjs/constants";

export interface BasicApplicationCommandOptionChoice<T = string|number> {
    name: string;
    value: T;
}

export interface BaseBasicApplicationCommandOption {
    type: ApplicationCommandOptionType;
    name: string;
    description: string;
    required?: boolean
}

export interface BasicApplicationCommandStringOption extends BaseBasicApplicationCommandOption {
    type: ApplicationCommandOptionType.String;
    choices?: BasicApplicationCommandOptionChoice<string>[];
}

export interface BasicApplicationCommandIntOption extends BaseBasicApplicationCommandOption {
    type: ApplicationCommandOptionType.Integer;
    choices?: BasicApplicationCommandOptionChoice<number>[];
}

export interface BasicApplicationCommandSubCommandOption extends BaseBasicApplicationCommandOption {
    type: ApplicationCommandOptionType.Integer;
    options?: BasicApplicationCommandOption[];
}

export interface BasicApplicationCommandSubCommandGroupOption extends BaseBasicApplicationCommandOption {
    type: ApplicationCommandOptionType.Integer;
    options?: BasicApplicationCommandOption[];
}


export type BasicApplicationCommandOption =
    BasicApplicationCommandStringOption |
    BasicApplicationCommandIntOption |
    BasicApplicationCommandSubCommandOption |
    BasicApplicationCommandSubCommandGroupOption |
    BaseBasicApplicationCommandOption;

export interface BasicApplicationCommand {
    id: Snowflake;
    application_id: Snowflake;
    name: string;
    description: string;
    options?: BasicApplicationCommandOption[];
}
