import { Snowflake } from "../types";
import {
    getInternalProcessID,
    getInternalWorkerID,
    getTimestamp
} from "../utils/Snowflake";

export class Identifiable {
    constructor(readonly id: Snowflake) {}

    get timestamp() {
        return getTimestamp(this.id);
    }

    get workerid() {
        return getInternalWorkerID(this.id);
    }

    get processid() {
        return getInternalProcessID(this.id);
    }
}
