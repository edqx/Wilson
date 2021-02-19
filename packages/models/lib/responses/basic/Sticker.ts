import { Snowflake, StickerFormatType } from "@jesse/constants";

export interface BasicSticker {
    id: Snowflake;
    pack_id: Snowflake;
    name: string;
    description: string;
    tags?: string;
    asset: string;
    preview_asset: string|null;
    format_type: StickerFormatType;
}
