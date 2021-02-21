import { PermissionFlags, PermissionOverwriteType } from "@wilsonjs/constants";

export interface EditChannelPermissionsRequest {
    allow: PermissionFlags;
    deny: PermissionFlags;
    type: PermissionOverwriteType;
}
