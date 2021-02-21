import { Snowflake } from "@wilsonjs/constants";
import { WebhookType } from "@wilsonjs/constants";
import { BasicUser } from "./User";

export interface BasicWebhook {
    id: Snowflake;
    type: WebhookType;
    guild_id?: Snowflake;
    channel_id: Snowflake;
    user?: BasicUser;
    name: string|null;
    avatar: string|null;
    token?: string;
    application_id: Snowflake|null;
}
