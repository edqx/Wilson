import { BasicGuildMember, BasicIdentifiable } from "@wilsonjs/models";
import { MaskedCache } from "../cache/Cache";
import { WilsonClient } from "../Client";
import { Guild } from "./Guild";
import { Identifiable } from "./Identifiable";
import { Role } from "./Role";
import { User } from "./User";

export type IdentifiableGuildMember = BasicGuildMember & BasicIdentifiable;

export class GuildMember extends Identifiable<IdentifiableGuildMember> {
    user: User;

    nickname: string | null;
    joined_at: Date;
    premium_since: Date | null;
    deafened: boolean;
    muted: boolean;

    roles: MaskedCache<Role>;

    constructor(
        protected client: WilsonClient,
        public readonly guild: Guild,
        basic: Partial<IdentifiableGuildMember>
    ) {
        super(client, basic);
    }

    get id() {
        return this.user?.id;
    }

    get displayName() {
        return this.nickname || this.user?.username;
    }

    get is_owner() {
        return this.user?.id === this.guild.owner_id;
    }

    patch(basic: Partial<IdentifiableGuildMember>) {
        if (basic.user !== undefined)
            this.user = this.client.users.add(basic.user);
        if (basic.nick !== undefined) this.nickname = basic.nick;
        if (basic.joined_at !== undefined)
            this.joined_at = new Date(basic.joined_at);
        if (basic.premium_since !== undefined)
            this.premium_since = basic.premium_since
                ? new Date(basic.premium_since)
                : null;
        if (basic.deaf !== undefined) this.deafened = basic.deaf;
        if (basic.mute !== undefined) this.muted = basic.mute;

        if (basic.roles !== undefined) {
            this.roles = new MaskedCache(
                this.client,
                this.client.roles,
                new Set([...basic.roles])
            );
        }
    }
}
