import { Snowflake } from "@wilsonjs/constants";
import { BasicRole } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { Guild, Role } from "../structures";
import { WilsonClient } from "../Client";

export class RoleCache extends Cache<Role> {
    constructor(protected client: WilsonClient, entries?: ReadonlyArray<readonly [Snowflake, Role]>|null) {
        super(client, entries);
    }

    add(guild: Guild, basic: Partial<BasicRole>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const role = new Role(this.client, guild, basic);
        this.set(role.id, role);
        return role;
    }

    update(guild: Guild, basic: Partial<BasicRole>): [ Role|undefined, Role|undefined ] {
        if (!basic.id)
            return [ undefined, undefined ];

        const current = this.get(basic.id);

        if (!current) {
            const new_item = this.add(guild, basic);
            return [ undefined, new_item ];
        }

        const old_item = Object.assign(Object.create(current), current);

        current.patch(basic);

        return [ old_item, current ];
    }
}
