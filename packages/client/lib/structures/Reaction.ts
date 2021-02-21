import { ApiEndpoints } from "@wilsonjs/constants";
import { BasicIdentifiable, BasicReaction, BasicUser } from "@wilsonjs/models";
import { MaskedCache } from "../cache/Cache";
import { WilsonClient } from "../Client";
import { IdentifiablePaginationOptions } from "../models/PaginationOptions";
import { Querystring } from "../utils";
import { Emoji } from "./Emoji";
import { Identifiable } from "./Identifiable";
import { Message } from "./Message";
import { ResolvableUser, User } from "./User";

export type IdentifiableReaction = BasicReaction & BasicIdentifiable;

export class Reaction extends Identifiable<IdentifiableReaction> {
    count: number;
    me: boolean;
    emoji: Emoji;

    constructor(protected client: WilsonClient, public readonly message: Message, basic: Partial<IdentifiableReaction>) {
        super(client, basic);
    }

    get id() {
        return this.emoji?.id;
    }

    patch(basic: Partial<IdentifiableReaction>) {
        if (basic.count !== undefined) this.count = basic.count;
        if (basic.me !== undefined) this.me = basic.me;
        if (basic.emoji !== undefined) this.emoji = this.client.emojis.add(basic.emoji);
    }

    async getUsers(pagination?: IdentifiablePaginationOptions<ResolvableUser>) {
        const before = pagination?.before ? this.client.users.resolveID(pagination.before) : undefined;
        const after = pagination?.after ? this.client.users.resolveID(pagination.after) : undefined;

        const query = pagination ? {
            before,
            after,
            limit: pagination.limit
        } as Querystring : undefined;

        const res = await this.client.make<BasicUser[]>("GET", { query }, ApiEndpoints.GetReactions, this.message.channel, this.message, this.emoji);

        const users = new MaskedCache<User>(this.client, this.client.users, new Set);
        for (const basic_user of res) {
            const user = this.client.users.add(basic_user);
            users.mask.add(user.id);
        }
        return users;
    }
}
