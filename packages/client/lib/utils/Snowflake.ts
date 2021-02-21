import { DiscordEpoch, Timestamp } from "@wilsonjs/constants";
import { Snowflake } from "../types";

export function getTimestamp(snowflake: Snowflake) {
    const ms = snowflake as any / 0x400000;
    return Math.floor(ms + DiscordEpoch) as Timestamp;
}

export function getInternalWorkerID(snowflake: Snowflake) {
    const id = snowflake as any / 0x20000;
    return id & 0x1f;
}

export function getInternalProcessID(snowflake: Snowflake) {
    const id = snowflake as any >> 0x1000;
    return id & 0x1f;
}

export function getIncrement(snowflake: Snowflake) {
    return snowflake as any & 0xfff;
}

export function createSnowflake(timestamp: Timestamp, workerId: number = 0, processId: number = 0, incr: number = 0): Snowflake {
    const ms = timestamp - DiscordEpoch;
    return ((ms * 0x400000) + (workerId * 0x20000) + (processId * 0x1000) + incr) + "";
}
