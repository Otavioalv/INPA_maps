import type { MarkerOptions, LngLatLike} from 'maplibre-gl';

import {Marker, Popup, Map} from 'maplibre-gl';

// classe Map
// cor/icone
// lat lon
// função handle para evendo de click

export type addMakerType = {
    map: Map
    options: MarkerOptions
    lnglat: LngLatLike
}

export function addMarker(map: Map) {
    
    const marker = new Marker({ color: 'red' })
    .setLngLat([-59.98707599957745, -3.0965178354433376])
    .setPopup(
        new Popup({ offset: 15 })
        .setHTML("<h1>Prédio X</h1><p>Switches: 4</p>")
    )
    .addTo(map);

    marker.getElement().addEventListener('click', () => {
        console.log('Clicou no prédio X');
        // Abrir modal
    });
}
