export interface ModifyGuildRoleRequest {
    name?: string;
    permissions?: string|null;
    color?: number|null;
    hoist?: boolean|null;
    mentionable?: boolean|null;
}
