import { BasicEmoji } from "./Emoji";

export interface BasicReaction {
    count: number;
    me: boolean;
    emoji: BasicEmoji;
}
