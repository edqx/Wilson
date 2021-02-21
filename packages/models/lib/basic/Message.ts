import { ISOTimestamp, MessageActivityType, MessageFlags, MessageType, Snowflake } from "@wilsonjs/constants";
import { BasicAttachment } from "./Attachment";
import { BasicChannel } from "./Channel";
import { BasicEmbed } from "./Embed";
import { BasicGuildMember } from "./GuildMember";
import { BasicIdentifiable } from "./Identifiable";
import { BasicReaction } from "./Reaction";
import { BasicRole } from "./Role";
import { BasicSticker } from "./Sticker";
import { BasicUser } from "./User";

export interface MessageUserMention extends BasicUser {
    member: Partial<BasicGuildMember>;
}

export interface MessageActivity {
    type: MessageActivityType;
    party_id: string;
}

export interface MessageApplication {
    id: Snowflake;
    cover_image?: string;
    description: string;
    icon: string|null;
    name: string;
}

export interface MessageReference {
    message_id?: Snowflake;
    channel_id?: Snowflake;
    guild_id?: Snowflake;
    fail_if_not_exists?: boolean;
}

export interface BasicMessage extends BasicIdentifiable {
    channel_id: Snowflake;
    guild_id: Snowflake;
    author: BasicUser;
    member?: BasicGuildMember;
    content: string;
    timestamp: ISOTimestamp;
    edited_timestamp: ISOTimestamp|null;
    tts: boolean;
    mention_everyone: boolean;
    mentions: MessageUserMention[];
    mention_roles: BasicRole[];
    mention_channels: BasicChannel[];
    attachments: BasicAttachment[];
    embeds: BasicEmbed[];
    reactions?: BasicReaction[];
    nonce?: number|string;
    pinned?: boolean;
    webhook_id?: Snowflake;
    type: MessageType;
    activity?: MessageActivity;
    application?: MessageApplication;
    message_reference: MessageReference;
    flags?: MessageFlags;
    stickers?: BasicSticker[];
    referenced_message?: BasicMessage;
}
