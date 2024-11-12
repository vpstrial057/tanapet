import {Egg} from "@/types/entities/egg";

export interface Player {
    id: number;
    telegramId: number;
    username: string;
    coins: number;
    hasMintFirstEgg: boolean;
    eggs: Egg[];
    createdAt: Date;
    updatedAt: Date;
}