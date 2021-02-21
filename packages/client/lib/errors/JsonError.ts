import { JSONErrorCode } from "@wilsonjs/constants";

export class JsonError extends Error {
    constructor(public readonly message: string, public readonly  code: JSONErrorCode) {
        super();
    }
}
