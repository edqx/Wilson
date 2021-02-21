import { Snowflake } from "@wilsonjs/constants";

export interface CreateGuildIntegrationRequest {
    type: string;
    id: Snowflake;
}
