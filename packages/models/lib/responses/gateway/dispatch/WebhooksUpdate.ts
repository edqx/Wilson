import { Snowflake } from "@wilsonjs/constants";

export interface WebhooksUpdateData {
    guild_id: Snowflake;
    channel_id: Snowflake;
}
