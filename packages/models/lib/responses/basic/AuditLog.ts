import { AuditLogChangeKey, AuditLogEvent, PermissionOverwriteType, Snowflake } from "@wilsonjs/constants";
import { BasicIntegration } from "./Integration";
import { BasicPermissionOverwrite } from "./Overwrite";
import { BasicRole } from "./Role";
import { BasicUser } from "./User";
import { BasicWebhook } from "./Webhook";

export interface MemberPruneInfo {
    delete_member_days: string;
    members_revoked: string;
}

export interface MemberMoveInfo {
    channel_id: Snowflake;
    count: number;
}

export interface MessagePinInfo {
    channel_id: Snowflake;
    message_id: Snowflake;
}

export interface MessageUnpinInfo {
    channel_id: Snowflake;
    message_id: Snowflake;
}

export interface MessageDeleteInfo {
    channel_id: Snowflake;
    message_id: Snowflake;
    count: number;
}

export interface MessageBulkDeleteInfo {
    count: number;
}

export interface MemberDisconnect {
    count: number;
}

export interface BaseChannelOverwriteCreate {
    id: Snowflake;
    type: PermissionOverwriteType;
}

export interface BaseChannelOverwriteUpdate {
    id: Snowflake;
    type: PermissionOverwriteType;
}


export interface BaseChannelOverwriteDelete {
    id: Snowflake;
    type: PermissionOverwriteType;
}

export interface MemberChannelOverwriteCreate extends BaseChannelOverwriteCreate {
    type: PermissionOverwriteType.Member;
}

export interface RoleChannelOverwriteCreate extends BaseChannelOverwriteCreate {
    type: PermissionOverwriteType.Role;
    role_name: string;
}

export interface MemberChannelOverwriteUpdate extends BaseChannelOverwriteUpdate {
    type: PermissionOverwriteType.Member;
}

export interface RoleChannelOverwriteUpdate extends BaseChannelOverwriteUpdate {
    type: PermissionOverwriteType.Role;
    role_name: string;
}

export interface MemberChannelOverwriteDelete extends BaseChannelOverwriteDelete {
    type: PermissionOverwriteType.Member;
}

export interface RoleChannelOverwriteDelete extends BaseChannelOverwriteDelete {
    type: PermissionOverwriteType.Role;
    role_name: string;
}

export type ChannelOverwriteCreate =
    MemberChannelOverwriteCreate |
    RoleChannelOverwriteCreate;

export type ChannelOverwriteUpdate =
    MemberChannelOverwriteUpdate |
    RoleChannelOverwriteUpdate;


export type ChannelOverwriteDelete =
    MemberChannelOverwriteDelete |
    RoleChannelOverwriteDelete;

export type AdditionalAuditLogEntryInfo =
    MemberPruneInfo |
    MemberMoveInfo |
    MessagePinInfo |
    MessageUnpinInfo |
    MessageDeleteInfo |
    MessageBulkDeleteInfo |
    MemberDisconnect |
    ChannelOverwriteCreate |
    ChannelOverwriteUpdate |
    ChannelOverwriteDelete;

export interface BaseAuditLogChange {
    new_value: unknown;
    old_value: unknown;
    key: AuditLogChangeKey;
}

export interface NameAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Name;
}

export interface DescriptionAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Description;
}

export interface IconHashAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.IconHash;
}

export interface SplashHashAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.SplashHash;
}

export interface DiscoverySplashHashAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.DiscoverySplashHash;
}

export interface BannerHashAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.BannerHash;
}

export interface OwnerIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.OwnerID;
}

export interface RegionAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Region;
}

export interface PreferredLocaleAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.PreferredLocale;
}

export interface AFKChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.AFKChannelID;
}

export interface AFKTimeoutAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.AFKTimeout;
}

export interface RulesChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.RulesChannelID;
}

export interface PublicUpdatesChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.PublicUpdatesChannelID;
}

export interface MFALevelAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.MFALevel;
}

export interface VerificationLevelAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.VerificationLevel;
}

export interface ExplicitContentFilterAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.ExplicitContentFilter;
}

export interface DefaultMessageNotificationsAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.DefaultMessageNotifications;
}

export interface VanityURLCodeAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.VanityURLCode;
}

export interface RoleAddAuditLogChange extends BaseAuditLogChange {
    new_value: BasicRole[];
    old_value: BasicRole[];
    key: AuditLogChangeKey.RoleAdd;
}

export interface RoleRemoveAuditLogChange extends BaseAuditLogChange {
    new_value: BasicRole[];
    old_value: BasicRole[];
    key: AuditLogChangeKey.RoleRemove;
}

export interface PruneDeleteDaysAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.PruneDeleteDays;
}

export interface WidgetEnabledAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.WidgetEnabled;
}

export interface WidgetChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.WidgetChannelID;
}

