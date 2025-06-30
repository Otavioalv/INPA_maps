import switchApi from "./switchApi";

// Teste de tipo
type getInfoStatusSwTypes = {
    list_sw: string[];
}

export const getInfoStatusSw = async ({list_sw}: getInfoStatusSwTypes): Promise<void> => {
    const res = await switchApi.post('/full_status_switch', list_sw);

    console.log(res);
}