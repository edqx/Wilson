import { Snowflake } from "@wilsonjs/constants";
import { BasicRole } from "../../../basic/Role";

export interface GuildRoleDeleteData {
    guild_id: Snowflake;
    role: BasicRole;
}
