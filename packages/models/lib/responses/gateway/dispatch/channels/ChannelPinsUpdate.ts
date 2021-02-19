import { ISOTimestamp, Snowflake } from "@jesse/constants";

export interface ChannelPinsUpdateData {
    guild_id: Snowflake;
    channel_id: Snowflake;
    last_pin_timestamp: ISOTimestamp;
}
