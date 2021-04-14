import { Snowflake } from "@wilsonjs/constants";

export interface GuildRolePositionsModification {
    id: Snowflake;
    position?: number | null;
}

export type ModifyGuildRolePositionsRequest = GuildRolePositionsModification[];
