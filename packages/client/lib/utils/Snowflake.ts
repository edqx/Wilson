import { DiscordEpoch } from "@wilsonjs/constants";
import { Snowflake } from "../types";

export function getTimestamp(snowflake: Snowflake) {
    const ms = snowflake as any >> 22;

    return ms + DiscordEpoch;
}

export function getInternalWorkerID(snowflake: Snowflake) {
    const id = snowflake as any >> 17;
    return id & 0x1f;
}

export function getInternalProcessID(snowflake: Snowflake) {
    const id = snowflake as any >> 12;
    return id & 0x1f;
}

export function getIncrement(snowflake: Snowflake) {
    return snowflake as any & 0xfff;
}

export function createSnowflake(timestamp: number): Snowflake {
    const ms = timestamp - DiscordEpoch;
    return (ms << 22) + "";
}
