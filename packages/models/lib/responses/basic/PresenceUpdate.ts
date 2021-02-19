import { Snowflake, Status } from "@jesse/constants";
import { BasicActivity } from "./Activity";
import { BasicUser } from "./User";

export interface ClientStatus {
    desktop?: Status;
    mobile?: Status;
    web?: Status;
}

export interface BasicPresenceUpdate {
    user: BasicUser;
    guild_id: Snowflake;
    status: Status;
    activities: BasicActivity[];
    client_status: ClientStatus;
}
