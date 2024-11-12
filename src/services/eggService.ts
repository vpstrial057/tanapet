import httpRequest from "@/utils/httpRequest";
import {FIRST_EGG_ENDPOINT} from "@/app/api/endpoint";
import {EggResponse} from "@/types/payload/response";

export const eggService = {
    createFirstEgg: async (playerId: number): Promise<EggResponse> => {
        console.log('Creating first egg for player:', playerId);
        return await httpRequest.post({url: FIRST_EGG_ENDPOINT, body: {playerId}});
    }
}