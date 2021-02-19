import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export type ReconnectPayloadData = Record<string, never>;

export interface ReconnectPayload extends BasePayload {
    op: GatewayOpcode.Reconnect;
}
