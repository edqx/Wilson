import { Snowflake } from "@wilsonjs/constants";
import { BasicEmoji } from "../../../basic";

export interface MessageReactionRemoveEmojiData {
    channel_id: Snowflake;
    guild_id?: Snowflake;
    message_id: Snowflake;
    emoji: BasicEmoji;
}
