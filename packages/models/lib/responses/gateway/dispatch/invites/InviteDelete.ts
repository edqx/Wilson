import { Snowflake } from "@jesse/constants";

export interface InviteDeleteData {
    channel_id: Snowflake;
    guild_id?: Snowflake;
    code: string;
}
