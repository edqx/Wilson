import { AllowedMentionType, MessageFlags } from "@wilsonjs/constants";
import { BasicEmbed } from "@wilsonjs/models";
import fs from "fs";

import { Resolvable } from "../cache";
import { Message, ResolvableUser, Role } from "../structures";
import { RichEmbed } from "../structures/RichEmbed";

export interface AttachmentInfo {
    file: Buffer|fs.ReadStream;
    filename?: string;
    content_type?: string;
}

export interface AllowedMentions {
    parse?: AllowedMentionType[];
    roles?: Resolvable<Role>[];
    users?: ResolvableUser[];
    replied_user?: boolean;
}

export interface MessageOptions {
    content?: string;
    nonce?: string;
    tts?: boolean;
    embed?: RichEmbed|BasicEmbed;
    reply_to?: Resolvable<Message>;
    allowed_mentions?: AllowedMentions;
}

export type Embed = RichEmbed|BasicEmbed;

export interface InteractionResponseOptions {
    tts?: boolean;
    content?: string;
    embeds?: (RichEmbed|BasicEmbed)[];
    allowed_mentions?: AllowedMentions;
    flags?: MessageFlags;
}

