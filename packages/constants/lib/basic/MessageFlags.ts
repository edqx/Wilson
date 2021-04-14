export const MessageFlag = {
    Crossposted: 1 << 0,
    IsCrosspost: 1 << 1,
    SuppressEmbeds: 1 << 2,
    SourceMessageDeleted: 1 << 3,
    Urgent: 1 << 4,
    HasThreads: 1 << 5,
    Ephemeral: 1 << 6,
} as const;

export type MessageFlags = number;
