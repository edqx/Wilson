import { GatewayVersion } from "@wilsonjs/constants";
import { BasicApplication } from "../../../basic";
import { UnavailableGuild } from "../../../basic";
import { BasicUser } from "../../../basic";
import { ShardIdentifyTuple } from "../../IdentifyPayload";

export interface ReadyData {
    v: GatewayVersion;
    user: BasicUser;
    private_channels: [];
    guilds: UnavailableGuild[];
    session_id: string;
    shard?: ShardIdentifyTuple;
    application: BasicApplication;
}
