import { GatewayOpcode } from "@wilsonjs/constants";

export interface BasePayload {
    op: GatewayOpcode;
    d?: unknown;
    s?: number;
    t?: string;
}
