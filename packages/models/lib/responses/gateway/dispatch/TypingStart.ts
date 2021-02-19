import { Snowflake, Timestamp } from "@wilsonjs/constants";
import { BasicGuildMember } from "../../basic/GuildMember";

export interface TypingStartData {
    channel_id: Snowflake;
    guild_id?: Snowflake;
    user_id: Snowflake;
    timestamp: Timestamp;
    member?: BasicGuildMember;
}
