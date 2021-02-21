import { Snowflake } from "@wilsonjs/constants";
import { BasicGuild } from "@wilsonjs/models";
import { AnyChannel } from "../cache";

import { MaskedCache } from "../cache/Cache";
import { WilsonClient } from "../Client";
import { Emoji } from "./Emoji";
import { GuildMember } from "./GuildMember";
import { Identifiable } from "./Identifiable";
import { Role } from "./Role";

export class Guild extends Identifiable<BasicGuild> {
    name: string;
    owner_id: Snowflake;

    roles: MaskedCache<Role>;
    members: MaskedCache<GuildMember>;
    channels: MaskedCache<AnyChannel>;
    emojis: MaskedCache<Emoji>;

    constructor(protected client: WilsonClient, basic: Partial<BasicGuild>) {
        super(client, basic);
    }

    get owner() {
        return this.members.resolve(this.owner_id);
    }

    patch(basic: Partial<BasicGuild>) {
        if (basic.name !== undefined) this.name = basic.name;
        if (basic.owner_id !== undefined) {
            this.owner_id = basic.owner_id;
            this.client.users.add({ id: basic.owner_id });
        }

        if (basic.roles !== undefined) {
            this.roles = new MaskedCache(this.client, this.client.roles, new Set);
            for (const basic_role of basic.roles) {
                const role = this.client.roles.add(this, basic_role);
                this.roles.mask.add(role.id);
            }
        }

        if (basic.members !== undefined) {
            this.members = new MaskedCache(this.client, this.client.members, new Set);
            for (const basic_member of basic.members) {
                const member = this.client.members.add(this, basic_member.user?.id || "", basic_member);
                if (basic_member.user) this.members.mask.add(member.id);
            }

            const member_ids = new Set([...basic.members.filter(member => member.user !== undefined).map(member => member.user?.id)]);
            this.members = new MaskedCache(this.client, this.client.members, member_ids as Set<string>);
        }

        if (basic.channels !== undefined) {
            this.channels = new MaskedCache(this.client, this.client.channels, new Set);
            for (const basic_channel of basic.channels) {
                const channel = this.client.channels.add(basic_channel);
                this.channels.mask.add(channel.id);
            }
        }

        if (basic.emojis !== undefined) {
            this.emojis = new MaskedCache(this.client, this.client.emojis, new Set);
            for (const basic_emoji of basic.emojis) {
                const emoji = this.client.emojis.add(basic_emoji);
                this.emojis.mask.add(emoji.id);
            }
        }
    }
}
