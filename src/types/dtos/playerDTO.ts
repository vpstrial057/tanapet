import {Egg} from "@/types/entities/egg";

export interface PlayerDTO {
    id?: number;
    telegramId: number;
    username: string;
    coins?: number;
    hasMintFirstEgg?: boolean;
    eggs?: Egg[];
    createdAt?: Date;
    updatedAt?: Date;
}