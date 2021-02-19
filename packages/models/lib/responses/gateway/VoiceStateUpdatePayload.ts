import { GatewayOpcode, Snowflake } from "@jesse/constants";
import { BasePayload } from "./BasePayload";

export interface VoiceStateUpdatePayloadData {
    guild_id: Snowflake
    channel_id: Snowflake|null;
    self_mute: boolean;
    self_deaf: boolean;
}

export interface VoiceStateUpdatePayload extends BasePayload {
    op: GatewayOpcode.VoiceStateUpdate;
    d: VoiceStateUpdatePayloadData;
}
