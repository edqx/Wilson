import { BasicRole } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Guild } from "./Guild";
import { Identifiable } from "./Identifiable";

export class Role extends Identifiable<BasicRole> {
    name: string;

    constructor(
        protected client: WilsonClient,
        public readonly guild: Guild,
        basic: Partial<BasicRole>
    ) {
        super(client, basic);
    }

    patch(basic: Partial<BasicRole>) {
        if (basic.name !== undefined) {
            this.name = basic.name;
        }
    }
}
