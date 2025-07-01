import type { responseAxiosInterface } from "@/types/apiTypes";
import switchApi from "./switchApi";
import type { infoPortsListType } from "@/types/infraApi";

// Teste de tipo
type getInfoStatusSwTypes = {
    list_sw: string[];
}

// impedir da API TRAVAR
let isFetchingStatus:boolean = false;
export const getInfoStatusSw = async ({list_sw}: getInfoStatusSwTypes): Promise<infoPortsListType> => {
    if(isFetchingStatus) {
        console.error("Requisição em andamento");
        return []
    }
    isFetchingStatus = true;
    
    try {
        const res = await switchApi.post('/full_status_switch', {list_sw}) as responseAxiosInterface<infoPortsListType>;
        console.log(res.data.results);

        return res.data.results  
    } catch (error) {
        console.error("Erro ao coletar dados do/s switch/s: ", error);
        return []
    } finally {
        isFetchingStatus = false;
    }
}