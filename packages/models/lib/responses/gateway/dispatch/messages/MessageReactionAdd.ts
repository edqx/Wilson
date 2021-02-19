import { Snowflake } from "@wilsonjs/constants";
import { BasicEmoji } from "../../../basic/Emoji";
import { BasicGuildMember } from "../../../basic/GuildMember";

export interface MessageReactionAddData {
    user_id: Snowflake;
    channel_id: Snowflake;
    message_id: Snowflake;
    guild_id?: Snowflake;
    member?: BasicGuildMember;
    emoji: BasicEmoji;
}
