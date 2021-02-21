import { GatewayCompression, GatewayEncoding } from "@wilsonjs/constants";
import dotenv from "dotenv";
import { WilsonClient } from "../lib/Client";

dotenv.config();

const client = new WilsonClient({
    encoding: GatewayEncoding.JSON,
    compression: GatewayCompression.ZLibStream
});

client.connect(process.env.TOKEN);

setTimeout(async () => {
    console.log(await client.user.fetch());
}, 2000);
