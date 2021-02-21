import { TargetUserType } from "@wilsonjs/constants";
import { BasicChannel } from "./Channel";
import { BasicGuild } from "./Guild";
import { BasicUser } from "./User";

export interface BasicInvite {
    code: string;
    guild?: BasicGuild;
    channel: BasicChannel;
    inviter?: BasicUser;
    targt_user?: BasicUser;
    target_user_type?: TargetUserType;
    approximate_presence_count?: number;
    approximate_member_count?: number;
}
