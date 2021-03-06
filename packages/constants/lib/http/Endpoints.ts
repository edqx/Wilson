export const ApiEndpoints = {
    GetGateway: "/gateway",
    GetBotGateway: "/gateway/bot",

    GetGuildAuditLog: "/guilds/{guild.id}/audit-log",

    GetChannel: "/channels/{channel.id}",
    ModifyChannel: "/channels/{channel.id}",
    DeleteChannel: "/channels/{channel.id}",
    GetChannelMessages: "/channels/{channel.id}/messages",
    GetChannelMessage: "/channels/{channel.id}/{message.id}",
    CreateMessage: "/channels/{channel.id}/messages",
    CrosspostMessage: "/channels/{channel.id}/messages/{message.id}/crosspost",
    CreateReaction:
        "/channels/{channel.id}/messages/{message.id}/reactions/{emoji.name}/@me",
    DeleteOwnReaction:
        "/channels/{channel.id}/messages/{message.id}/reactions/{emoji.name}/@me",
    DeleteUserReaction:
        "/channels/{channel.id}/messages/{message.id}/reactions/{emoji.name}/@me/:user.id}",
    GetReactions:
        "/channels/{channel.id}/messages/{message.id}/reactions/{emoji.name}",
    DeleteAllReactions:
        "/channels/{channel.id}/messages/{message.id}/reactions",
    DeleteAllReactionsForEmoji:
        "/channels/{channel.id}/messages/{message.id}/reactions/{emoji.name}",
    EditMessage: "/channels/{channel.id}/messages/{message.id}",
    DeleteMessage: "/channels/{channel.id}/messages/{message.id}",
    BulkDeleteMessages: "/channels/{channel.id}/messages/bulk-delete",
    EditChannelPermissions: "/channels/{channel.id}/permissions/overwriteid",
    GetChannelInvites: "/channels/{channel.id}/invites",
    CreateChannelInvite: "/channels/{channel.id}/invites",
    DeleteChannelPermission: "/channels/{channel.id}/permissions/overwriteid",
    FollowNewsChannel: "/channels/{channel.id}/followers",
    TriggerTypingIndicator: "/channels/{channel.id}/typing",
    GetPinnedMessages: "/channels/{channel.id}/pins",
    AddPinnedChannelMessage: "/channels/{channel.id}/pins/{message.id}",
    DeletePinnedChannelMessage: "/channels/{channel.id}/pins/{message.id}",
    GroupDMAddRecipient: "/channels/{channel.id}/recipients/{user.id}",
    GroupDMRemoveRecipient: "/channels/{channel.id}/recipients/{user.id}",

    ListGuildEmojis: "/guilds/{guild.id}/emojis",
    GetGuildEmoji: "/guilds/{guild.id}/emojis/{emoji.id}",
    CreateGuildEmoji: "/guilds/{guild.id}/emojis",
    ModifyGuildEmoji: "/guilds/{guild.id}/emojis/{emoji.id}",
    DeleteGuildEmoji: "/guilds/{guild.id}/emojis/{emoji.id}",

    CreateGuild: "/guilds",
    GetGuild: "/guilds/{guild.id}",
    GetGuildPreview: "/guilds/{guild.id}/preview",
    ModifyGuild: "/guilds/{guild.id}",
    DeleteGuild: "/guilds/{guild.id}",
    GetGuildChannels: "/guilds/{guild.id}/channels",
    CreateGuildChannel: "/guilds/{guild.id}/channels",
    ModifyGuildChannelPositions: "/guilds/{guild.id}/channel",
    GetGuildMember: "/guilds/{guild.id}/members/{user.id}",
    ListGuildMembers: "/guilds/{guild.id}/members",
    AddGuildMember: "/guilds/{guild.id}/members/{user.id}",
    ModifyGuildMember: "/guilds/{guild.id}/members/{user.id}",
    ModifyCurrentUserNick: "/guilds/{guild.id}/members/@me/nick",
    AddGuildMemberRole: "/guilds/{guild.id}/members/{user.id}/roles/{role.id}",
    RemoveGuildMemberRole:
        "/guilds/{guild.id}/members/{user.id}/roles/{role.id}",
    RemoveGuildMember: "/guilds/{guild.id}/members/{user.id}",
    GetGuildBans: "/guilds/{guild.id}/bans",
    GetGuildBan: "/guilds/{guild.id}/bans/{user.id}",
    CreateGuildBan: "/guilds/{guild.id}/bans/{user.id}",
    RemoveGuildBan: "/guilds/{guild.id}/bans/{user.id}",
    GetGuildRoles: "/guilds/{guild.id}/roles",
    CreateGuildRoles: "/guilds/{guild.id}/roles",
    ModifyGuildRolePositions: "/guilds/{guild.id}/roles",
    ModifyGuildRole: "/guilds/{guild.id}/roles/{role.id}",
    DeleteGuildRole: "/guilds/{guild.id}/roles/{role.id}",
    GetGuildPruneCount: "/guilds/{guild.id}/prune",
    BeginGuildPrune: "/guilds/{guild.id}/prune",
    GetGuildVoiceRegions: "/guilds/{guild.id}/regions",
    GetGuildInvites: "/guilds/{guild.id}/invites",
    GetGuildIntegrations: "/guilds/{guild.id}/integrations",
    CreateGuildIntegration: "/guilds/{guild.id}/integrations/{integration.id}",
    ModifyGuildIntegration: "/guilds/{guild.id}/integrations/{integration.id}",
    DeleteGuildIntegration: "/guilds/{guild.id}/integrations/{integration.id}",
    SyncGuildIntegration:
        "/guilds/{guild.id}/integrations/{integration.id}/sync",
    GetGuildWidgetSettings: "/guilds/{guild.id}/widget",
    ModifyGuildWidget: "/guilds/{guild.id}/widget",
    GetGuildWidget: "/guilds/{guild.id}/widget.json",
    GetGuildVanityURL: "/guilds/{guild.id}/vanity-url",
    GetGuildWidgetImage: "/guilds/{guild.id}/widget.png",

    GetInvite: "/invites/{invite.code}",
    DeleteInvite: "/invites/{invite.code}",

    GetTemplate: "/guilds/templates/{template.code}",
    CreateGuildFromTemplate: "/guilds/templates/{template.code}",
    GetGuildTemplates: "/guilds/{guild.id}/templates",
    CreateGuildTemplate: "/guilds/{guild.id}/templates",
    SyncGuildTemplate: "/guilds/{guild.id}/ templates/{template.code}",
    ModifyGuildTemplate: "/guilds/{guild.id}/templates/{template.code}",
    DeleteGuildTemplate: "/guilds/{guild.id}/templates/{template.code}",

    GetCurrentUser: "/users/@me",
    GetUser: "/users/{user.id}",
    ModifyCurrentUser: "/users/@me",
    GetCurrentUserGuilds: "/users/@me/guilds",
    LeaveGuild: "/users/@me/guilds/{guild.id}",
    GetUserDMs: "/users/@me/channels",
    CreateDM: "/users/@me/channels",
    CreateGroupDM: "/users/@me/channels",
    GetUserConnections: "/users/@me/connections",

    ListVoiceRegions: "/voice/regions",

    CreateWebhook: "/channels/{channel.id}/webhooks",
    GetChannelWebhooks: "/channels/{channel.id}/webhooks",
    GetGuildWebhooks: "/guilds/{guild.id}/webhooks",
    GetWebhook: "/webhooks/{webhook.id}",
    GetWebhookWithToken: "/webhooks/{webhook.id}/{webhook.token}",
    ModifyWebhook: "/webhooks/{webhook.id}",
    ModifyWebhookWithToken: "/webhooks/{webhook.id}/{webhook.token}",
    DeleteWebhook: "/webhooks/{webhook.id}",
    DeleteWebhookWithToken: "/webhooks/{webhook.id}/{webhook.token}",
    ExecuteWebhook: "/webhooks/{webhook.id}/{webhook.token}",
    ExecuteSlackCompatableWebhook:
        "/webhooks/{webhook.id}/{webhook.token}/slack",
    ExecuteGithubCompatableWebhook:
        "/webhooks/{webhook.id}/{webhook.token}/github",
    EditWebhookMessage: "/webhooks/{webhook.id}/{webhook.token}",
    DeleteWebhookmessage:
        "/webhooks/{webhook.id}/{webook.token}/messages/{message.id}",

    GetGlobalApplicationCommands: "/applications/{application.id}/commands",
    CreateGlobalApplicationCommand: "/applications/{application.id}/commands",
    GetGlobalApplicationCommand:
        "/applications/{application.id}/commands/{command.id}",
    EditGlobalApplicationCommand:
        "/applications/{application.id}/commands/{command.id}",
    DeleteGlobalApplicationCommand:
        "/applications/{application.id}/commands/{command.id}",
    GetGuildApplicationCommands:
        "/applications/{application.id}/guilds/{guild.id}/commands",
    BulkOverwriteGlobalApplicationCommands:
        "/applications/{application.id}/commands",
    CreateGuildApplicationCommand:
        "/applications/{application.id}/guilds/{guild.id}/commands",
    GetGuildApplicationCommand:
        "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}",
    EditGuildApplicationCommand:
        "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}",
    DeleteGuildApplicationCommand:
        "/applications/{application.id}/guilds/{guild.id}/commands/{command.id}",
    BulkOverwriteGuildApplicationCommands:
        "/applications/{application.id}/guilds/{guild.id}/commands",
    CreateInteractionResponse:
        "/interactions/{interaction.id}/{interaction.token}/callback",
    EditOriginalInteractionResponse:
        "/interactions/{interaction.id}/{interaction.token}/messages/@original",
    DeleteOriginalInteractionResponse:
        "/interactions/{interaction.id}/{interaction.token}/messages/@original",
    CreateFollowupMessage: "/webhooks/{application.id}/{interaction.token}",
    EditFollowupMessage:
        "/webhooks/{application.id}/{interaction.token}/messages/{message.id}",
    DeleteFollowupMessage:
        "/webhooks/{application.id}/{interaction.token}/messages/{message.id}",
} as const;

export const CdnEndpoints = {
    CustomEmoji: "/emojis/{emoji.id}.{fmt}",
    GuildIcon: "/icons/{guild.id}/{guild_icon}.{fmt}",
    GuildSplash: "/splashes/{guild.id}/{guild_splash}{fmt}",
    GuildDiscoverySplash:
        "/discovery-splashes/{guild.id}/{guild_discovery_splash}.{fmt}",
    GuildBanner: "/banners/{guild.id}/{guild_banner}.{fmt}",
    DefaultUserAvatar: "/embed/avatars/{user_discriminator}.{fmt}",
    UserAvatar: "/avatars/{user.id}/{user_avatar}.{fmt}",
    ApplicationIcon: "/app-icon/{application.id}/{icon}.{fmt}",
    ApplicationAsset: "/app-assets/{application.id}/{asset_id}.{fmt}",
    AchievementIcon:
        "/app-assets/{application.id}/{achievement_id}/icons/icon_hash.{fmt}",
    TeamIcon: "/team-icons/{team.id}/{team_icon}.{fmt}",
} as const;
