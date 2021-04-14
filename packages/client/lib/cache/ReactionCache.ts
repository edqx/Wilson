import { Snowflake } from "@wilsonjs/constants";
import { BasicReaction } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { Message, Reaction } from "../structures";
import { WilsonClient } from "../Client";

export class ReactionCache extends Cache<Reaction> {
    constructor(
        protected client: WilsonClient,
        entries?: ReadonlyArray<readonly [Snowflake, Reaction]> | null
    ) {
        super(client, entries);
    }

    add(message: Message, id: Snowflake, basic: Partial<BasicReaction>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const reaction = new Reaction(this.client, message, { ...basic, id });
        this.set(reaction.id, reaction);
        return reaction;
    }

    update(
        message: Message,
        id: Snowflake,
        basic: Partial<BasicReaction>
    ): [Reaction | undefined, Reaction | undefined] {
        if (id) return [undefined, undefined];

        const current = this.get(id);

        if (!current) {
            const new_item = this.add(message, id, basic);
            return [undefined, new_item];
        }

        const old_item = Object.assign(Object.create(current), current);

        current.patch(basic);

        return [old_item, current];
    }
}
