export const SystemChannelFlag = {
    SuppressJoinNotifications: 1 << 0,
    SuppressPremiumSubscriptions: 1 << 1
} as const;

export type SystemChannelFlags = number;
