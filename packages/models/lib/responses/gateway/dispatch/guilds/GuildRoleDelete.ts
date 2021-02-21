import { Snowflake } from "@wilsonjs/constants";
import { BasicRole } from "../../../basic";

export interface GuildRoleDeleteData {
    guild_id: Snowflake;
    role: BasicRole;
}
