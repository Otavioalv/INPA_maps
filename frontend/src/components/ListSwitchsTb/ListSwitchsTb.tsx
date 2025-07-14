import { getInfoStatusSw } from "@/services/switchLocalService";
import type { BuildingTypeInterface, infoPortsListType } from "@/types/infraApi";
import { useCallback, useEffect, useState } from "react";
import { TableIntStatus } from "../TableIntStatus/TableIntStatus";
import notFoundImg from "@/assets/not_found.jpg";




export type listSwitchTbType = {
    infoBuilding: BuildingTypeInterface
}

export const ListSwitchTb = ({infoBuilding}: listSwitchTbType) => {
    const [infoPorts, setInfoPorts] = useState<infoPortsListType>([]);


    const fetchInfoSw = useCallback(async () => {

        const switchList: string[] = infoBuilding.switchs.split(",");

        // para teste de mokup
        if(switchList[0] != ""){
            console.log("LISTA DE SWITCHS: ", switchList);
            setInfoPorts([]);
            setInfoPorts(await getInfoStatusSw({list_sw: switchList}));
        }

    }, [infoBuilding])

    useEffect(() => {
        fetchInfoSw();
    }, [fetchInfoSw]);


    return (
        <div className="flex flex-col items-end justify-center p-2">
            <div className="w-full h-full flex flex-col justify-center items-center">
                {infoBuilding.build_number ? (
                <>
                    <div>
                        <h1 className="text-3xl">
                            {infoBuilding.build_name} - {infoBuilding.build_number}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-15 mb-16">
                        <TableIntStatus results={infoPorts}/>
                    </div>
                </>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-6 text-zinc-700">
                    <div className="flex flex-col items-center justify-center">
                        <img src={notFoundImg} className="w-72" draggable="false" alt="Not found error"/>
                        <h1 className=" text-6xl">Sem dados</h1>
                    </div>
                    <p>Clique em um local para caregar informações dos Switchs</p>
                    </div>
                )}
            </div>
        </div>
    );
}