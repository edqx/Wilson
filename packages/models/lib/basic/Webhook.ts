import { Snowflake } from "@wilsonjs/constants";
import { WebhookType } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";
import { BasicUser } from "./User";

export interface BasicWebhook extends BasicIdentifiable {
    type: WebhookType;
    guild_id?: Snowflake;
    channel_id: Snowflake;
    user?: BasicUser;
    name: string|null;
    avatar: string|null;
    token?: string;
    application_id: Snowflake|null;
}
