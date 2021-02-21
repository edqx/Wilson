import { BasicApplicationCommandOption } from "../../../basic";

export interface EditGlobalApplicationCommandRequest {
    name?: string;
    description?: string;
    options?: BasicApplicationCommandOption[];
}
