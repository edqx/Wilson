import { IntegrationExpireBehaviour } from "@wilsonjs/constants";

export interface ModifyGuildIntegrationRequest {
    expire_behaviour?: IntegrationExpireBehaviour;
    expire_grace_period?: number;
    enable_emoticons?: boolean;
}
