import { Snowflake } from "@wilsonjs/constants";

export interface BeginGuildPruneRequest {
    days?: number;
    complete_prune_count?: boolean;
    include_roles?: Snowflake[];
}
