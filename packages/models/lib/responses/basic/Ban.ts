import { BasicUser } from "./User";

export interface BasicBan {
    reason: string|null;
    user: BasicUser;
}
