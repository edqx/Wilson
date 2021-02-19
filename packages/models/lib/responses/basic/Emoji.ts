import { Snowflake } from "@jesse/constants";
import { BasicRole } from "./Role";
import { BasicUser } from "./User";

export interface BasicEmoji {
    id: Snowflake;
    name: string;
    roles?: BasicRole[];
    user?: BasicUser;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}
