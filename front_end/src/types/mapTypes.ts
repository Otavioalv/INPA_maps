import type { MarkerOptions, LngLatLike} from 'maplibre-gl';
import {Map} from 'maplibre-gl';
import type { BuildingListType } from './infraApi';

export type makerType = {
    // callMarker: () => void;
    lnglat: LngLatLike;
    markerOptions: MarkerOptions; 
};

export type addMakerType = {
    callMarker: () => void;
    map: Map;
    // markers: {[k: string]: makerType};
    markers: BuildingListType;
    
    // campo para lista de switchs
    // campo para id da localização
}