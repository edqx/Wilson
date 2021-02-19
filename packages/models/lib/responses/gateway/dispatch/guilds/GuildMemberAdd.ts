import { Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "../../../basic/GuildMember";

export interface GuildMemberAddData extends BasicGuildMember {
    guild_id: Snowflake;
}
