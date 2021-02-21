export interface SessionStartLimitResponse {
    total: number;
    remaining: number;
    reset_after: number;
    max_concurrency: number;
}

export interface GetGatewayBotResponse {
    url: string;
    shards: number;
    session_start_limit: SessionStartLimitResponse;
}
