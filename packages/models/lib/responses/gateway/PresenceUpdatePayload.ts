import { GatewayOpcode, Status } from "@jesse/constants";
import { BasicActivity } from "../basic/Activity";
import { BasePayload } from "./BasePayload";

export interface PresenceUpdatePayloadData {
    since: number|null;
    activities: BasicActivity[]|null;
    status: Status;
    afk: boolean;
}

export interface PresenceUpdatePayload extends BasePayload {
    op: GatewayOpcode.PresenceUpdate;
    d: PresenceUpdatePayloadData;
}
