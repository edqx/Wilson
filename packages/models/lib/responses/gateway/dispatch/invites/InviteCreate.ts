import { Snowflake, Timestamp } from "@jesse/constants";
import { BasicUser } from "../../../basic/User";

export interface InviteCreateData {
    channel_id: Snowflake;
    code: string;
    created_at: Timestamp;
    guild_id?: Snowflake;
    inviter?: BasicUser;
    max_age: number;
    max_uses: number;
    target_user?: BasicUser;
    target_user_type?: BasicUser;
    temporary: boolean;
    uses: number;
}
