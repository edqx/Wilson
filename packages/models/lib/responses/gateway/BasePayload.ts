import { GatewayOpcode } from "@jesse/constants";

export interface BasePayload {
    op: GatewayOpcode;
    d?: unknown;
    s?: number;
    t?: string;
}
