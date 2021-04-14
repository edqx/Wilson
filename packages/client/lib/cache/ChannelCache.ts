import { ChannelType, Snowflake } from "@wilsonjs/constants";
import { Cache } from "./Cache";
import { TextChannel } from "../structures";
import { BasicChannel } from "@wilsonjs/models";
import { WilsonClient } from "../Client";

export type AnyChannel = TextChannel;
export type AnyMessageable = TextChannel;

export class ChannelCache extends Cache<AnyChannel> {
    constructor(
        protected client: WilsonClient,
        entries?: ReadonlyArray<readonly [Snowflake, AnyChannel]> | null
    ) {
        super(client, entries);
    }

    add(basic: Partial<BasicChannel>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        switch (basic.type) {
            case ChannelType.GuildText:
                const textchannel = new TextChannel(this.client, basic);
                this.set(textchannel.id, textchannel);
                return textchannel;
            default:
                return {} as TextChannel;
        }
    }

    update(
        basic: Partial<BasicChannel>
    ): [AnyChannel | undefined, AnyChannel | undefined] {
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
