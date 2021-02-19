import { Snowflake } from "@jesse/constants";
import { BasicRole } from "../../../basic/Role";

export interface GuildRoleDeleteData {
    guild_id: Snowflake;
    role: BasicRole;
}
