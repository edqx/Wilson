import { InteractionApplicationCommandCallbackDataFlags, InteractionResponseType } from "@wilsonjs/constants";
import { BasicAllowedMentions } from "../channel/CreateMessage";
import { BasicEmbed } from "../../../basic";

export interface BasicInteractionApplicationCommandCallbackData {
    tts?: boolean;
    content?: string;
    embeds?: BasicEmbed[];
    allowed_mentions?: BasicAllowedMentions;
    flags?: InteractionApplicationCommandCallbackDataFlags;
}

export interface BasicInteractionResponse {
    type: InteractionResponseType;
    data?: BasicInteractionApplicationCommandCallbackData;
}
