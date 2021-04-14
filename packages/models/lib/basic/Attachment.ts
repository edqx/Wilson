import { BasicIdentifiable } from "./Identifiable";

export interface BasicAttachment extends BasicIdentifiable {
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;
}
