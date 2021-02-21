import { BasicEmbed } from "../../../basic";
import { BasicAllowedMentions } from "../channel/CreateMessage";

export interface ExecuteWebhookRequest {
    content?: string;
    username?: string;
    avatar_url?: string;
    tts?: boolean;
    embeds?: BasicEmbed[];
    allow_mentions?: BasicAllowedMentions;
}
