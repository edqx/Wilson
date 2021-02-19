export const UserFlag = {
    None: 0,
    Employee: 1 << 0,
    PartneredServerOwner: 1 << 1,
    HypeSquadEvents: 1 << 2,
    BugHungerLvl1: 1 << 3,
    HouseBravery: 1 << 6,
    HouseBrilliance: 1 << 7,
    HouseBalance: 1 << 8,
    EarlySupporter: 1 << 9,
    TeamUser: 1 << 10,
    System: 1 << 12,
    BugHunterLvl2: 1 << 14,
    VerifiedBot: 1 << 16,
    EarlyVerifiedBotDeveloper: 1 << 17
} as const;

export type UserFlags = number;
