import { GatewayCompression, GatewayEncoding } from "@wilsonjs/constants";

export interface ClientOptions {
    encoding: GatewayEncoding
    compression: GatewayCompression;
}
