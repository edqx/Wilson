import { Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "../../../basic/GuildMember";
import { BasicPresenceUpdate } from "../../../basic/PresenceUpdate";

export interface GuildMembersChunkData {
    guild_id: Snowflake;
    members: BasicGuildMember[];
    chunk_index: number;
    chunk_count: number;
    not_found?: string[];
    presences?: BasicPresenceUpdate[];
    nonce?: string;
}
