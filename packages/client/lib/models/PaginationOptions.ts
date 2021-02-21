import { Snowflake } from "@wilsonjs/constants";
import { Identifiable } from "../structures";

export interface PaginationOptions {
    before: Snowflake;
    after: Snowflake;
    limit: number;
}

export interface IdentifiablePaginationOptions<T extends Identifiable> {
    before?: T|Snowflake;
    after?: T|Snowflake;
    limit?: number;
}
