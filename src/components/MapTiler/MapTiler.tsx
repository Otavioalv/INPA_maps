import type { MapOptions } from 'maplibre-gl';
import { useRef, useEffect} from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';
import { createMap } from '@/lib/map/createMap';
import { DropContainer } from '../DropContainer/DropContainer';
// import { IoIosArrowDown } from 'react-icons/io';
// import styles from './styles.module.css';


export const MapTiler = () => {
    const mapRef = useRef(null);

    const loadMap = () => {
        if(mapRef.current){
            // Opções de configuração de visão do mapa
            const options: MapOptions = {
                container: mapRef.current,
                center: [-59.9860657, -3.0989911],
                zoom: 16,
                bearing: 50,
                pitch: 10
            }

            createMap(options)
        }
    }

    useEffect(() => {
        loadMap()
    }, []);

    return (
        <>
            <div className='relative'>
                <div 
                    ref={mapRef}
                    className={"w-screen h-screen"}
                />
            </div>

            <DropContainer/>
        </>
    )
}