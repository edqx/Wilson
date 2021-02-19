import { GatewayEvent, GatewayOpcode } from "@jesse/constants";
import { BasePayload } from "./BasePayload";
import {
    HelloData,
    ReadyData,
    ResumedData,
    ReconnectData,
    InvalidSessionData,
    ChannelCreateData,
    ChannelUpdateData,
    ChannelDeleteData,
    ChannelPinsUpdateData,
    GuildCreateData,
    GuildUpdateData,
    GuildDeleteData,
    GuildBanAddData,
    GuildBanRemoveData,
    GuildEmojisUpdateData,
    GuildIntegrationsUpdateData,
    GuildMemberAddData,
    GuildMemberRemoveData,
    GuildMemberUpdateData,
    GuildMembersChunkData,
    GuildRoleCreateData,
    GuildRoleUpdateData,
    GuildRoleDeleteData,
    InviteCreateData,
    InviteDeleteData,
    MessageCreateData,
    MessageUpdateData,
    MessageDeleteData,
    MessageDeleteBulkData,
    MessageReactionAddData,
    MessageReactionRemoveData,
    MessageReactionRemoveAllData,
    MessageReactionRemoveEmojiData,
    PresenceUpdateData,
    TypingStartData,
    UserUpdateData,
    VoiceStateUpdateData,
    VoiceServerUpdateData,
    WebhooksUpdateData,
    InteractionCreateData
} from "./dispatch";

export interface BaseDispatchPayload extends BasePayload {
    op: GatewayOpcode.Dispatch;
    d: unknown;
    s: number;
    t: GatewayEvent;
}

export interface HelloDispatchPayload extends BaseDispatchPayload {
	d: HelloData,
	t: GatewayEvent.Hello
}

export interface ReadyDispatchPayload extends BaseDispatchPayload {
	d: ReadyData,
	t: GatewayEvent.Ready
}

export interface ResumedDispatchPayload extends BaseDispatchPayload {
	d: ResumedData,
	t: GatewayEvent.Resumed
}

export interface ReconnectDispatchPayload extends BaseDispatchPayload {
	d: ReconnectData,
	t: GatewayEvent.Reconnect
}

export interface InvalidSessionDispatchPayload extends BaseDispatchPayload {
	d: InvalidSessionData,
	t: GatewayEvent.InvalidSession
}

export interface ChannelCreateDispatchPayload extends BaseDispatchPayload {
	d: ChannelCreateData,
	t: GatewayEvent.ChannelCreate
}

export interface ChannelUpdateDispatchPayload extends BaseDispatchPayload {
	d: ChannelUpdateData,
	t: GatewayEvent.ChannelUpdate
}

export interface ChannelDeleteDispatchPayload extends BaseDispatchPayload {
	d: ChannelDeleteData,
	t: GatewayEvent.ChannelDelete
}

export interface ChannelPinsUpdateDispatchPayload extends BaseDispatchPayload {
	d: ChannelPinsUpdateData,
	t: GatewayEvent.ChannelPinsUpdate
}

export interface GuildCreateDispatchPayload extends BaseDispatchPayload {
	d: GuildCreateData,
	t: GatewayEvent.GuildCreate
}

export interface GuildUpdateDispatchPayload extends BaseDispatchPayload {
	d: GuildUpdateData,
	t: GatewayEvent.GuildUpdate
}

export interface GuildDeleteDispatchPayload extends BaseDispatchPayload {
	d: GuildDeleteData,
	t: GatewayEvent.GuildDelete
}

export interface GuildBanAddDispatchPayload extends BaseDispatchPayload {
	d: GuildBanAddData,
	t: GatewayEvent.GuildBanAdd
}

export interface GuildBanRemoveDispatchPayload extends BaseDispatchPayload {
	d: GuildBanRemoveData,
	t: GatewayEvent.GuildBanRemove
}

export interface GuildEmojisUpdateDispatchPayload extends BaseDispatchPayload {
	d: GuildEmojisUpdateData,
	t: GatewayEvent.GuildEmojisUpdate
}

export interface GuildIntegrationsUpdateDispatchPayload extends BaseDispatchPayload {
	d: GuildIntegrationsUpdateData,
	t: GatewayEvent.GuildIntegrationsUpdate
}

export interface GuildMemberAddDispatchPayload extends BaseDispatchPayload {
	d: GuildMemberAddData,
	t: GatewayEvent.GuildMemberAdd
}

export interface GuildMemberRemoveDispatchPayload extends BaseDispatchPayload {
	d: GuildMemberRemoveData,
	t: GatewayEvent.GuildMemberRemove
}

export interface GuildMemberUpdateDispatchPayload extends BaseDispatchPayload {
	d: GuildMemberUpdateData,
	t: GatewayEvent.GuildMemberUpdate
}

export interface GuildMembersChunkDispatchPayload extends BaseDispatchPayload {
	d: GuildMembersChunkData,
	t: GatewayEvent.GuildMembersChunk
}

export interface GuildRoleCreateDispatchPayload extends BaseDispatchPayload {
	d: GuildRoleCreateData,
	t: GatewayEvent.GuildRoleCreate
}