export interface SystemChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.SystemChannelID;
}

export interface PositionAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.Position;
}

export interface TopicAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Topic;
}

export interface BitrateAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.Bitrate;
}

export interface PermissionOverwritesAuditLogChange extends BaseAuditLogChange {
    new_value: BasicPermissionOverwrite[];
    old_value: BasicPermissionOverwrite[];
    key: AuditLogChangeKey.PermissionOverwrites;
}

export interface NsfwAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.NSFW;
}

export interface ApplicationIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.ApplicationID;
}

export interface RateLimitPerUserAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.RateLimitPerUser;
}

export interface PermissionsAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Permissions;
}

export interface ColorAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.Color;
}

export interface HoistAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.Hoist;
}

export interface MentionableAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.Mentionable;
}

export interface AllowAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Allow;
}

export interface DenyAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Deny;
}

export interface CodeAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Code;
}

export interface ChannelIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.ChannelID;
}

export interface InviterIDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.InviterID;
}

export interface MaxUsesAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.MaxUses;
}

export interface UsesAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.Uses;
}

export interface MaxAgeAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.MaxAge;
}

export interface TemporaryAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.Temporary;
}

export interface DeafAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.Deaf;
}

export interface MuteAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.Mute;
}

export interface NickAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.Nick;
}

export interface AvatarHashAuditLogChange extends BaseAuditLogChange {
    new_value: string;
    old_value: string;
    key: AuditLogChangeKey.AvatarHash;
}

export interface IDAuditLogChange extends BaseAuditLogChange {
    new_value: Snowflake;
    old_value: Snowflake;
    key: AuditLogChangeKey.ID;
}

export interface TypeAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.Type;
}

export interface EnableEmoticonsAuditLogChange extends BaseAuditLogChange {
    new_value: boolean;
    old_value: boolean;
    key: AuditLogChangeKey.EnableEmoticons;
}

export interface ExpireBehaviorAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.ExpireBehaviour;
}

export interface ExpireGracePeriodAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.ExpireGracePeriod;
}

export interface UserLimitAuditLogChange extends BaseAuditLogChange {
    new_value: number;
    old_value: number;
    key: AuditLogChangeKey.UserLimit;
}

export type AuditLogChange = NameAuditLogChange |
    DescriptionAuditLogChange |
    IconHashAuditLogChange |
    SplashHashAuditLogChange |
    DiscoverySplashHashAuditLogChange |
    BannerHashAuditLogChange |
    OwnerIDAuditLogChange |
    RegionAuditLogChange |
    PreferredLocaleAuditLogChange |
    AFKChannelIDAuditLogChange |
    AFKTimeoutAuditLogChange |
    RulesChannelIDAuditLogChange |
    PublicUpdatesChannelIDAuditLogChange |
    MFALevelAuditLogChange |
    VerificationLevelAuditLogChange |
    ExplicitContentFilterAuditLogChange |
    DefaultMessageNotificationsAuditLogChange |
    VanityURLCodeAuditLogChange |
    RoleAddAuditLogChange |
    RoleRemoveAuditLogChange |
    PruneDeleteDaysAuditLogChange |
    WidgetEnabledAuditLogChange |
    WidgetChannelIDAuditLogChange |
    SystemChannelIDAuditLogChange |
    PositionAuditLogChange |
    TopicAuditLogChange |
    BitrateAuditLogChange |
    PermissionOverwritesAuditLogChange |
    NsfwAuditLogChange |
    ApplicationIDAuditLogChange |
    RateLimitPerUserAuditLogChange |
    PermissionsAuditLogChange |
    ColorAuditLogChange |
    HoistAuditLogChange |
    MentionableAuditLogChange |
    AllowAuditLogChange |
    DenyAuditLogChange |
    CodeAuditLogChange |
    ChannelIDAuditLogChange |
    InviterIDAuditLogChange |
    MaxUsesAuditLogChange |
    UsesAuditLogChange |
    MaxAgeAuditLogChange |
    TemporaryAuditLogChange |
    DeafAuditLogChange |
    MuteAuditLogChange |
    NickAuditLogChange |
    AvatarHashAuditLogChange |
    IDAuditLogChange |
    TypeAuditLogChange |
    EnableEmoticonsAuditLogChange |
    ExpireBehaviorAuditLogChange |
    ExpireGracePeriodAuditLogChange |
    UserLimitAuditLogChange

export interface BasicAuditLogEntry {
    target_id: Snowflake;
    changes?: AuditLogChange[];
    user_id: Snowflake;
    id: Snowflake;
    action_type: AuditLogEvent;
    options: AdditionalAuditLogEntryInfo;
    reason: string;
}

export interface BasicAuditLog {
    webhooks: BasicWebhook[];
    users: BasicUser[];
    audit_log_entries: BasicAuditLogEntry;
    integrations: BasicIntegration[];
}
