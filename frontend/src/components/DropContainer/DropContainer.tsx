import { useState } from "react";
import styles from './styles.module.css';

import { IoIosArrowDown } from 'react-icons/io';
import { GoScreenFull } from "react-icons/go";
import { FaTerminal } from "react-icons/fa";
import { FaThList } from "react-icons/fa";


import type { dropContainerType } from "@/types/infraApi";

import { ListSwitchTb } from "../ListSwitchsTb/ListSwitchsTb";
import { TerminalMode } from "../TerminalMode/TerminalMode";




export const DropContainer = ({infoBuilding}: dropContainerType) => {
    const [isActive, setIsActive] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
    const [isterminalMode, setIsTerminalMode] = useState<boolean>(false);


    const handleSetIsActive = () => {
        setIsActive(prev => {
            if (!prev) setIsFullScreen(false); // Garante lógica: isFullScreen só se isActive for true
            return !prev;
        });
    };

    const handleSetIsFullScreen = () => {
        if (isActive) setIsFullScreen(prev => !prev);
    };


    const handleSetIsTerminalMode = () => {
      setIsTerminalMode(!isterminalMode);
      console.log("Teminal mode");
    }

    const getContainerHeightClass = () => {
        if (!isActive) return 'h-0 overflow-hidden';
        if (isFullScreen) return 'sm:h-[86vh] h-[80vh] overflow-auto';
        return 'h-[50vh] overflow-auto';
    };
    

    return (
        <div className="flex items-center justify-center flex-col absolute w-full h-auto bottom-0">
            <div className='bg-white w-11 h-8 rounded-t shadow-[0_-1px_2px_rgba(60,64,67,0.15),0_-2px_6px_2px_rgba(60,64,67,0.15)]'>
                <button 
                    className={`w-full h-full flex items-center justify-center cursor-pointer ${styles.buttonDropPage}`}
                    onClick={handleSetIsActive}
                >
                    <IoIosArrowDown className={`${styles.arrowButton} ${isActive ? "rotate-0" : "rotate-180"}`} />
                </button>
            </div>
            

            {/* Container de vizualização */}
            <div className={`bg-white w-full duration-200 ${getContainerHeightClass()} shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                
                {/* Opões de butoes */}
                <div className="flex justify-end items-center p-5 w-full gap-4">
                  
                  <button 
                    className="bg-green-400 text-white font-bold p-2 rounded transition hover:bg-green-600 cursor-pointer flex items-center gap-3"
                    onClick={handleSetIsTerminalMode}
                  >

                    {isterminalMode ? (

                      <>
                        <FaThList/>
                        Lista de Switchs
                      </>
                    ) : (
                      <>
                        <FaTerminal/>
                        Modo Terminal
                      </>
                    )}
                  </button>

                  <button
                    className="w-7 h-7 cursor-pointer"
                    onClick={handleSetIsFullScreen}
                    >
                      <GoScreenFull className="animate-pulse w-full h-full"/>
                  </button>
                  
                </div>

                {isterminalMode ? (
                  // Modo terminal
                  <TerminalMode/>
                ) : (
                  // Lista de switchs
                  <ListSwitchTb infoBuilding={infoBuilding}/>
                )}
            </div>
        </div>
    );
};


