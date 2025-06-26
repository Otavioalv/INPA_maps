import api from './api';

import type { responseAxiosInterface, BuildingListType } from '@/types/infraApi';

/**
 * Retorna a lista de informações dos predios do INPA
 */
export const listBuildingInfo = async (): Promise<BuildingListType> => {
    const res =  await api.post('/infra/list-building-info') as responseAxiosInterface<BuildingListType>;

    const infoBuilding:BuildingListType = res.data.results;
    
    return infoBuilding;
}