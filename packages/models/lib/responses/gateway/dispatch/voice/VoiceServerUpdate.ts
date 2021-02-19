import { Snowflake } from "@wilsonjs/constants";

export interface VoiceServerUpdateData {
    token: string;
    guild_id: Snowflake;
    endpoint: string;
}
