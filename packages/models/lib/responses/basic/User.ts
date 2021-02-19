import { PremiumType, Snowflake, UserFlags } from "@wilsonjs/constants";

export interface BasicUser {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar?: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: UserFlags;
    premium_type?: PremiumType;
    public_flags?: UserFlags;
}
