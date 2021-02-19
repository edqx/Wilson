import { Snowflake, StickerFormatType } from "@wilsonjs/constants";

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
