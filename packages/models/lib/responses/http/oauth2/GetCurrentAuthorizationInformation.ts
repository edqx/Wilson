import { ISOTimestamp } from "@wilsonjs/constants";
import { BasicApplication, BasicUser } from "../../../basic";

export interface GetCurrentAuthorizationInformationResponse {
    application: Partial<BasicApplication>;
    scopes: string[];
    expires: ISOTimestamp;
    user?: BasicUser;
}
