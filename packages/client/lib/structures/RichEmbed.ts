import {
    BasicEmbed,
    BasicEmbedFooter,
    BasicEmbedImage,
    BasicEmbedThumbnail,
    BasicEmbedVideo,
    BasicEmbedProvider,
    BasicEmbedAuthor,
    BasicEmbedField
} from "@wilsonjs/models";

import {
    EmbedType,
    ISOTimestamp
} from "@wilsonjs/constants";

import { User } from "./User";
import { GuildMember } from "./GuildMember";

type RGB = [ number, number, number ];

export class RichEmbed implements BasicEmbed {
    title?: string;
    type?: EmbedType;
    description?: string;
    url?: string;
    timestamp?: ISOTimestamp;
    color?: number;
    footer?: BasicEmbedFooter;
    image?: BasicEmbedImage;
    thumbnail?: BasicEmbedThumbnail;
    video?: BasicEmbedVideo;
    provider?: BasicEmbedProvider;
    author?: BasicEmbedAuthor;
    fields?: BasicEmbedField[];

    constructor(public basic: Partial<BasicEmbed> = {}) {
        this.update(basic);
    }

    get hexColor() {
        return this.color?.toString(16)?.padStart(6, "0");
    }

    toJSON(): BasicEmbed {
        return {
            title: this.title,
            type: this.type,
            description: this.description,
            url: this.url,
            timestamp: this.timestamp,
            color: this.color,
            footer: this.footer,
            image: this.image,
            thumbnail: this.thumbnail,
            video: this.video,
            provider: this.provider,
            author: this.author,
            fields: this.fields
        };
    }

    update(basic: Partial<BasicEmbed>) {
        if (basic.title !== undefined) this.title = basic.title;
        if (basic.type !== undefined) this.type = basic.type;
        if (basic.description !== undefined) this.description = basic.description;
        if (basic.url !== undefined) this.url = basic.url;
        if (basic.timestamp !== undefined) this.timestamp = basic.timestamp;
        if (basic.color !== undefined) this.color = basic.color;
        if (basic.footer !== undefined) this.footer = basic.footer;
        if (basic.image !== undefined) this.image = basic.image;
        if (basic.thumbnail !== undefined) this.thumbnail = basic.thumbnail;
        if (basic.video !== undefined) this.video = basic.video;
        if (basic.provider !== undefined) this.provider = basic.provider;
        if (basic.author !== undefined) this.author = basic.author;
        this.fields = basic.fields || [];
    }

    setTitle(title: string) {
        this.title = title;
        return this;
    }

    setBody(description: string) {
        this.description = description;
        return this;
    }

    setUrl(url: string) {
        this.url = url;
        return this;
    }

    setTimestamp(timestamp: string) {
        this.timestamp = timestamp;
        return this;
    }

    setColor(color: string|number|RGB) {
        if (typeof color === "string")  {
            this.color = parseInt(color, 16);
        } else if (typeof color === "number") {
            this.color = color >>> 0;
        } else {
            this.color = (color[0] << 16) | (color[1] << 8) | (color[2] << 0);
        }

        return this;
    }

    setFooter(footer: BasicEmbedFooter) {
        this.footer = footer;
        return this;
    }

    setImage(url: string) {
        if (url.startsWith("http")) {
            this.image = { url };
        } else {
            this.image = {
                url: "attachment://" + url
            };
        }

        return this;
    }

    setThumbnail(filename: string);
    setThumbnail(url: string) {
        if (url.startsWith("http")) {
            this.thumbnail = { url };
        } else {
            this.thumbnail = {
                url: "attachment://" + url
            };
        }

        return this;
    }

    setVideo(url: string) {
        this.video = { url };
        return this;
    }

    setProvider(name: string, url: string) {
        this.provider = { name, url };
        return this;
    }

    setAuthor(user: User);
    setAuthor(member: GuildMember);
    setAuthor(name?: User|GuildMember|string, url?: string, icon_url?: string) {
        if (!name && !url && !icon_url) {
            this.author = undefined;
        } else if (typeof name === "string") {
            this.author = { name, url, icon_url };
        } else if ((name as GuildMember).user) {
            const member = name as GuildMember;
            this.author = { name: member.displayName, icon_url: member.user.avatarUrl() };
        } else {
            const user = name as User;
            this.author = { name: user.tag, icon_url: user.avatarUrl() };
        }
        return this;
    }

    addField(title: string, body: string, inline = false) {
        this.fields = this.fields || [];
        this.fields.push({
            name: title,
            value: body,
            inline
        });
        return this;
    }

    addInline(title: string, body: string) {
        return this.addField(title, body, true);
    }

    clearFields() {
        this.fields = [];
        return this;
    }
}
