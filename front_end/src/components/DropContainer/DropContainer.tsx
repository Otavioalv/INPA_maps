import { useCallback, useEffect, useState } from "react";
import styles from './styles.module.css';

import { IoIosArrowDown } from 'react-icons/io';
import { GoScreenFull } from "react-icons/go";

import { TableIntStatus } from "../TableIntStatus/TableIntStatus";

import type { BuildingTypeInterface } from "@/types/infraApi";



// import { getInfoStatusSw } from "@/services/switchLocalService";


export type dropContainerType = {
    infoBuilding: BuildingTypeInterface;
}

type infoPortsType = {
    sw_ip: string,
    ports_info: {
        port:string,
        name:string,
        status:string,
        vlan:string,
        duplex:string,
        speed:string,
        type:string
    }[]
}

export type responseInfoPortsType = {
    message: string,
    results: infoPortsType[]
}


export const DropContainer = ({infoBuilding}: dropContainerType) => {
    const [isActive, setIsActive] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(true);

    // teste de dados 
    const [infoPorts, ] = useState<responseInfoPortsType>({
  "message": "Requisição realizada com sucesso",
  "results": [
    {
      "sw_ip": "192.168.1.1",
      "ports_info": [
        {
          "port": "Fa0/1",
          "name": "uplink-core",
          "status": "connected",
          "vlan": "10",
          "duplex": "full",
          "speed": "1000",
          "type": "10/100/1000BaseTX"
        },
        {
          "port": "Fa0/2",
          "name": "",
          "status": "notconnect",
          "vlan": "1",
          "duplex": "auto",
          "speed": "auto",
          "type": "10/100/1000BaseTX"
        },
        {
          "port": "Fa0/3",
          "name": "impressora",
          "status": "connected",
          "vlan": "20",
          "duplex": "full",
          "speed": "100",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/4",
          "name": "",
          "status": "err-disabled",
          "vlan": "30",
          "duplex": "half",
          "speed": "10",
          "type": "10BaseT"
        },
        {
          "port": "Fa0/5",
          "name": "camera01",
          "status": "connected",
          "vlan": "15",
          "duplex": "full",
          "speed": "100",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/6",
          "name": "camera02",
          "status": "connected",
          "vlan": "15",
          "duplex": "full",
          "speed": "100",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/7",
          "name": "",
          "status": "notconnect",
          "vlan": "1",
          "duplex": "auto",
          "speed": "auto",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/8",
          "name": "reunião",
          "status": "connected",
          "vlan": "20",
          "duplex": "full",
          "speed": "100",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/9",
          "name": "",
          "status": "notconnect",
          "vlan": "1",
          "duplex": "auto",
          "speed": "auto",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/10",
          "name": "notebook",
          "status": "connected",
          "vlan": "30",
          "duplex": "full",
          "speed": "1000",
          "type": "10/100/1000BaseTX"
        },
        {
          "port": "Fa0/11",
          "name": "",
          "status": "notconnect",
          "vlan": "1",
          "duplex": "auto",
          "speed": "auto",
          "type": "10/100BaseTX"
        },
        {
          "port": "Fa0/12",
          "name": "backup-link",
          "status": "connected",
          "vlan": "99",
          "duplex": "full",
          "speed": "1000",
          "type": "10/100/1000BaseTX"
        }
      ]
    },
    {
      "sw_ip": "192.168.1.123",
      "ports_info": [
        {
          "port": "Fa0/1",
          "name": "uplink-core",
          "status": "connected",
          "vlan": "10",
          "duplex": "full",
          "speed": "1000",
          "type": "10/100/1000BaseTX"
        },
        {
          "port": "Fa0/2",
          "name": "",
          "status": "notconnect",
          "vlan": "1",
          "duplex": "auto",
          "speed": "auto",
          "type": "10/100/1000BaseTX"
        }
      ]
    }
  ]
}
);

    infoBuilding = {build_name: "nome ficticion", build_number: 2, id: 3, lnglat: "3243, 3434", switchs: "123, 343, 343"}

    console.log(infoPorts)

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

    const fetchInfoSw = useCallback(async () => {
        
        console.log("teste FETCH INFO SWITCH: ", infoBuilding);

        // const switchList: string[] = infoBuilding.switchs.split(",");

        // para teste de mokup
        // await getInfoStatusSw({list_sw: switchList});

    }, [infoBuilding])

    useEffect(() => {
        fetchInfoSw();
    }, [fetchInfoSw])
    

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
            
            <div className={`bg-white w-full duration-200 ${getContainerHeightClass()} shadow-[0_1px_2px_rgba(60,64,67,0.15),0_2px_6px_2px_rgba(60,64,67,0.15)]`}>
                <div className="flex flex-col items-end p-2">
                    <button
                        className="w-7 h-7 cursor-pointer"
                        onClick={handleSetIsFullScreen}
                    >
                        <GoScreenFull className="animate-pulse w-full h-full"/>
                    </button>


                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <div>
                            <h1>
                                {infoBuilding.build_name} - {infoBuilding.build_number}
                            </h1>
                        </div>

                        <div className="flex flex-col gap-15 mb-16">
                            <TableIntStatus results={infoPorts.results} message={infoPorts.message}/>
                        </div>
                        
                    </div>

                    {/* {[...Array(14)].map((_, i) => (
                        <div key={i} className="bg-gray-300 my-1 p-2 text-center hover:bg-gray-400 cursor-pointer w-full">
                            LISTA EXEMPLO VIEW - {i + 1}
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    );
};


