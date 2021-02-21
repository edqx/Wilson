export enum JSONErrorCode {
    GeneralError,
    UnknownAccount = 10001,
    UnknownApplication,
    UnknownChannel,
    UnknownGuild,
    UnknownIntegration,
    UnknownInvite,
    UnknownMember,
    UnknownMessage,
    UnknownPermissionOverwrite,
    UnknownProvider,
    UnknownRole,
    UnknownToken,
    UnknownUser,
    UnknownEmoji,
    UnknownWebhook,
    UnknownBan = 10026,
    UnknownSKU,
    UnknownStoreListing,
    UnknownEntitlement,
    UnknownBuild,
    UnknownLobby,
    UnknownBranch,
    UnknownRedistributable = 10036,
    UnknownGuildTemplate = 10057,
    UnknownApplicationCommand = 10063,
    HumanEndpoint = 20001,
    BotEndpoint,
    AnnouncementRateLimits = 20022,
    ChannelRateLimit = 20028,
    MaxGuilds = 30001,
    MaxFriends,
    MaxPins,
    MaxGuildRoles = 30005,
    MaxWebhooks = 30007,
    MaxReactions = 30010,
    MaxGuildChannels = 30013,
    MaxAttachments,
    MaxInvites,
    GuildAlreadyHasTemplate = 30031,
    Unauthorized = 40001,
    VerifyAccount,
    RequestEntityTooLarge = 40005,
    FeatureDisabledServerside,
    UserBanned,
    MessageCrossPosted = 40033,
    MissingAccess = 50001,
    InvalidAccountType,
    CannotExecuteDMAction,
    GuildWidgetDisabled,
    CannotEditAMessage,
    CannotSendEmptyMessage,
    CannotSendMessageToUser,
    CannotSendMessagesToVoice,
    ChannelUnverified,
    OAuth2ApplicationNoBot,
    OAuth2ApplicationLimit,
    InvalidOAuth2State,
    InvalidPermissions,
    InvalidToken,
    NoteWasTooLong,
    TooFewOrTooManyMessages,
    InvalidPin = 50019,
    InvalidCode,
    CannotExecuteSystemMessageAction,
    CannotExecuteChannelTypeAction = 50024,
    InvalidOAuth2Token,
    InvalidWebhook = 50027,
    InvalidRecipients = 50033,
    MessageTooOld,
    InvalidFormBody,
    InviteAcceptedToBadGuild,
    InvalidAPIVersion = 50041,
    CannotDeleteCommunityChannel = 50074,
    InvalidStickerSent = 50081,
    ReactionBlocked = 90001,
    APIResourceOverloaded = 130000
}
