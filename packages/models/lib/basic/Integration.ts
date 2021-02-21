import { Snowflake, ExpireBehaviour, ISOTimestamp } from "@wilsonjs/constants";
import { BasicAccount } from "./Account";
import { BasicApplication } from "./Application";
import { BasicIdentifiable } from "./Identifiable";
import { BasicUser } from "./User";

export interface BasicIntegration extends BasicIdentifiable {
    name: string;
    type: string;
    enabled: boolean;
    syncing?: boolean;
    role_id?: Snowflake;
    enable_emoticons?: boolean;
    expire_behaviour?: ExpireBehaviour;
    expire_grace_period?: number;
    user?: BasicUser;
    account: BasicAccount;
    synced_at?: ISOTimestamp;
    subscriber_count?: number;
    revoked?: boolean;
    application?: BasicApplication;
}
