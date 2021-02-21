import { Snowflake } from "@wilsonjs/constants";
import { BasicGuild } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { Guild } from "../structures";
import { WilsonClient } from "../Client";

export class GuildCache extends Cache<Guild> {
    constructor(protected client: WilsonClient, entries?: ReadonlyArray<readonly [Snowflake, Guild]>|null) {
        super(client, entries);
    }

    add(basic: Partial<BasicGuild>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const guild = new Guild(this.client, basic);
        this.set(guild.id, guild);
        return guild;
    }

    update(basic: Partial<BasicGuild>): [ Guild|undefined, Guild|undefined ] {
        if (!basic.id)
            return [ undefined, undefined ];

        const current = this.get(basic.id);

        if (!current) {
            const new_item = this.add(basic);
            return [ undefined, new_item ];
        }

        const old_item = Object.assign(Object.create(current), current);

        current.patch(basic);

        return [ old_item, current ];
    }
}
