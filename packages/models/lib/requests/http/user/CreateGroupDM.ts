import { Snowflake } from "@wilsonjs/constants";

export interface CreateGroupDMRequest {
    access_tokens: string[];
    nicks: Record<Snowflake, string>;
}
