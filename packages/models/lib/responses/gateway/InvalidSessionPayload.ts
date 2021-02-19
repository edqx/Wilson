import { GatewayOpcode } from "@jesse/constants";
import { BasePayload } from "./BasePayload";

export type InvalidSessionPayloadData = boolean;

export interface InvalidSessionPayload extends BasePayload {
    op: GatewayOpcode.InvalidSession;
    d: InvalidSessionPayloadData;
}
