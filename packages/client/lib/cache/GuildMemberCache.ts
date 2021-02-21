import { Snowflake } from "@wilsonjs/constants";
import { BasicGuildMember } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { Guild, GuildMember } from "../structures";
import { WilsonClient } from "../Client";

export class GuildMemberCache extends Cache<GuildMember> {
    constructor(protected client: WilsonClient, entries?: ReadonlyArray<readonly [Snowflake, GuildMember]>|null) {
        super(client, entries);
    }

    add(guild: Guild, id: Snowflake, basic: Partial<BasicGuildMember>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const member = new GuildMember(this.client, guild, { ...basic, id });
        this.set(member.id, member);
        return member;
    }

    update(guild: Guild, id: Snowflake, basic: Partial<BasicGuildMember>): [ GuildMember|undefined, GuildMember|undefined ] {
        if (!id)
            return [ undefined, undefined ];

        const current = this.get(id);

        if (!current) {
            const new_item = this.add(guild, id, basic);
            return [ undefined, new_item ];
        }

        const old_item = Object.assign(Object.create(current), current);

        current.patch(basic);

        return [ old_item, current ];
    }
}
