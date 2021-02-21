import { IntegrationVisibility } from "@wilsonjs/constants";
import { BasicIntegration } from "./Integration";

export interface BasicConnection {
    id: string;
    name: string;
    type: string;
    revoked?: boolean;
    integrations?: BasicIntegration[];
    verified: boolean;
    friend_sync: boolean;
    show_activity: boolean;
    visibility: IntegrationVisibility;
}
