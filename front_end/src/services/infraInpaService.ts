import type { responseAxiosInterface } from '@/types/apiTypes';
import infraApi from './infraApi';

import type { BuildingListType } from '@/types/infraApi';


/**
 * Retorna a lista de informações dos predios do INPA
 */
export const listBuildingInfo = async (): Promise<BuildingListType> => {
    try {
        const res =  await infraApi.post('/infra/list-building-info') as responseAxiosInterface<BuildingListType>;

        const infoBuilding:BuildingListType = res.data.results;
        
        return infoBuilding;   
    } catch (error) {
        console.error("Erro ao chamar infra building: ", error);
        return []
    }
}