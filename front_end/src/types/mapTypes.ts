import type { MarkerOptions, LngLatLike} from 'maplibre-gl';
import {Map} from 'maplibre-gl';

export type makerType = {
    callMarker: () => void;
    lnglat: LngLatLike;
    markerOptions: MarkerOptions; 
};

export type addMakerType = {
    // callMarker: () => void;
    map: Map;
    markers: {[k: string]: makerType};
    // campo para lista de switchs
    // campo para id da localização
}