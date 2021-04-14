import { BasicIdentifiable } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Snowflake } from "../types";
import {
    getInternalProcessID,
    getInternalWorkerID,
    getTimestamp,
} from "../utils/Snowflake";
import { Networkable } from "./Networkable";

export class Identifiable<
    BasicType extends BasicIdentifiable = BasicIdentifiable
> extends Networkable<BasicType> {
    protected _id: Snowflake;

    constructor(protected client: WilsonClient, basic: Partial<BasicType>) {
        super(client, basic);
        this._id = basic.id as Snowflake;
    }

    get id() {
        return this._id;
    }

    toJSON() {
        return {
            id: this.id,
        };
    }

    patch(basic: Partial<BasicType>) {
        void basic;
    }

    get created_timestamp() {
        return getTimestamp(this.id);
    }

    get workerid() {
        return getInternalWorkerID(this.id);
    }

    get processid() {
        return getInternalProcessID(this.id);
    }
}
