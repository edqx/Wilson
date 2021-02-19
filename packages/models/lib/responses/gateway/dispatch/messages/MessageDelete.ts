import { Snowflake } from "@wilsonjs/constants";

export interface MessageDeleteData {
    id: Snowflake;
    channel_id?: Snowflake;
    guild_id?: Snowflake;
}
