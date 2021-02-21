import {
    DefaultNotificationLevel,
    ExplicitContentFilterLevel,
    Snowflake,
    VerificationLevel
} from "@wilsonjs/constants";

import { BasicChannel, BasicRole } from "../../../basic";

export interface CreateGuildRequest {
    name: string;
    region?: string;
    icon?: string;
    verification_level?: VerificationLevel;
    default_message_notifications?: DefaultNotificationLevel;
    explicit_content_filter?: ExplicitContentFilterLevel;
    roles?: BasicRole[];
    channels?: Partial<BasicChannel>[];
    afk_channel_id?: Snowflake;
    afk_timeout?: number;
    system_channel_id?: Snowflake;
}
