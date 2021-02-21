import { Snowflake, ISOTimestamp, ChannelType } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";
import { BasicPermissionOverwrite } from "./Overwrite";
import { BasicUser } from "./User";

export interface BasicChannel extends BasicIdentifiable {
    type: ChannelType;
    guild_id?: Snowflake;
    position?: number;
    permission_overwrites?: BasicPermissionOverwrite[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: Snowflake;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: BasicUser[];
    icon?: string;
    owner_id?: Snowflake;
    application_id?: Snowflake;
    parent_id?: Snowflake;
    last_pin_timestamp: ISOTimestamp;
}
