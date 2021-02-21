import { ChannelType } from "@wilsonjs/constants";
import { BasicChannel } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Identifiable } from "./Identifiable";

export class Channel extends Identifiable<BasicChannel> {
    type: ChannelType;

    constructor(protected client: WilsonClient, basic: Partial<BasicChannel>) {
        super(client, basic);
    }
}
