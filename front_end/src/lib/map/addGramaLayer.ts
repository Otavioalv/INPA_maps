import {Map} from 'maplibre-gl'


export interface cordGramInterface {
    [k: string]: number[][]
}

export type addGramaLayerType = {
    map: Map, 
    cordGram: cordGramInterface
};


export async function addGramaLayer({map, cordGram}: addGramaLayerType) {
    // Criar um laço que percorra cordGram e coloque as cordenadas

    Object.entries(cordGram).forEach((crd,i) => {

        const idSource = `${crd[0]}-${i}`
        const idLayer  = `${crd[0]}-layer-${i}`

        map.addSource(idSource, {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [{
                    type: 'Feature',
                    geometry: {
                        type: 'Polygon',
                        coordinates: [crd[1]]
                    },
                    properties: {}
                }]
            }
        });


        map.addLayer({
            id: idLayer,
            type: "fill",
            source: idSource,
            paint: {
                'fill-color': "#5cb85c",
                'fill-opacity': .5
            }
        });

    });
}