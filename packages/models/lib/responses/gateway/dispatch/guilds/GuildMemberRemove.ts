import { Snowflake } from "@jesse/constants";
import { BasicUser } from "../../../basic/User";

export interface GuildMemberRemoveData {
    guild_id: Snowflake;
    user: BasicUser;
}
