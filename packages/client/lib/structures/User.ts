import { BasicUser } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { Identifiable } from "./Identifiable";

export class User extends Identifiable {
    username: string;
    discriminator: string;
    bot: boolean;
    system: boolean;
    mfa_enabled: boolean;
    locale: string;
    verified: boolean;
    email: string;

    constructor(protected client: WilsonClient, data: BasicUser) {
        super(data.id);

        this.username = data.username;
        this.discriminator = data.discriminator;
        this.bot = data.bot || false;
        this.system = data.system || false;
        this.mfa_enabled = data.mfa_enabled || false;
        this.locale = data.locale;
        this.verified = data.verified || false;
        this.email = data.email;
    }

    get isme() {
        return this === this.client.user;
    }

    async fetch() {
        return await this.client.getUser(this.id);
    }
}
