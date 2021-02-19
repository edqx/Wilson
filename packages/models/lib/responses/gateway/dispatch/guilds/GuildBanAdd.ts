import { Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "../../../basic/User";

export interface GuildBanAddData {
    guild_id: Snowflake;
    user: BasicUser;
}
