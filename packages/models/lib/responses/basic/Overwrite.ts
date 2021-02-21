import { Snowflake } from "@wilsonjs/constants";

export interface BasicPermissionOverwrite {
    id: Snowflake;
    type: number;
    allow: string;
    deny: string;
}
