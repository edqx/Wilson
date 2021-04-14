import { PermissionFlags } from "@wilsonjs/constants";

export interface ModifyGuildRoleRequest {
    name?: string;
    permissions?: PermissionFlags | null;
    color?: number | null;
    hoist?: boolean | null;
    mentionable?: boolean | null;
}
