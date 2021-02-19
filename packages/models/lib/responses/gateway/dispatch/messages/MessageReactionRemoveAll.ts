import { Snowflake } from "@wilsonjs/constants";

export interface MessageReactionRemoveAllData {
    channel_id: Snowflake;
    message_id: Snowflake;
    guild_id?: Snowflake;
}
