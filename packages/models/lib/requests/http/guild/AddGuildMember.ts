import { Snowflake } from "@wilsonjs/constants";

export interface AddGuildMemberRequest {
    acccess_token: string;
    nick?: string;
    roles?: Snowflake[];
    mute?: boolean;
    deaf?: boolean;
}
