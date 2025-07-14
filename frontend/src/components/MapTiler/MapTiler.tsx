import type { MapOptions } from 'maplibre-gl';
import { useRef, useEffect, useCallback, useState} from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';
import { createMap } from '@/lib/map/createMap';
import { DropContainer } from '../DropContainer/DropContainer';
import type { BuildingTypeInterface } from '@/types/infraApi';
// import { IoIosArrowDown } from 'react-icons/io';
// import styles from './styles.module.css';


export const MapTiler = () => {
    const mapRef = useRef(null);
    const [infoBuilding, setInfoBuilding] = useState<BuildingTypeInterface>({build_name: "", build_number: 0, id: 0, lnglat: "", switchs: ""});

    const handleListIps = (infoBuilding: BuildingTypeInterface) => {
        setInfoBuilding(infoBuilding);
    }



    const loadMap = useCallback(async () => {
        if(mapRef.current){

            // Opções de configuração de visão do mapa
            const options: MapOptions = {
                container: mapRef.current,
                center: [-59.989992399323334, -3.0960096764556044],
                zoom: 16,
                bearing: 50,
                pitch: 10
            }

            await createMap({options, handleInfoBuilding: handleListIps})
        }
    }, []);

    useEffect(() => {
        loadMap()
    }, [loadMap]);

    return (
        <>
            <div className='relative'>
                <div 
                    ref={mapRef}
                    className={"w-screen h-screen"}
                />
            </div>
            
            <DropContainer infoBuilding={infoBuilding}/>
        </>
    )
}