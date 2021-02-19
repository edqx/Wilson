import { Snowflake } from "@jesse/constants";

export interface PermissionOverwrite {
    id: Snowflake;
    type: number;
    allow: string;
    deny: string;
}
