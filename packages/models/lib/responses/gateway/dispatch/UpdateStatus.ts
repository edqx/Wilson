import { Status } from "@jesse/constants";

import { BasicActivity } from "../../basic/Activity";

export interface UpdateStatusData {
    since?: number;
    activities?: BasicActivity[];
    status: Status;
    afk: boolean;
}
