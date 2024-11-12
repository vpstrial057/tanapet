import {PlayerDTO} from "@/types/dtos/playerDTO";
import {Egg, Player} from "../../models/associations";
export const playerRepository = {
    create: async (playerDTO: PlayerDTO): Promise<Player> => {
        try {
            return await Player.create(playerDTO)
        } catch (error) {
            console.error('Error creating player:', error);
            throw error;
        }
    },
    update: async (id: number, playerDTO: PlayerDTO): Promise<Player> => {
        try {
            const player = await Player.findOne({
                where: {id: id},
                include: [{
                    model: Egg,
                    as: 'eggs'
                }]
            });
            if (!player) {
                throw new Error('Player not found');
            }

            await player.update(playerDTO);
            return player;
        } catch (error) {
            console.error('Error updating player:', error);
            throw error;
        }
    },
    findByTelegramId: async (id: number): Promise<Player | null> => {
        try {
            return await Player.findOne({
                where: {telegramId: id},
                include: [{
                    model: Egg,
                    as: 'eggs'
                }]
            });
        } catch (error) {
            console.error('Error getting player:', error);
            throw error;
        }
    }
};