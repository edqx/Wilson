import { Snowflake } from "@jesse/constants";

export interface BasicAttachment {
    id: Snowflake;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number|null;
    width: number|null;
}
