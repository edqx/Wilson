import Collection from "@discordjs/collection";
import { Snowflake } from "@wilsonjs/constants";
import { WilsonClient } from "../Client";
import { Identifiable } from "../structures";

export type Resolvable<V extends Identifiable> = Snowflake | V;

export class MaskedCache<V extends Identifiable> {
    constructor(
        protected client: WilsonClient,
        public readonly cache: Cache<V>,
        public readonly mask: Set<Snowflake>
    ) {}

    resolve(resolvable: Resolvable<V>) {
        const resolved_id = this.resolveID(resolvable);

        if (!resolved_id) return undefined;

        return this.cache.get(resolved_id);
    }

    resolveID(resolvable: Resolvable<V>): Snowflake | undefined {
        const resolved_id = this.cache.resolveID(resolvable);

        if (this.mask.has(resolved_id)) {
            return resolved_id;
        }

        return undefined;
    }
}

export type GetBasic<V extends Identifiable> = V extends Identifiable<infer U>
    ? U
    : never;

export class Cache<V extends Identifiable> extends Collection<Snowflake, V> {
    constructor(
        protected client: WilsonClient,
        entries?: ReadonlyArray<readonly [Snowflake, V]> | null
    ) {
        super(entries);
    }

    createMask(mask: Set<Snowflake>) {
        return new MaskedCache<V>(this.client, this, mask);
    }

    resolve(resolvable: Resolvable<V>) {
        const resolved_id = this.resolveID(resolvable);

        return this.get(resolved_id);
    }

    resolveID(resolvable: Resolvable<Identifiable>): Snowflake {
        return typeof resolvable === "string" ? resolvable : resolvable.id;
    }

    patch(basic: Partial<GetBasic<V>>) {
        if (!basic.id) return undefined;

        const cached = this.get(basic.id);
        if (cached) {
            cached.patch(basic);
            return cached;
        }
        return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    add(...args: any[]): V | undefined {
        return undefined;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(...args: any[]): [V | undefined, V | undefined] {
        return [undefined, undefined];
    }

    remove(basic: Partial<GetBasic<V>>) {
        if (!basic.id) return undefined;

        const current = this.get(basic.id);

        if (current) {
            this.delete(basic.id);
            return current;
        }

        return null;
    }
}
