import { AllowedMentionType, Snowflake } from "@wilsonjs/constants";
import { BasicEmbed, MessageReference } from "../../../basic";

export interface BasicAllowedMentions {
    parse?: AllowedMentionType[];
    roles?: Snowflake[];
    users?: Snowflake[];
    replied_user?: boolean;
}

export interface CreateMessageRequest {
    content?: string;
    nonce?: number | string;
    tts?: boolean;
    embed?: BasicEmbed;
    allowed_mentions: BasicAllowedMentions;
    message_reference: MessageReference;
}
