import { Snowflake } from "@wilsonjs/constants";

export interface ModifyGuildEmojiRequest {
    name: string;
    roles: Snowflake[] | null;
}
