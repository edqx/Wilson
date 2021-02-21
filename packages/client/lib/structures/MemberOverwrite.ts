import { BasicPermissionOverwrite } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Overwrite } from "./Overwrite";

export class MemberOverwrite extends Overwrite {
    constructor(protected client: WilsonClient, basic: Partial<BasicPermissionOverwrite>) {
        super(client, basic);
    }

    get member() {
        return this.client.members.resolve(this.id);
    }
}
