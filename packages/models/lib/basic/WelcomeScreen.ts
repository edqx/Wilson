import { Snowflake } from "@wilsonjs/constants";

export interface BasicWelcomeScreen {
    description?: string;
    welcome_channels: BasicWelcomeChannel[];
}

export interface BasicWelcomeChannel {
    channel_id: Snowflake;
    description: string;
    emoji_id?: Snowflake;
    emoji_name?: string;
}
