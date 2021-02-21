import { Snowflake } from "@wilsonjs/constants";

export interface GuildChannelPositionModification {
    id: Snowflake;
    position: number|null;
}

export type ModifyGuildChannelPositionsRequest = GuildChannelPositionModification[];
