import { ISOTimestamp, Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "../../../basic/User";

export interface GuildMemberUpdateData {
    guild_id: Snowflake;
    roles: Snowflake[];
    user: BasicUser;
    nick?: string|null;
    joined_at: ISOTimestamp;
    premium_since?: ISOTimestamp|null;
    pending?: boolean;
}
