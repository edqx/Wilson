import { BasicEmoji } from "@wilsonjs/models";
import { MaskedCache } from "../cache/Cache";
import { WilsonClient } from "../Client";
import { Identifiable } from "./Identifiable";
import { Role } from "./Role";
import { User } from "./User";

export class Emoji extends Identifiable<BasicEmoji> {
    name: string;
    roles: MaskedCache<Role>;
    user: User;
    require_colons: boolean;
    managed: boolean;
    animated: boolean;
    available: boolean;

    constructor(protected client: WilsonClient, basic: Partial<BasicEmoji>) {
        super(client, basic);
    }

    patch(basic: Partial<BasicEmoji>) {
        if (basic.name !== undefined) this.name = basic.name;
        if (basic.roles !== undefined) {
            this.roles = new MaskedCache(this.client, this.client.roles, new Set([...basic.roles]));
        }
        if (basic.user !== undefined) {
            this.user = this.client.users.add(basic.user);
        }
        if (basic.require_colons !== undefined) this.require_colons = basic.require_colons;
        if (basic.managed !== undefined) this.require_colons = basic.managed;
        if (basic.animated !== undefined) this.require_colons = basic.animated;
        if (basic.available !== undefined) this.require_colons = basic.available;
    }
}
