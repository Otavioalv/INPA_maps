import { useState } from "react";
import styles from './styles.module.css';

import { IoIosArrowDown } from 'react-icons/io';
import { GoScreenFull } from "react-icons/go";

export const DropContainer = () => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);


    const handleSetIsActive = () => {
        setIsActive(!isActive);
        setIsFullScreen(false);
    };

    const handleSetIsFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    return (
        <div className="flex items-center justify-center flex-col absolute w-full h-auto bottom-0">
            {/* bg-white absolute w-11 h-8 -translate-y-full right-1/2 rounded-t shadow-[0_-1px_2px_rgba(60,64,67,0.15),0_-2px_6px_2px_rgba(60,64,67,0.15)] */}
            {/* Botao */}
            <div className='bg-white w-11 h-8 rounded-t shadow-[0_-1px_2px_rgba(60,64,67,0.15),0_-2px_6px_2px_rgba(60,64,67,0.15)]'>
                <button 
                    className={`w-full h-full flex items-center justify-center cursor-pointer ${styles.buttonDropPage}`}
                    onClick={handleSetIsActive}
                >
                    <IoIosArrowDown className={`${styles.arrowButton}`}/>
                </button>
            </div>
            
            {/* Vizualização do usuario Container*/}
            <div className={`bg-white w-full duration-300 ${isActive ? 'h-[50vh] overflow-auto' : 'h-0 overflow-hidden'}  shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                <div className="flex flex-col items-end p-2">
                    <button
                        className="w-5 h-5"
                        onClick={handleSetIsFullScreen}
                    >
                        <GoScreenFull className="animate-pulse w-full h-full"/>
                    </button>
                    
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => (
                            <div className="bg-gray-300 my-1 p-2 text-center hover:bg-gray-400 cursor-pointer w-full">
                                LISTA EXEMPLO VIEW - {n}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}