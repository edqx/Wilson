import { Snowflake } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";

export interface RoleTags {
    bot_id?: Snowflake;
    integration_id?: Snowflake;
    premium_subscriber?: null;
}

export interface BasicRole extends BasicIdentifiable {
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTags;
}
