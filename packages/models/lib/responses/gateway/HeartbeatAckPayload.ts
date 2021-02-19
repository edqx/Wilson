import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export interface HeartbeatAckPayload extends BasePayload {
    op: GatewayOpcode.HeartbeatAck;
}
