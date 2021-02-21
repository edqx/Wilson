import { Snowflake } from "@wilsonjs/constants";

export interface BasicGuildWidget {
    enabled: boolean;
    channel_id: Snowflake|null;
}
