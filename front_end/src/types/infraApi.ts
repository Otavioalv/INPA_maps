import type { AxiosResponse } from 'axios';

// Tipo da resposta geral da api infra do INPA
export interface responseInfraApiInterface<T> {
    message: string;
    errors?: string[];
    results: T;
}

// Tipo da resposta que e gerada automaticamente pelo AXIOS
export interface responseAxiosInterface<T> extends AxiosResponse{
    data: responseInfraApiInterface<T>
}

// Tipo da resposta que e retornado pela api infra do INPA, quando 
// e chamado um end point para listar informações dos predios individual
export interface BuildingTypeInterface {
  id: number;
  build_name: string;
  build_number: number;
  lnglat: string;
  switchs: string;
}

// Tipo da resposta que e retornado pela api infra do INPA, quando e 
// chamado um end point para listar informações dos predios em array
export type BuildingListType = BuildingTypeInterface[];