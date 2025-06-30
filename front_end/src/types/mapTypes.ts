import type { MarkerOptions, LngLatLike, MapOptions} from 'maplibre-gl';
import {Map} from 'maplibre-gl';
import type { BuildingListType, BuildingTypeInterface } from './infraApi';



export type makerType = {
    // callMarker: () => void;
    lnglat: LngLatLike;
    markerOptions: MarkerOptions; 
};

export type addMakerType = {
    callMarker: (infoBuilding: BuildingTypeInterface) => void;
    map: Map;
    // markers: {[k: string]: makerType};
    markers: BuildingListType;
    
    // campo para lista de switchs
    // campo para id da localização
}

export type createMapType = {
    options: MapOptions, 
    fetchListIps: (listIps: string[]) => void;
}