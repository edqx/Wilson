import { Snowflake, TargetUserType } from "@wilsonjs/constants";

export interface CreateChannelInviteRequest {
    max_age?: number;
    max_uses?: number;
    temporary?: boolean;
    unique?: boolean;
    target_user?: Snowflake;
    target_user_type?: TargetUserType;
}
