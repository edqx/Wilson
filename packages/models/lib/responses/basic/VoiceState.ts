import { Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "./GuildMember";

export interface BasicVoiceState {
    guild_id?: Snowflake;
    channel_id: Snowflake|null;
    user_id: Snowflake;
    member?: BasicGuildMember;
    session_id: string;
    deaf: boolean;
    mute: boolean;
    self_deaf: boolean;
    self_mute: boolean;
    self_stream?: boolean;
    self_video: boolean;
    suppress: boolean;
}
