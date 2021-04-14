import { PermissionOverwriteType } from "@wilsonjs/constants";
import { BasicPermissionOverwrite } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Identifiable } from "./Identifiable";

export class Overwrite extends Identifiable<BasicPermissionOverwrite> {
    type: PermissionOverwriteType;
    allow: string;
    deny: string;

    constructor(
        protected client: WilsonClient,
        basic: Partial<BasicPermissionOverwrite>
    ) {
        super(client, basic);
    }

    patch(basic: Partial<BasicPermissionOverwrite>) {
        if (basic.type !== undefined) this.type = basic.type;
        if (basic.allow !== undefined) this.allow = basic.allow;
        if (basic.deny !== undefined) this.deny = basic.deny;
    }
}
