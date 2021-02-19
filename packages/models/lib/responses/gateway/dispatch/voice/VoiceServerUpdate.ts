import { Snowflake } from "@jesse/constants";

export interface VoiceServerUpdateData {
    token: string;
    guild_id: Snowflake;
    endpoint: string;
}