export interface GuildRoleUpdateDispatchPayload extends BaseDispatchPayload {
	d: GuildRoleUpdateData,
	t: GatewayEvent.GuildRoleUpdate
}

export interface GuildRoleDeleteDispatchPayload extends BaseDispatchPayload {
	d: GuildRoleDeleteData,
	t: GatewayEvent.GuildRoleDelete
}

export interface InviteCreateDispatchPayload extends BaseDispatchPayload {
	d: InviteCreateData,
	t: GatewayEvent.InviteCreate
}

export interface InviteDeleteDispatchPayload extends BaseDispatchPayload {
	d: InviteDeleteData,
	t: GatewayEvent.InviteDelete
}

export interface MessageCreateDispatchPayload extends BaseDispatchPayload {
	d: MessageCreateData,
	t: GatewayEvent.MessageCreate
}

export interface MessageUpdateDispatchPayload extends BaseDispatchPayload {
	d: MessageUpdateData,
	t: GatewayEvent.MessageUpdate
}

export interface MessageDeleteDispatchPayload extends BaseDispatchPayload {
	d: MessageDeleteData,
	t: GatewayEvent.MessageDelete
}

export interface MessageDeleteBulkDispatchPayload extends BaseDispatchPayload {
	d: MessageDeleteBulkData,
	t: GatewayEvent.MessageDeleteBulk
}

export interface MessageReactionAddDispatchPayload extends BaseDispatchPayload {
	d: MessageReactionAddData,
	t: GatewayEvent.MessageReactionAdd
}

export interface MessageReactionRemoveDispatchPayload extends BaseDispatchPayload {
	d: MessageReactionRemoveData,
	t: GatewayEvent.MessageReactionRemove
}

export interface MessageReactionRemoveAllDispatchPayload extends BaseDispatchPayload {
	d: MessageReactionRemoveAllData,
	t: GatewayEvent.MessageReactionRemoveAll
}

export interface MessageReactionRemoveEmojiDispatchPayload extends BaseDispatchPayload {
	d: MessageReactionRemoveEmojiData,
	t: GatewayEvent.MessageReactionRemoveEmoji
}

export interface PresenceUpdateDispatchPayload extends BaseDispatchPayload {
	d: PresenceUpdateData,
	t: GatewayEvent.PresenceUpdate
}

export interface TypingStartDispatchPayload extends BaseDispatchPayload {
	d: TypingStartData,
	t: GatewayEvent.TypingStart
}

export interface UserUpdateDispatchPayload extends BaseDispatchPayload {
	d: UserUpdateData,
	t: GatewayEvent.UserUpdate
}

export interface VoiceStateUpdateDispatchPayload extends BaseDispatchPayload {
	d: VoiceStateUpdateData,
	t: GatewayEvent.VoiceStateUpdate
}

export interface VoiceServerUpdateDispatchPayload extends BaseDispatchPayload {
	d: VoiceServerUpdateData,
	t: GatewayEvent.VoiceServerUpdate
}

export interface WebhooksUpdateDispatchPayload extends BaseDispatchPayload {
	d: WebhooksUpdateData,
	t: GatewayEvent.WebhooksUpdate
}

export interface InteractionCreateDispatchPayload extends BaseDispatchPayload {
    d: InteractionCreateData;
    t: GatewayEvent.InteractionCreate;
}

export type DispatchPayload =
    HelloDispatchPayload |
    ReadyDispatchPayload |
    ResumedDispatchPayload |
    ReconnectDispatchPayload |
    InvalidSessionDispatchPayload |
    ChannelCreateDispatchPayload |
    ChannelUpdateDispatchPayload |
    ChannelDeleteDispatchPayload |
    ChannelPinsUpdateDispatchPayload |
    GuildCreateDispatchPayload |
    GuildUpdateDispatchPayload |
    GuildDeleteDispatchPayload |
    GuildBanAddDispatchPayload |
    GuildBanRemoveDispatchPayload |
    GuildEmojisUpdateDispatchPayload |
    GuildIntegrationsUpdateDispatchPayload |
    GuildMemberAddDispatchPayload |
    GuildMemberRemoveDispatchPayload |
    GuildMemberUpdateDispatchPayload |
    GuildMembersChunkDispatchPayload |
    GuildRoleCreateDispatchPayload |
    GuildRoleUpdateDispatchPayload |
    GuildRoleDeleteDispatchPayload |
    InviteCreateDispatchPayload |
    InviteDeleteDispatchPayload |
    MessageCreateDispatchPayload |
    MessageUpdateDispatchPayload |
    MessageDeleteDispatchPayload |
    MessageDeleteBulkDispatchPayload |
    MessageReactionAddDispatchPayload |
    MessageReactionRemoveDispatchPayload |
    MessageReactionRemoveAllDispatchPayload |
    MessageReactionRemoveEmojiDispatchPayload |
    PresenceUpdateDispatchPayload |
    TypingStartDispatchPayload |
    UserUpdateDispatchPayload |
    VoiceStateUpdateDispatchPayload |
    VoiceServerUpdateDispatchPayload |
    WebhooksUpdateDispatchPayload |
    InteractionCreateDispatchPayload;
