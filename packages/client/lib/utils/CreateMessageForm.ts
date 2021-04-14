import FormData from "form-data";

import { CreateMessageRequest } from "@wilsonjs/models";
import { AttachmentInfo, MessageOptions } from "../models/MessageOptions";

export function createMessageForm(
    content: string | MessageOptions,
    files: AttachmentInfo[] = []
) {
    const form = new FormData();
    const payload: Partial<CreateMessageRequest> = {};

    if (typeof content === "string") {
        payload.content = content;
    } else if (typeof content === "object") {
        // to filter out undefined
        payload.content = content.content;

        if (content.reply_to !== undefined)
            payload.message_reference = {
                message_id: this.client.messages.resolveID(content.reply_to),
            };
        if (content.nonce !== undefined) payload.nonce = content.nonce;
        if (content.tts !== undefined) payload.tts = content.tts;
        if (content.embed !== undefined) payload.embed = content.embed;

        if (content.allowed_mentions !== undefined) {
            payload.allowed_mentions = {
                parse: content.allowed_mentions.parse,
                roles: content.allowed_mentions.roles?.map((role) =>
                    this.client.roles.resolveID(role)
                ),
                users: content.allowed_mentions.roles?.map((user) =>
                    this.client.users.resolveID(user)
                ),
                replied_user: content.allowed_mentions.replied_user,
            };
        }
    }

    form.append("payload_json", JSON.stringify(payload), {
        contentType: "application/json",
    });

    if (files.length) {
        for (const attachment of files) {
            form.append(attachment.filename || "file.png", attachment.file, {
                filename: attachment.filename || "file.png",
                contentType: attachment.content_type || "image/png",
            });
        }
    }

    return form;
}
