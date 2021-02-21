import { Snowflake } from "@wilsonjs/constants";
import { BasicEmoji } from "../../../basic";

export interface GuildEmojisUpdateData {
    guild_id: Snowflake;
    emojis: BasicEmoji[];
}
