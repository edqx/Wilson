import { Status } from "@wilsonjs/constants";

import { BasicActivity } from "../../basic";

export interface UpdateStatusData {
    since?: number;
    activities?: BasicActivity[];
    status: Status;
    afk: boolean;
}
