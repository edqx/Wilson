import { DefaultNotificationLevel, ExplicitContentFilterLevel, Snowflake, VerificationLevel } from "@wilsonjs/constants";

export interface ModifyGuildRequest {
    name?: string;
    region?: string|null;
    verification_level?: VerificationLevel|null;
    default_message_notifications?: DefaultNotificationLevel|null;
    explicit_content_filter?: ExplicitContentFilterLevel|null;
    afk_channel_id?: Snowflake|null;
    afk_timeout?: number;
    icon?: string|null;
    owner_id?: Snowflake;
    splash?: string|null;
    banner?: string|null;
    system_channel_id?: Snowflake|null;
    rules_channel_id?: Snowflake|null;
    public_updates_channel_id?: Snowflake|null;
    preferred_locale?: string|null;
}
