import { Snowflake } from "@wilsonjs/constants";
import { Cache } from "./Cache";
import { Emoji } from "../structures";
import { BasicEmoji } from "@wilsonjs/models";
import { WilsonClient } from "../Client";

export class EmojiCache extends Cache<Emoji> {
    constructor(
        protected client: WilsonClient,
        entries?: ReadonlyArray<readonly [Snowflake, Emoji]> | null
    ) {
        super(client, entries);
    }

    add(basic: Partial<BasicEmoji>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const emoji = new Emoji(this.client, basic);
        this.set(emoji.id, emoji);
        return emoji;
    }

    update(basic: Partial<BasicEmoji>): [Emoji | undefined, Emoji | undefined] {
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
