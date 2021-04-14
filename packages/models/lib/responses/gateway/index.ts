import { DispatchPayload } from "./DispatchPayload";
import { HeartbeatAckPayload } from "./HeartbeatAckPayload";
import { HeartbeatPayload } from "./HeartbeatPayload";
import { HelloPayload } from "./HelloPayload";
import { IdentifyPayload } from "./IdentifyPayload";
import { InvalidSessionPayload } from "./InvalidSessionPayload";
import { PresenceUpdatePayload } from "./PresenceUpdatePayload";
import { ReconnectPayload } from "./ReconnectPayload";
import { RequestGuildMembersPayload } from "./RequestGuildMembersPayload";
import { ResumePayload } from "./ResumePayload";
import { VoiceStateUpdatePayload } from "./VoiceStateUpdatePayload";

type GatewayPayload =
    | DispatchPayload
    | HeartbeatAckPayload
    | HeartbeatPayload
    | HelloPayload
    | IdentifyPayload
    | InvalidSessionPayload
    | PresenceUpdatePayload
    | ReconnectPayload
    | RequestGuildMembersPayload
    | ResumePayload
    | VoiceStateUpdatePayload;

export {
    GatewayPayload,
    DispatchPayload,
    HeartbeatAckPayload,
    HeartbeatPayload,
    HelloPayload,
    IdentifyPayload,
    InvalidSessionPayload,
    PresenceUpdatePayload,
    ReconnectPayload,
    RequestGuildMembersPayload,
    ResumePayload,
    VoiceStateUpdatePayload,
};
