import { GatewayVersion } from "@jesse/constants";
import { BasicApplication } from "../../../basic/Application";
import { UnavailableGuild } from "../../../basic/Guild";
import { BasicUser } from "../../../basic/User";
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
