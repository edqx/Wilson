import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export type InvalidSessionPayloadData = boolean;

export interface InvalidSessionPayload extends BasePayload {
    op: GatewayOpcode.InvalidSession;
    d: InvalidSessionPayloadData;
}
