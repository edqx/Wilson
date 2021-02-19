import { GuildFeature, ISOTimestamp, PermissionFlags, Snowflake, SystemChannelFlags } from "@jesse/constants";
import { BasicChannel } from "./Channel";
import { BasicEmoji } from "./Emoji";
import { BasicGuildMember } from "./GuildMember";
import { BasicPresenceUpdate } from "./PresenceUpdate";
import { BasicRole } from "./Role";
import { BasicVoiceState } from "./VoiceState";
import { BasicWelcomeScreen } from "./WelcomeScreen";

export interface BasicGuild {
    id: Snowflake;
    name: string;
    icon: string|null;
    icon_hash?: string|null;
    splash: string|null;
    discovery_splash: string|null;
    owner?: boolean;
    owner_id: Snowflake;
    permissions?: PermissionFlags;
    region: string;
    afk_channel_id: Snowflake|null;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: Snowflake|null;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: BasicRole[];
    emojis: BasicEmoji[];
    features: GuildFeature[];
    mfa_level: number;
    application_id: Snowflake|null;
    system_channel_id: Snowflake|null;
    system_channel_Flags: SystemChannelFlags;
    rules_channel_id: Snowflake|null;
    joined_at?: ISOTimestamp;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states: BasicVoiceState[];
    members?: BasicGuildMember[];
    channels?: BasicChannel[];
    presences?: BasicPresenceUpdate[];
    max_presences: number|null;
    max_members?: number;
    vanity_url_code: string|null;
    description: string|null;
    banner: string|null;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id: Snowflake|null;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    approximate_presence_count?: number;
    welcome_screen?: BasicWelcomeScreen;
}

export interface UnavailableGuild {
    id: Snowflake;
    unavailable: boolean;
}

export interface GuildPreview {
    id: Snowflake;
    name: string|null;
    icon: string|null;
    splash: string|null;
    discovery_splash: string;
    emojis: BasicEmoji[];
    features: GuildFeature[];
    approximate_member_count: number;
    approximate_presence_count: number;
    description: string|null;
}
