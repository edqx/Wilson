import { Snowflake } from "@wilsonjs/constants";
import { BasicMessage } from "@wilsonjs/models";
import { Cache } from "./Cache";
import { Message } from "../structures";
import { WilsonClient } from "../Client";

export class MessageCache extends Cache<Message> {
    constructor(protected client: WilsonClient, entries?: ReadonlyArray<readonly [Snowflake, Message]>|null) {
        super(client, entries);
    }

    add(basic: Partial<BasicMessage>) {
        const updated = this.patch(basic);
        if (updated) return updated;

        const message = new Message(this.client, basic);
        this.set(message.id, message);
        return message;
    }

    update(basic: Partial<BasicMessage>): [ Message|undefined, Message|undefined ] {
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
