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


export type dropContainerType = {
    infoBuilding: BuildingTypeInterface;
}

export type infoPortsType = {
    sw_ip: string,
    ports_info: {
        port:string,
        name:string,
        status:string,
        vlan:string,
        duplex:string,
        speed:string,
        type:string
    }[]
}

export type infoPortsListType = infoPortsType[];

// export type responseInfoPortsType = {
//     message: string,
//     results: infoPortsType[]
// }