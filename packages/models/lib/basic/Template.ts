import { ISOTimestamp, Snowflake } from "@wilsonjs/constants";
import { BasicGuild } from "./Guild";
import { BasicUser } from "./User";

export interface BasicTemplate {
    code: string;
    name: string;
    description: string | null;
    usage_count: number;
    creator_id: Snowflake;
    creator: BasicUser;
    created_at: ISOTimestamp;
    updated_at: ISOTimestamp;
    source_guild_id: Snowflake;
    serialized_source_guild: BasicGuild;
    is_dirty: boolean | null;
}
