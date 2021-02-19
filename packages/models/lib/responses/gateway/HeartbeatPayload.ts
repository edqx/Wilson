import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export interface HeartbeatPayload extends BasePayload {
    opcode: GatewayOpcode.Heartbeat;
    d: number;
}
