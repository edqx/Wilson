import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export interface HelloPayloadData {
    heartbeat_interval: number;
}

export interface HelloPayload extends BasePayload {
    op: GatewayOpcode.Hello;
    d: HelloPayloadData;
}
