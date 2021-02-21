import { MessageFlags } from "@wilsonjs/constants";
import { BasicEmbed } from "../../../basic";
import { BasicAllowedMentions } from "./CreateMessage";

export interface EditMessageRequest {
    content?: string|null;
    embed?: BasicEmbed|null;
    flags?: MessageFlags|null;
    allowed_mentions?: BasicAllowedMentions|null;
}
