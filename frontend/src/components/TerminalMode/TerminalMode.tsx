import { socket } from "@/services/infraSocketIO";
import { useCallback, useEffect, useState, useRef} from "react";
import type { ChangeEvent} from "react";
import { Terminal } from "@/components/Terminal/Terminal";
import { LoadingTerminal } from "../LoadingTerminal/LoadingTerminal";



export const TerminalMode = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [ipInputValue, setIpInputValue] = useState<string>("");
    const [isIpValid, setIsIpValid] = useState<boolean>(false);
    const [cmdl, ] = useState<string>("sh int status");
    // const [beforeContentTerminal, /* setBeforeContentTerminal */] = useState<string>("");


    const terminalRef = useRef<HTMLDivElement>(null);
    

    const handleIpInputValue = (e:ChangeEvent<HTMLInputElement>) => {
        setIpInputValue(e.target.value);
    }

    const handleSetIsIpValid = (isVal: boolean) => {
        setIsIpValid(isVal);
    }

    // Valida IP
    const validarIP = useCallback(() => {
        const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

            
        if (ipRegex.test(ipInputValue)) {
            handleSetIsIpValid(true);
        } else {
            handleSetIsIpValid(false);
        }
    }, [ipInputValue]);

    // Conecta no switch via socketIO
    const fetchConnectSw = async () => {
        // valor para conectar ao switch
        setIsLoading(true);

        const val = {
            ip_sw: ipInputValue,
            cmdl: cmdl
        }

        socket.emit("connect_sw", val, () => {
            console.log("Conexão realizada");
            setIsLoading(false);
        });
    }
    

    useEffect(() => {
        socket.on("res_connect_sw", (result) => {
            console.log(result);
            console.log("Resultado recebido da conexao");
        })

        return () => {
            socket.off("res_connect_sw");
        }
    }, []);

    useEffect(() => {
        const el = terminalRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, []);

    useEffect(() => {
        validarIP();
    }, [validarIP]);

    return (
/* flex flex-col items-end justify-center */
// flex p-3 justify-between
        <div className="flex p-3 justify-center w-full relative">
            {isLoading ? (
                <LoadingTerminal/>
            ) : (
                <div className="flex justify-between w-full">
                    {/* Botoes de opções */}

                    {/* botao de inserir ip Pesquisa*/}
                    <div className="">
                        <div className="bg-green-300 rounded w-3xs flex">
                            <input 
                                type="text"  
                                placeholder="Insira um IP"
                                value = {ipInputValue}
                                onChange={handleIpInputValue}
                                className="
                                        w-full h-full p-3 placeholder-green-600 text-green-900 
                                        border-2 border-transparent rounded 
                                        transition
                                        focus:outline-none focus:border-green-500"
                            />

                            <button 
                                type="submit"
                                className={`
                                    p-3
                                    cursor-pointer
                                    border-2 border-transparent
                                    transition rounded
                                    ${isIpValid ? "hover:border-green-500" : "bg-gray-300 text-white"}
                                `}
                                disabled={!isIpValid}
                                onClick={fetchConnectSw}
                            >
                                Acessar
                            </button>
                        </div>
                        {/* Fazer futuro */}
                        <div>
                            {/* botao modo click/livre */}
                            botoes
                            {/* botoes de opções */}
                        </div>
                    </div>
                    
                    <Terminal terminalName={ipInputValue}/>
                </div>
            )}
        </div>
    )
}