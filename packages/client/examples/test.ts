import { GatewayCompression, GatewayEncoding } from "@wilsonjs/constants";
import dotenv from "dotenv";
import fs from "fs";

import { WilsonClient, RichEmbed } from "../lib";

dotenv.config();

const client = new WilsonClient({
    encoding: GatewayEncoding.JSON,
    compression: GatewayCompression.ZLibStream,
});

if (!process.env.TOKEN) {
    console.log("Expected a TOKEN environment variable.");
    process.exit();
}

client.connect(process.env.TOKEN);

client.on("ready", () => {
    console.log("Ready!");
});

client.on("guildUpdate", ({ old, guild }) => {
    if (old) {
        console.log(old.name, guild.name);
    }
});

client.on("message", async ({ message }) => {
    if (message.author.id === client.user.id) return;

    const embed = new RichEmbed()
        .setTitle("Hello G.")
        .setBody("Skeleton.")
        .setColor([127, 127, 255])
        .setImage(
            "https://raw.githubusercontent.com/SkeldJS/SkeldJS/master/asset/SkeldJSMain.png"
        )
        .addInline("poop", "poop")
        .addInline("cock", "wock");

    const stream = fs.createReadStream("./penguin.png");

    const my_message = await message.reply(
        {
            embed,
            allowed_mentions: {
                replied_user: false,
            },
        },
        [
            {
                file: stream,
                filename: "penguin.png",
            },
        ]
    );

    setTimeout(async () => {
        await my_message.delete();
    }, 5000);
});
