import { Snowflake } from "@wilsonjs/constants";

export interface CreateGuildEmojiRequest {
    name: string;
    image: string;
    roles: Snowflake[];
}
