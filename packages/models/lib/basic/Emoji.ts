import { Snowflake } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";
import { BasicUser } from "./User";

export interface BasicEmoji extends BasicIdentifiable {
    name: string;
    roles?: Snowflake[];
    user?: BasicUser;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}
