import Rarity from "../../models/rarity";

export const rarityRepository = {
    getRarityByName: async (value: string): Promise<Rarity | null> => {
        try {
            return await Rarity.findOne({where: {name: value}});
        } catch (error) {
            console.error('Error getting rarity by value:', error);
            throw error;
        }
    }
}