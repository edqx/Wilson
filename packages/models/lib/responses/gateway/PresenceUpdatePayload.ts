import { GatewayOpcode, Status } from "@wilsonjs/constants";
import { BasicActivity } from "../../basic";
import { BasePayload } from "./BasePayload";

export interface PresenceUpdatePayloadData {
    since: number | null;
    activities: BasicActivity[] | null;
    status: Status;
    afk: boolean;
}

export interface PresenceUpdatePayload extends BasePayload {
    op: GatewayOpcode.PresenceUpdate;
    d: PresenceUpdatePayloadData;
}
