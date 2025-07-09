import { socket } from "@/services/infraSocketIO";
import { useCallback, useEffect, useState, type ChangeEvent, type KeyboardEvent } from "react"


export const TerminalMode = () => {
    const [ipInputValue, setIpInputValue] = useState<string>("");
    const [isIpValid, setIsIpValid] = useState<boolean>(false);
    const [cmdl, ] = useState<string>("sh int status");
    const [beforeContentTerminal, setBeforeContentTerminal] = useState<string>("");

    const handleIpInputValue = (e:ChangeEvent<HTMLInputElement>) => {
        setIpInputValue(e.target.value);
        console.log(e.target.value);
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
    const fetchConnectSw = () => {
        const val = {
            ip_sw: ipInputValue,
            cmdl: cmdl
        }

        socket.emit("free_access_sw", val, () => {
            console.log("Conexão realizada");
        });

        socket.on("get_res_access_sw", (result) => {
            console.log(result);
            console.log("Resultado recebido da conexao");
        })

        return () => {
            socket.off("get_res_access_sw");
        }
    }

    const enterTerminal = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if(e.key === "Enter" && !e.shiftKey) {    
            e.preventDefault(); 
            setBeforeContentTerminal(beforeContentTerminal + "\nEnter")
        }
    }

    

    useEffect(() => {
        validarIP();
    }, [validarIP]);

    return (

        <div className="flex p-3 justify-between">
            {/* Botoes de opções */}

            {/* botao de inserir ip Pesquisa*/}
            <div>
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

            {/* Terminal */}
            <div className="w-3/4 h-[500px] p-3 bg-black rounded-md font-bold overflow-scroll scroll-smooth flex-col-reverse">
                {/* Conteudo antes do terminal */}
                <div className="text-white whitespace-pre-line">
                    {beforeContentTerminal}
                </div>
                <div className="flex gap-2 h-full">
                    <p className="text-green-600">
                        {ipInputValue}:
                    </p>
                    <textarea
                        className="w-full resize-none bg-transparent border-none outline-none text-white h-full font-medium"
                        rows={1}
                        onKeyDown={enterTerminal}
                    />
                    {/* <input 
                        type="text" 
                        className="w-full border-transparent text-white outline-none font-medium"
                    /> */}
                </div>
            </div>
        </div>
    )
}