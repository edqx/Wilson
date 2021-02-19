import Wilson from "@wilsonjs/client";

const client = new Wilson;
client.connect("token");

client.on("message", (channel, author, message) => {

});
