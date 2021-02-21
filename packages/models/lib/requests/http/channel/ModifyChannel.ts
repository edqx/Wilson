import { ChannelType, Snowflake } from "@wilsonjs/constants";
import { BasicPermissionOverwrite } from "../../../basic";

export interface ModifyChannelRequest {
    name?: string;
    type?: ChannelType;
    position?: number|null;
    topic?: string|null;
    nsfw?: boolean|null;
    rate_limit_per_user?: number|null;
    bitrate?: number|null;
    user_limit?: number|null;
    permission_overwrites?: BasicPermissionOverwrite[]|null;
    parent_id?: Snowflake|null;
}
