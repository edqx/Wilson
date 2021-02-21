import { ActivityType, ActivityFlags, Snowflake, Timestamp } from "@wilsonjs/constants";

export interface ActivityTimestampData {
    start: Timestamp;
    end: Timestamp;
}

export interface ActivityEmojiData {
    name: string;
    id: Snowflake;
    animated: boolean;
}

export type ActivityPartySizeTuple = [ number, number ];

export interface ActivityPartyData {
    id: string;
    size: ActivityPartySizeTuple;
}

export interface ActivityAssetsData {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
}

export interface ActivitySecrets {
    join: string;
    spectate: string;
    match: string;
}

export interface BasicActivity {
    name: string;
    type: ActivityType;
    url: string;
    created_at: Timestamp;
    timestamps: ActivityTimestampData;
    application_id: Snowflake;
    details: string;
    state: string;
    emoji: ActivityEmojiData;
    party: ActivityPartyData;
    assets: ActivityAssetsData;
    secrets: ActivitySecrets;
    instance: boolean;
    flags: ActivityFlags;
}
