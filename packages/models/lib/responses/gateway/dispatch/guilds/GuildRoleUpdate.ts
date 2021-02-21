import { Snowflake } from "@wilsonjs/constants";
import { BasicRole } from "../../../basic";

export interface GuildRoleUpdateData {
    guild_id: Snowflake;
    role: BasicRole;
}
