import { MembershipState, Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "./User";

export interface BasicTeamMember {
    membership_state: MembershipState;
    permissions: string[];
    team_id: Snowflake;
    user: BasicUser;
}

export interface BasicTeam {
    icon: string|null;
    id: Snowflake;
    members: BasicTeam[];
    owner_user_id: Snowflake;
}

export interface BasicApplication {
    id: Snowflake;
    name: string;
    icon: string|null;
    description: string;
    rpc_origins?: string[];
    bot_public: boolean;
    bot_require_code_grant: boolean;
    owner: BasicUser;
    summary: string;
    verify_key: string;
    team: BasicTeam|null;
    guild_id?: Snowflake;
    primary_sku_id?: Snowflake;
    slug?: string;
    cover_image?: string;
    flags: number;
}
