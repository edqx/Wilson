import { GatewayOpcode, GatewayIntentFlags } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";
import { UpdateStatusData } from "./dispatch/UpdateStatus";

export type ShardIdentifyTuple = [number, number];

export interface IdentifyConnectionProperties {
    $os: string;
    $browser: string;
    $device: string;
}

export interface IdentifyPayloadData {
    token: string;
    intents: GatewayIntentFlags;
    properties: IdentifyConnectionProperties;
    compress?: boolean;
    large_threshold?: number;
    shard?: ShardIdentifyTuple;
    presence?: UpdateStatusData;
    guild_subscriptions?: boolean;
}

export interface IdentifyPayload extends BasePayload {
    op: GatewayOpcode.Identify;
    d: IdentifyPayloadData;
}
