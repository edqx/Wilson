import { BasicApplicationCommandOption } from "../../../basic";

export interface EditGuildApplicationCommandRequest {
    name?: string;
    description?: string;
    options?: BasicApplicationCommandOption[];
}
