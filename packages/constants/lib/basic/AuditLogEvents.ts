export enum AuditLogEvent {
    GuildUpdate = 1,
    ChannelCreate = 10,
    ChannelUpdate,
    ChannelDelete,
    ChannelOverwriteCreate,
    ChannelOverwriteUpdate,
    ChannelOverwriteDelete,
    MemberKick = 20,
    MemberPrune,
    MemberBanAdd,
    MemberBanRemove,
    MemberUpdate,
    MemberRoleUpdate,
    MemberMove,
    MemberDisconnect,
    BotAdd,
    RoleCreate = 30,
    RoleUpdate,
    RoleDelete,
    InviteCreate = 40,
    InviteUpdate,
    InviteDelete,
    WebhookCreate = 50,
    WebhookUpdate,
    WebhookDelete,
    EmojiCreate = 60,
    EmojiUpdate,
    EmojiDelete,
    MessageDelete = 72,
    MessageBulkDelete,
    MessagePin,
    MessageUnpin,
    IntegrationCreate = 80,
    IntegrationUpdate,
    IntegrationDelete
}
