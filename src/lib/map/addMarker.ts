import type { MarkerOptions, LngLatLike} from 'maplibre-gl';

import {Marker, Popup, Map} from 'maplibre-gl';
import popUpHTML from './popUp.html?raw';


export type makerType = {
    callMarker: () => void;
    lnglat: LngLatLike;
    markerOptions: MarkerOptions; 
};

export type addMakerType = {
    map: Map;
    markers: {[k: string]: makerType};
}

// recebe o mapa, e os marcadores que deverão aparecer no mapa
export function addMarker({map, markers}: addMakerType) {

    Object.entries(markers).forEach((m:[string, makerType], i:number) => {
        const [nameLoc, makerObj]:[string, makerType] = m;

        // const popUpHTML = `
        //     <h1>${nameLoc}</h1>
        //     <p>Switches: 4</p>
        // `;

        // Marker, marca um local do mapa
        const popUp = new Popup({ offset: 15 }).setHTML(popUpHTML)
        popUp.on("open", () => {
            const popUpElement = popUp.getElement();
            
            console.log(popUpElement);
            const popUpTitle:Element | null = popUpElement?.querySelector("#pop-up-title");


            if(popUpTitle)
                popUpTitle.innerHTML = nameLoc;
    
        });
        
        
        const marker = new Marker(makerObj.markerOptions);
        marker.setLngLat(makerObj.lnglat)
        marker.setPopup(
            popUp
            // new Popup({ offset: 15 })
            // .setHTML(popUpHTML)
        );
        marker.addTo(map);
        
        marker.getElement().addEventListener('click', () => makerObj.callMarker());
        
        console.log(i);
    });

};
