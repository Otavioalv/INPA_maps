import type { MarkerOptions, LngLatLike} from 'maplibre-gl';

import {Marker, Popup, Map} from 'maplibre-gl';


export type addMakerType = {
    map: Map;
    markerOptions: MarkerOptions;
    lnglat: LngLatLike;
    callMarker: () => void;
}

/* 
    "map": map
    "Makers": [
        "Predio-1":
            {
                callMarker: test,
                lnglat: [-59.98707599957745, -3.0965178354433376],
                markerOptions: { color: 'red' },
            },
        "Predio-2":
            {
                callMarker: test,
                lnglat: [-59.98707599957745, -3.0965178354433376],
                markerOptions: { color: 'red' },
            },
        "Predio-3":
            {
                callMarker: test,
                lnglat: [-59.98707599957745, -3.0965178354433376],
                markerOptions: { color: 'red' },
            },
    ]

*/


export type makerType = {
    callMaker: () => void;
    lnglat: LngLatLike;
    makerOptions: MarkerOptions;
};

export type addMakerTypeT = {
    map: Map;
    makers: {[k: string]: makerType}[];

};

export function addMarker({map, markerOptions, lnglat, callMarker}: addMakerType) {
    const popUpHTML = `
        <h1>Prédio X</h1>
        <p>Switches: 4</p>
    `;
    
    const marker = new Marker(markerOptions)
    .setLngLat(lnglat)
    .setPopup(
        new Popup({ offset: 15 })
        .setHTML(popUpHTML)
    )
    .addTo(map);


    // new Marker(markerOptions)
    // .setLngLat([-59.98717599957745, -3.0965178354433376])
    // .setPopup(
    //     new Popup({ offset: 15 })
    //     .setHTML(popUpHTML)
    // )
    // .addTo(map);


    /* 
        marker.getElement().addEventListener('click', () => {
            console.log('Clicou no prédio X');
            // Abrir modal
        });
    */

    marker.getElement().addEventListener('click', () => callMarker());
}
