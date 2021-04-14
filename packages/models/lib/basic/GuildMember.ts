import { ISOTimestamp, Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "./User";

export interface BasicGuildMember {
    user?: BasicUser;
    nick: string | null;
    roles: Snowflake[];
    joined_at: ISOTimestamp;
    premium_since: ISOTimestamp | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
    permissions?: string;
}
