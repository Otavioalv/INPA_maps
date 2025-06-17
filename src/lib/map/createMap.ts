import type {MapOptions} from 'maplibre-gl'

import {Map, NavigationControl} from 'maplibre-gl';

import { addMarker } from './addMarker';
import { addGramaLayer } from './addGramaLayer';

export function createMap(options: MapOptions) {
    const API_KEY = "PQHQjOkbU9K1U80DwufY"

    options.style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`;

    const map = new Map(options);

    // Configurações do controle de navegação
    map.addControl(new NavigationControl(), 'top-right');

    addMarker(map);

    map.on('load', () => {
        addGramaLayer(map);
    });

    return map;
}
