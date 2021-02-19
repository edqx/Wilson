import { GatewayOpcode } from "@wilsonjs/constants";
import { BasePayload } from "./BasePayload";

export interface ResumePayloadData {
    token: string;
    session_id: string;
    seq: number;
}

export interface ResumePayload extends BasePayload {
    op: GatewayOpcode.Resume;
    d: ResumePayloadData;
}
