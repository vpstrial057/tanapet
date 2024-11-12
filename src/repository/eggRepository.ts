import Egg from "../../models/egg";
import {rarityRepository} from "@/repository/rarityRepository";

export const eggRepository = {
    createFirstEgg: async (playerId: number): Promise<Egg> => {
        try {
            const rarity = await rarityRepository.getRarityByName("common");
            if (!rarity) {
                throw new Error('Rarity not found');
            }
            return await Egg.create({
                rarityId: rarity.id,
                playerId,
                hatchTime: 1800,
                image: 'eggs-1.png',
                createdAt: new Date(),
            });
        } catch (error) {
            console.error('Error creating first eggs:', error);
            throw error;
        }
    }
}