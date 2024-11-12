import { create } from 'zustand';
import {Player} from "@/types/entities/player";

type PlayerStore = {
    player: Player | null;
    setPlayer: (player: Player) => void;
};

export const usePlayer = create<PlayerStore>((set) => ({
    player: null,
    setPlayer: (player: Player) => set({ player })
}));