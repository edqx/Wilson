import { WilsonClient } from "../Client";

export class Networkable<BasicType = any> {
    constructor(protected client: WilsonClient, basic: Partial<BasicType>) {
        this.patch(basic);
    }

    patch(basic: Partial<BasicType>) { void basic; }
}
