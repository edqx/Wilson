import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export interface HeartbeatPayload extends BasePayload {
    op: GatewayOpcode.Heartbeat;
    d: number;
}
