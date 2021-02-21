import { Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "../../../../basic";

export interface GuildMemberRemoveData {
    guild_id: Snowflake;
    user: BasicUser;
}
