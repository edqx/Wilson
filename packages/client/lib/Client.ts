import WebSocket from "ws";
import Emittery from "emittery";
import erlpack from "erlpack";
import fetch, { Request, RequestInit } from "node-fetch";

import zlib from "zlib";

import {
    BaseUrls,
    Endpoints,
    GatewayCompression,
    GatewayEncoding,
    GatewayEvent,
    GatewayOpcode,
    Snowflake
} from "@wilsonjs/constants";

import {
    DispatchPayload,
    GatewayPayload,
    GetGatewayBotResponse,
    GetUserResponse
} from "@wilsonjs/models";

import { ClientOptions } from "./models/ClientOptions";
import { User } from "./structures/User";

type HTTPMethod = "GET"|"POST"|"PUT"|"PATCH"|"DELETE";

export type ClientEvents = {
    connect: never;
    ready: never;
}

export class WilsonClient extends Emittery<ClientEvents> {
    private _token: string;
    private _socket: WebSocket;
    private _inflate: zlib.Inflate;
    private _heartbeat: NodeJS.Timeout;
    private _heartbeat_interval: number;
    private _seqnum: number;
    private _did_recieve_ack: boolean;

    options: ClientOptions;
    user: User;

    handleMessage: () => Promise<void>;

    constructor(options: Partial<ClientOptions> = {}) {
        super();

        this.options = {
            encoding: GatewayEncoding.Erlang,
            compression: GatewayCompression.ZLibStream,
            ...options
        };

        this._inflate = zlib.createInflate();
        this._inflate.on("data", async data => {
            switch (this.options.encoding) {
                case GatewayEncoding.Erlang:
                    return await this.handlePayload(erlpack.unpack(data));
                case GatewayEncoding.JSON:
                    return await this.handlePayload(JSON.parse(data.toString("utf8")));
            }
        });

        this.handleMessage = this._handleMessage.bind(this);
        this._seqnum = null;
    }

    private async send(payload: GatewayPayload): Promise<number> {
        const buffer = this.options.encoding === GatewayEncoding.JSON ? Buffer.from(JSON.stringify(payload)) : erlpack.pack(payload);
        await this._socket.send(buffer);
        return buffer.byteLength;
    }

    async disconnect() {
        void 0;
    }

    async resume() {
        void 0;
    }

    private async heartbeat() {
        if (!this._did_recieve_ack) {
            await this.disconnect();
            await this.resume();
        }

        this._did_recieve_ack = false;
        await this.send({
            op: GatewayOpcode.Heartbeat,
            d: this._seqnum,
            s: null,
            t: null
        });
    }

    private async handleEvent(payload: DispatchPayload) {
        switch (payload.t) {
            case GatewayEvent.Ready:
                this.user = new User(this, payload.d.user);
                break;
        }
    }

    private async handlePayload(payload: GatewayPayload) {
        this._seqnum = payload.s;
        switch (payload.op) {
            case GatewayOpcode.Dispatch:
                await this.handleEvent(payload);
                break;
            case GatewayOpcode.Hello:
                this._heartbeat_interval = payload.d.heartbeat_interval;
                this._heartbeat = setInterval(async () => {
                    await this.heartbeat();
                }, this._heartbeat_interval);
                await this.heartbeat();

                await this.send({
                    op: GatewayOpcode.Identify,
                    d: {
                        token: this._token,
                        intents: 513,
                        properties: {
                            $os: "linux",
                            $browser: "wilson",
                            $device: "wilson"
                        }
                    }
                });
                break;
            case GatewayOpcode.HeartbeatAck:
                this._did_recieve_ack = true;
                break;
        }
    }

    private async _handleMessage(buffer: Buffer) {
        if (buffer.byteLength >= 4 && buffer.readUInt32BE(buffer.byteLength - 4) == 0x0000ffff /* flush suffix */) {
            this._inflate.write(buffer);
        }
    }

    private async make<T = any>(method: HTTPMethod, path: string, ...params: (string|RequestInit)[]): Promise<T> {
        let options = params[params.length - 1] as RequestInit;
        if (typeof options === "object") {
            params.pop();
        } else {
            options = {};
        }

        let argi = 0;
        const replaced = path.replace(/\{.+\}/g, () => {
            return params[argi++] as string;
        });

        const request_init = new Request(replaced[0] === "/" ? ("https://" + BaseUrls.API + replaced) : replaced, {
            method,
            ...options,
            headers: {
                Authorization: "Bot " + this._token,
                ...options.headers
            }
        });

        const res = await fetch(request_init);

        if (res.status >= 200 && res.status < 300) {
            if (res.status === 204) {
                return "" as any;
            }

            if (res.headers.get("Content-Type") === "application/json") {
                return await res.json() as T;
            } else if (res.headers.get("Content-Type") === "text/plain") {
                return await res.text() as any;
            }

            return await res.blob() as any;
        } else {
            console.log(res.status);
            throw res;
        }
    }

    get socket() {
        return this._socket;
    }

    async connect(token: string) {
        this._token = token;
        const { url: baseUrl } = await this.make<GetGatewayBotResponse>("GET", Endpoints.GetBotGateway);

        let url = baseUrl + "?v=8&encoding=" + this.options.encoding;
        if (this.options.compression === GatewayCompression.ZLibStream) {
            url += "&compress=" + this.options.compression;
        }
        this._socket = new WebSocket(url);
        this._socket.on("message", this.handleMessage);
    }

    async getUser(id: Snowflake) {
        const basic = await this.make<GetUserResponse>("GET", Endpoints.GetUser, id);

        return new User(this, basic);
    }
}
