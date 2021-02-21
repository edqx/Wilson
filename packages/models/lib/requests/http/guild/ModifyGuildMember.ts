import { Snowflake } from "@wilsonjs/constants";

export interface ModifyGuildMemberRequest {
    nick?: string;
    roles?: Snowflake[];
    mute?: boolean;
    deaf?: boolean;
    channel_id?: Snowflake;
}
