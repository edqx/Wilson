import { Snowflake } from "@jesse/constants";
import { BasicRole } from "../../../basic/Role";

export interface GuildRoleUpdateData {
    guild_id: Snowflake;
    role: BasicRole;
}
