import { BasicEmbed } from "../../../basic";
import { BasicAllowedMentions } from "../channel/CreateMessage";

export interface EditWebhookMessageRequest {
    content?: string|null;
    embeds?: BasicEmbed[]|null;
    allow_mentions?: BasicAllowedMentions|null;
}
