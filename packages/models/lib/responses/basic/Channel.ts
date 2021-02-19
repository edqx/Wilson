import { Snowflake, ISOTimestamp, ChannelType } from "@jesse/constants";
import { PermissionOverwrite } from "./Overwrite";
import { BasicUser } from "./User";

export interface BasicChannel {
    id: Snowflake;
    type: ChannelType;
    guild_id?: Snowflake;
    position?: number;
    permission_overwrites?: PermissionOverwrite[];
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
