import { Snowflake } from "@wilsonjs/constants";

export interface PermissionOverwrite {
    id: Snowflake;
    type: number;
    allow: string;
    deny: string;
}
