import { ISOTimestamp, EmbedType } from "@jesse/constants";

export interface BasicEmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface BasicEmbedImage {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface BasicEmbedThumbnail {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface BasicEmbedVideo {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

export interface BasicEmbedProvider {
    name?: string;
    url?: string;
}

export interface BasicEmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface BasicEmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

export interface BasicEmbed {
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
}
