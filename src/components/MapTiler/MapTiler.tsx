import type { MapOptions } from 'maplibre-gl';
import { useRef, useEffect, useState} from 'react';

import 'maplibre-gl/dist/maplibre-gl.css';
import { createMap } from '@/lib/map/createMap';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './styles.module.css';


export const MapTiler = () => {
    const mapRef = useRef(null);
    
    const [isActive, setIsActive] = useState<boolean>(false);


    const handleClickButton = () => {
        setIsActive(!isActive);
    }


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

                {/* h-3/4 */}

                {/* 
                    box-shadow: 
                        0 1px 2px rgba(60, 64, 67, 0.3), 
                        0 2px 6px 2px rgba(60, 64, 67, 0.15);
                    
                        border border-t-gray-300
                        shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]
                */}

                {/* container do drop page h-6/12*/}
                <div className={`absolute bg-white w-screen duration-400 ${isActive ? 'h-6/12' : 'h-0'} bottom-0 shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                    
                    {/* botao para abrir e fechar */}
                    <div className='bg-white absolute w-11 h-8 -translate-y-full right-1/2 rounded-t shadow-[0_-1px_2px_rgba(60,64,67,0.15),0_-2px_6px_2px_rgba(60,64,67,0.15)]'>
                        <button 
                            className={`w-full h-full flex items-center justify-center cursor-pointer ${styles.buttonDropPage}`}
                            onClick={handleClickButton}
                        >
                            <IoIosArrowDown className={`${styles.arrowButton}`}/>
                        </button>
                    </div>

                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae atque ipsam quo iusto ipsa esse repudiandae, cum error harum, eos sed accusamus, vel dolores debitis quidem similique omnis fugit quam.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A omnis maxime vel illum asperiores dolores aperiam debitis! Neque odit aliquid voluptates exercitationem ipsam reprehenderit quam? Sit dicta cum deleniti rem.
                    </div>
                </div>
            </div>
        </>
    )
}