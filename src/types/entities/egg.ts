import {Player} from "@/types/entities/player";
import Rarity from "../../../models/rarity";

export interface Egg {
    id: number;
    rarity: Rarity;
    hatchTime: number;
    image: string;
    createdAt: Date;
}