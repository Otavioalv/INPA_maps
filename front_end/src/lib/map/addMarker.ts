import type { addMakerType } from '@/types/mapTypes';

import {Marker, Popup, type LngLatLike} from 'maplibre-gl';
import type { BuildingTypeInterface } from '@/types/infraApi';

import popUpHTML from './popUp.html?raw';
import buildingIcon from './buildingIcon.html?raw';
// recebe o mapa, e os marcadores que deverão aparecer no mapa
export async function addMarker({map, markers, callMarker}: addMakerType) {
    markers.forEach(async (m: BuildingTypeInterface, i: number) => {
        console.log(m, i);
        const {build_name, lnglat} = m;
       
        // Marker, marca um local do mapa
        // Cria a vizualização do popUp no mapa
        const popUp = new Popup({ offset: 15 }).setHTML(popUpHTML)
        popUp.on("open", () => {
            const popUpElement = popUp.getElement();
            
            // console.log(popUpElement);
            // Pega o elemento e adiciona um valor dentro do elemento
            const popUpTitle:Element | null = popUpElement?.querySelector("#pop-up-title");
            if(popUpTitle)
                popUpTitle.innerHTML = build_name;
    
        });


        // Separar o makerOption
        const marker = new Marker({ color: 'red' });
        const lnglatArr = lnglat.trim().split(",").map(Number) as LngLatLike;

        // const lnglatArr:LngLatLike =[-3.1025, -60.0261]
        console.log(lnglatArr);        
        marker.setLngLat(lnglatArr)
        marker.setPopup(
            popUp
            // new Popup({ offset: 15 })
            // .setHTML(popUpHTML)
        );
        marker.addTo(map);
        
        marker.getElement().addEventListener('click', () => callMarker());
        
        console.log(i);
    });



    // Object.entries(markers).forEach((m:[string, makerType], i:number) => {
    //     const [nameLoc, makerObj]:[string, makerType] = m;

    //     // const popUpHTML = `
    //     //     <h1>${nameLoc}</h1>
    //     //     <p>Switches: 4</p>
    //     // `;

    //     // Marker, marca um local do mapa
    //     const popUp = new Popup({ offset: 15 }).setHTML(popUpHTML)
    //     popUp.on("open", () => {
    //         const popUpElement = popUp.getElement();
            
    //         console.log(popUpElement);
    //         const popUpTitle:Element | null = popUpElement?.querySelector("#pop-up-title");


    //         if(popUpTitle)
    //             popUpTitle.innerHTML = nameLoc;
    
    //     });
        
        
    //     const marker = new Marker(makerObj.markerOptions);
    //     marker.setLngLat(makerObj.lnglat)
    //     marker.setPopup(
    //         popUp
    //         // new Popup({ offset: 15 })
    //         // .setHTML(popUpHTML)
    //     );
    //     marker.addTo(map);
        
    //     marker.getElement().addEventListener('click', () => callMarker());
        
    //     console.log(i);
    // });

};
