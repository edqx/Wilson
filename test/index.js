import Jesse from "@jesse/client";

const client = new Jesse;
client.connect("token");

client.on("message", (channel, author, message) => {
    
});