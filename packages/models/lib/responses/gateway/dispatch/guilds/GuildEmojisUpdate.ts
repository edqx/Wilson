import { Snowflake } from "@wilsonjs/constants";
import { BasicEmoji } from "../../../basic/Emoji";

export interface GuildEmojisUpdateData {
    guild_id: Snowflake;
    emojis: BasicEmoji[];
}
