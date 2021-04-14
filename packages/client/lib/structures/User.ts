import { BaseUrls, CdnEndpoints, ImageFormat } from "@wilsonjs/constants";
import { BasicUser } from "@wilsonjs/models";
import { WilsonClient } from "../Client";
import { formatEndpoint } from "../utils";
import { GuildMember } from "./GuildMember";
import { Identifiable } from "./Identifiable";

export type ResolvableUser = User | GuildMember;

export class User extends Identifiable<BasicUser> {
    username: string;
    discriminator: string;
    avatar_hash: string;
    bot: boolean;
    system: boolean;
    mfa_enabled: boolean;
    locale: string;
    verified: boolean;
    email: string;

    constructor(protected client: WilsonClient, basic: Partial<BasicUser>) {
        super(client, basic);
    }

    get tag() {
        return this.username + "#" + this.discriminator;
    }

    get isme() {
        return this.id === this.client.user.id;
    }

    avatarUrl(
        format: ImageFormat = ImageFormat.PNG,
        dynamic = true,
        use_default = true
    ) {
        if (!this.avatar_hash) {
            if (use_default) {
                const discrim_type =
                    ((this.discriminator as unknown) as number) % 5;

                return (
                    BaseUrls.CDN +
                    formatEndpoint(
                        CdnEndpoints.DefaultUserAvatar,
                        discrim_type,
                        format
                    )
                );
            }
        } else if (this.avatar_hash.startsWith("a_") && dynamic) {
            return this.avatarUrl(ImageFormat.GIF, use_default);
        } else {
            return (
                BaseUrls.CDN +
                formatEndpoint(
                    CdnEndpoints.UserAvatar,
                    this,
                    this.avatar_hash,
                    format
                )
            );
        }
    }

    patch(basic: Partial<BasicUser>) {
        if (basic.username !== undefined) this.username = basic.username;
        if (basic.discriminator !== undefined)
            this.discriminator = basic.discriminator;
        if (basic.avatar !== undefined) this.avatar_hash = basic.avatar;
        if (basic.bot !== undefined) this.bot = basic.bot;
        if (basic.system !== undefined) this.system = basic.system;
        if (basic.mfa_enabled !== undefined)
            this.mfa_enabled = basic.mfa_enabled;
        if (basic.locale !== undefined) this.locale = basic.locale;
        if (basic.verified !== undefined) this.verified = basic.verified;
        if (basic.email !== undefined) this.email = basic.email;
    }

    async fetch() {
        return await this.client.getUser(this.id);
    }
}
