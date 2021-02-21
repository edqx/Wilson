import { ChannelType, Snowflake } from "@wilsonjs/constants";
import { BasicPermissionOverwrite } from "../../../basic";

export interface CreateGuildChannelRequest {
    name: string;
    type?: ChannelType;
    topic?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    position?: number;
    permission_overwrites?: BasicPermissionOverwrite[];
    parent_id?: Snowflake;
    nsfw?: boolean;
}
