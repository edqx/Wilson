import { BasicPermissionOverwrite } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Overwrite } from "./Overwrite";

export class RoleOverwrite extends Overwrite {
    constructor(
        protected client: WilsonClient,
        basic: Partial<BasicPermissionOverwrite>
    ) {
        super(client, basic);
    }

    get role() {
        return this.client.roles.resolve(this.id);
    }
}
