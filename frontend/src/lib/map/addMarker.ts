import type { addMakerType } from '@/types/mapTypes';

import {Marker, Popup, type LngLatLike} from 'maplibre-gl';
import type { BuildingTypeInterface } from '@/types/infraApi';

import popUpHTML from './popUp.html?raw';
import buildingIcon from '@/assets/building.svg';

// recebe o mapa, e os marcadores que deverão aparecer no mapa
export async function addMarker({map, markers, callMarker}: addMakerType) {
    markers.forEach(async (m: BuildingTypeInterface/* , i: number */) => {     
        const {build_name, lnglat} = m;
        
        // console.log(i)
       
        // Marker, marca um local do mapa
        // Cria a vizualização do popUp no mapa
        const popUp = new Popup({ offset: 15 }).setHTML(popUpHTML)
        popUp.on("open", () => {
            const popUpElement = popUp.getElement();

            // Pega o elemento de titulo e adiciona um valor dentro do elemento
            const popUpTitle:Element | null = popUpElement?.querySelector("#pop-up-title");
            if(popUpTitle)
                popUpTitle.innerHTML = build_name;

            // Pega o elemento de switchs e adicionan um valor dentro do elemento
            const popUpSwitch:Element | null = popUpElement.querySelector("#pop-up-switch");
            if (popUpSwitch) {
                popUpSwitch.innerHTML = '';
                
                const ipList: string[] = m.switchs.replace(/\s/g, "").split(",");

                const listSwElm = document.createElement("ul");
                listSwElm.className = "flex gap-1 w-full";

                ipList.forEach((ipSw: string) => {
                    const itemSwElm = document.createElement("li")

                    itemSwElm.className = "bg-green-400 text-white p-1 px-2 rounded-sm";
                    itemSwElm.innerHTML = ipSw;
                    console.log("ip individual: ", ipSw);

                    listSwElm.appendChild(itemSwElm);
                });

                console.log(ipList);

                popUpSwitch.appendChild(listSwElm);
            }
        });

        
        const iconContainer = document.createElement('div');
        const imgPopUp = document.createElement('img');
        
        iconContainer.className = 'marker';
        iconContainer.style.cursor = "pointer";
        imgPopUp.src = buildingIcon;
        imgPopUp.style.width = "2.2em";


        iconContainer.appendChild(imgPopUp);


        const marker = new Marker({ element: iconContainer });
        const lnglatArr = lnglat.trim().split(",").map(Number) as LngLatLike;

        
        marker.setLngLat(lnglatArr)
        marker.setPopup(
            popUp
        );
        marker.addTo(map);
        
        // const swList: string[] = switchs.split(",");

        marker.getElement().addEventListener('click', () => callMarker(m));
    });

};