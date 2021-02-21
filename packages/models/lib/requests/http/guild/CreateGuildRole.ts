import { PermissionFlags } from "@wilsonjs/constants";

export interface CreateGuildRoleRequest {
    name?: string;
    permissions?: PermissionFlags;
    color?: number;
    hoist?: boolean;
    mentionable?: boolean;
}
