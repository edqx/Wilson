import { Snowflake } from "@jesse/constants";

export interface RoleTags {
    bot_id?: Snowflake;
    integration_id?: Snowflake;
    premium_subscriber?: null;
}

export interface BasicRole {
    id: Snowflake;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTags;
}
