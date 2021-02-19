import { Snowflake } from "@jesse/constants";
import { BasicEmoji } from "../../../basic/Emoji";

export interface MessageReactionRemoveData {
    user_id: Snowflake;
    channel_id: Snowflake;
    message_id: Snowflake;
    guild_id?: Snowflake;
    emoji: BasicEmoji;
}
