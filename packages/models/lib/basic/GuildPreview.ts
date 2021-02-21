import { GuildFeature } from "@wilsonjs/constants";
import { BasicEmoji } from "./Emoji";
import { BasicIdentifiable } from "./Identifiable";

export interface BasicGuildPreview extends BasicIdentifiable {
    name: string;
    icon: string|null;
    splash: string|null;
    discovery_splash: string|null;
    emojis: BasicEmoji[];
    features: GuildFeature[];
    approximate_member_count: number;
    approximate_presence_count: number;
    description: string|null;
}
