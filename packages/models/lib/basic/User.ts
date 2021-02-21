import { PremiumType, UserFlags } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";

export interface BasicUser extends BasicIdentifiable {
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
