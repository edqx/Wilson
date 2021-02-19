import { GatewayOpcode } from "@jesse/constants";
import { BasePayload } from "./BasePayload";

export interface HeartbeatAckPayload extends BasePayload {
    op: GatewayOpcode.HeartbeatAck;
}
