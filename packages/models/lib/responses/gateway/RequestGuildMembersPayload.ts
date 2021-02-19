import { GatewayOpcode, Snowflake } from "@jesse/constants";
import { BasePayload } from "./BasePayload";

export interface RequestGuildMembersPayloadData {
    guild_id: Snowflake;
    query?: string;
    limit: number;
    presences?: boolean;
    user_ids?: Snowflake[]|Snowflake;
    nonce?: string;
}

export interface RequestGuildMembersPayload extends BasePayload {
    op: GatewayOpcode.RequestGuildMembers;
    d: RequestGuildMembersPayloadData;
}
