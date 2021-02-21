import { PermissionOverwriteType } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";

export interface BasicPermissionOverwrite extends BasicIdentifiable {
    type: PermissionOverwriteType;
    allow: string;
    deny: string;
}
