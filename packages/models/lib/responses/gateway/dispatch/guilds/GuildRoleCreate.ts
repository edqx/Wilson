import { Snowflake } from "@wilsonjs/constants";
import { BasicRole } from "../../../basic/Role";

export interface GuildRoleCreateData {
    guild_id: Snowflake;
    role: BasicRole;
}
