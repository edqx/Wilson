import { BasicApplicationCommandOption } from "../../../basic";

export interface CreateGlobalApplicationCommandRequest {
    name: string;
    description: string;
    options?: BasicApplicationCommandOption[];
}
