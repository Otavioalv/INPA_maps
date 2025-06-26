import { useState } from "react";
import styles from './styles.module.css';

import { IoIosArrowDown } from 'react-icons/io';
import { GoScreenFull } from "react-icons/go";

export const DropContainer = () => {
    const [isActive, setIsActive] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleSetIsActive = () => {
        setIsActive(prev => {
            if (!prev) setIsFullScreen(false); // Garante lógica: isFullScreen só se isActive for true
            return !prev;
        });
    };

    const handleSetIsFullScreen = () => {
        if (isActive) setIsFullScreen(prev => !prev);
    };

    const getContainerHeightClass = () => {
        if (!isActive) return 'h-0 overflow-hidden';
        if (isFullScreen) return 'h-[86vh] overflow-auto';
        return 'h-[50vh] overflow-auto';
    };

    return (
        <div className="flex items-center justify-center flex-col absolute w-full h-auto bottom-0">
            <div className='bg-white w-11 h-8 rounded-t shadow-[0_-1px_2px_rgba(60,64,67,0.15),0_-2px_6px_2px_rgba(60,64,67,0.15)]'>
                <button 
                    className={`w-full h-full flex items-center justify-center cursor-pointer ${styles.buttonDropPage}`}
                    onClick={handleSetIsActive}
                >
                    <IoIosArrowDown className={styles.arrowButton} />
                </button>
            </div>
            
            <div className={`bg-white w-full duration-200 ${getContainerHeightClass()} shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                <div className="flex flex-col items-end p-2">
                    <button
                        className="w-5 h-5 cursor-pointer"
                        onClick={handleSetIsFullScreen}
                    >
                        <GoScreenFull className="animate-pulse w-full h-full"/>
                    </button>

                    {[...Array(14)].map((_, i) => (
                        <div key={i} className="bg-gray-300 my-1 p-2 text-center hover:bg-gray-400 cursor-pointer w-full">
                            LISTA EXEMPLO VIEW - {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
