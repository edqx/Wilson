import { Snowflake } from "@wilsonjs/constants";
import { BasicUser } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { User } from "../structures";
import { WilsonClient } from "../Client";

export class UserCache extends Cache<User> {
    constructor(
        protected client: WilsonClient,
        entries?: ReadonlyArray<readonly [Snowflake, User]> | null
    ) {
        super(client, entries);
    }

    add(basic: Partial<BasicUser>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const user = new User(this.client, basic);
        this.set(user.id, user);
        return user;
    }

    update(basic: Partial<BasicUser>): [User | undefined, User | undefined] {
        if (!basic.id) return [undefined, undefined];

        const current = this.get(basic.id);

        if (!current) {
            const new_item = this.add(basic);
            return [undefined, new_item];
        }

        const old_item = Object.assign(Object.create(current), current);

        current.patch(basic);

        return [old_item, current];
    }
}
