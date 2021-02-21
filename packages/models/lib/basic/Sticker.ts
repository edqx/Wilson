import { Snowflake, StickerFormatType } from "@wilsonjs/constants";
import { BasicIdentifiable } from "./Identifiable";

export interface BasicSticker extends BasicIdentifiable {
    pack_id: Snowflake;
    name: string;
    description: string;
    tags?: string;
    asset: string;
    preview_asset: string|null;
    format_type: StickerFormatType;
}
