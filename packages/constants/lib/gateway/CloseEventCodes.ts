export enum GatewayCloseEventCode {
    UnknownError = 4000,
    UnknownOpcode,
    DecodeError,
    NotAuthenticated,
    AuthenticationFailed,
    AlreadyAuthenticated,
    InvalidSeq = 4007,
    RateLimited,
    SessionTimedOut,
    InvalidShard,
    ShardingRequired,
    InvalidAPIVersion,
    InvalidIntent,
    DisallowedIntent
}
