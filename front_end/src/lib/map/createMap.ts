import type { MapOptions } from 'maplibre-gl'
import type { addGramaLayerType } from './addGramaLayer';

import type { addMakerType } from '@/types/mapTypes';
import type { BuildingListType, BuildingTypeInterface } from '@/types/infraApi';

import {Map, NavigationControl} from 'maplibre-gl';

import { addMarker } from './addMarker';
import { addGramaLayer } from './addGramaLayer';
import { listBuildingInfo } from '@/services/infraInpaService';

type createMapType = {
    options: MapOptions, 
    handleInfoBuilding: (infoBuilding: BuildingTypeInterface) => void;
}

export async function createMap({options, handleInfoBuilding}: createMapType) {
    const API_KEY = "PQHQjOkbU9K1U80DwufY"

    options.style = `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`;

    const map = new Map(options);

    // Configurações do controle de navegação
    map.addControl(new NavigationControl(), 'top-right');


    // makers: {[k: string]: makerType}[];

    const listInfo: BuildingListType = await listBuildingInfo();
    // console.log(listInfo);

    const markerParams: addMakerType = {
        map: map,
        callMarker: handleInfoBuilding,
        markers: listInfo,
    };

    const gramaLayerParams: addGramaLayerType = {
        map: map, 
        cordGram: {
            "Campus_2": [
                [-59.989857, -3.094646],
                [-59.989699, -3.094804],
                [-59.989509, -3.095093],
                [-59.989190, -3.095637],
                [-59.988613, -3.096628],
                [-59.988291, -3.097121],
                [-59.9879484101266, -3.097695069642971],
                [-59.988258205259875, -3.0978025360163963],
                [-59.98870613417039, -3.097837353780204],
                [-59.98877587160558, -3.0978962761471305],
                [-59.98896630844651, -3.097888241281464],
                [-59.98904945692691, -3.0981560701827013],
                [-59.98991849265389, -3.098198922804275],
                [-59.98994328099492, -3.0983397425938795],
                [-59.99008275586526, -3.0983276902968746],
                [-59.99020747858566, -3.098524544466257],
                [-59.990271851602735, -3.0984790135736677],
                [-59.990160539928375, -3.0982232370492033],
                [-59.98975284415206, -3.0972597223057106],
                [-59.99006398040129, -3.0972168696497873],
                [-59.990482405012315, -3.097725744826898],
                [-59.99067552406357, -3.097757884303558],
                [-59.99154455979416, -3.097618613230987],
                [-59.99230094274142, -3.0974097065839565],
                [-59.991903975804945, -3.096863335161088],
                [-59.99156601746526, -3.096488374222605],
                [-59.99074526150277, -3.0955670410505682],
                [-59.989857, -3.094646]
            ],
            "Campus-3-V8": [
                [-59.99484347340346, -3.0893206548021346],
                [-59.99716208611192, -3.092761983494986],
                [-59.99487956076079, -3.0948970430657776],
                [-59.994184879132185, -3.0942033743941493],
                [-59.99416683545351, -3.0942934612602624],
                [-59.99432020672218, -3.094545704444689],
                [-59.994145971122094, -3.094691563026864],
                [-59.99328491103445, -3.09366131232095],
                [-59.9922759155314, -3.092812869816337],
                [-59.99159313661957, -3.092108359006459],
                [-59.99484347340346, -3.0893206548021346]            
            ]
        },
    }
    

    await addMarker(markerParams);

    map.on('load', async () => {
        await addGramaLayer(gramaLayerParams);
    });

    return map;
}
