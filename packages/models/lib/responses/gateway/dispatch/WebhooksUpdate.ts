import { Snowflake } from "@jesse/constants";

export interface WebhooksUpdateData {
    guild_id: Snowflake;
    channel_id: Snowflake;
}
