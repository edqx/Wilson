import { Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "../../../../basic";

export interface GuildBanAddData {
    guild_id: Snowflake;
    user: BasicUser;
}
