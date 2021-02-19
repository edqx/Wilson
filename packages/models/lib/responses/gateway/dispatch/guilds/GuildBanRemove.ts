import { Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "../../../basic/User";

export interface GuildBanRemoveData {
    guild_id: Snowflake;
    user: BasicUser;
}
