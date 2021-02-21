import { BasicApplicationCommandOption } from "../../../basic";

export interface CreateGuildApplicationCommandRequest {
    name: string;
    description: string;
    options?: BasicApplicationCommandOption[];
}
