import httpRequest from "@/utils/httpRequest";
import {PlayerDTO} from "@/types/dtos/playerDTO";
import {PlayerResponse} from "@/types/payload/response";
import {PLAYER_ENDPOINT} from "@/app/api/endpoint";

export const playerService = {
    create: async (playerDTO: PlayerDTO): Promise<PlayerResponse> =>
        httpRequest.post({url: PLAYER_ENDPOINT, body: playerDTO}),
    update: async (id: number, playerDTO: PlayerDTO): Promise<PlayerResponse> =>
        httpRequest.put({url: `${PLAYER_ENDPOINT}/${id}`, body: playerDTO}),
    get: async (id: number): Promise<PlayerResponse> =>
        httpRequest.get({url: `${PLAYER_ENDPOINT}/${id}`})
}