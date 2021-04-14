import { Snowflake, Status } from "@wilsonjs/constants";

export interface WidgetResponseChannel {
    id: Snowflake;
    name: string;
    position: number;
}

export interface WidgetResponseMember {
    id: Snowflake;
    username: string;
    discriminator: string;
    avatar: string | null;
    status: Status;
    avatar_url: string;
}

export interface GetGuildWidgetResponse {
    id: Snowflake;
    name: string;
    instant_invite: string;
    channels: WidgetResponseChannel[];
    members: WidgetResponseMember[];
    presence_count: number;
}
