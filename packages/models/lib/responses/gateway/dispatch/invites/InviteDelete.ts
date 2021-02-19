import { Snowflake } from "@wilsonjs/constants";

export interface InviteDeleteData {
    channel_id: Snowflake;
    guild_id?: Snowflake;
    code: string;
}
