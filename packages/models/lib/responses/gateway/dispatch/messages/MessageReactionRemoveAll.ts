import { Snowflake } from "@jesse/constants";

export interface MessageReactionRemoveAllData {
    channel_id: Snowflake;
    message_id: Snowflake;
    guild_id?: Snowflake;
}
