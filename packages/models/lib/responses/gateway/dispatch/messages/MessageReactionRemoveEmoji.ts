import { Snowflake } from "@jesse/constants";
import { BasicEmoji } from "../../../basic/Emoji";

export interface MessageReactionRemoveEmojiData {
    channel_id: Snowflake;
    guild_id?: Snowflake;
    message_id: Snowflake;
    emoji: BasicEmoji;
}
