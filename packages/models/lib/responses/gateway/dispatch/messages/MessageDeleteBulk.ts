import { Snowflake } from "@wilsonjs/constants";

export interface MessageDeleteBulkData {
    ids: Snowflake[];
    channel_id: Snowflake;
    guild_id?: Snowflake;
}
