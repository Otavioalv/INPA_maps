import { useCallback, useEffect, useState, type ChangeEvent } from "react"


export const TerminalMode = () => {
    const [ipInputValue, setIpInputValue] = useState<string>("");
    const [isIpValid, setIsIpValid] = useState<boolean>(false);

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

    

    useEffect(() => {
        validarIP();
    }, [validarIP]);

    return (
        // <div className="flex flex-col items-end justify-center p-2 bg-red-400">
        //     <div className="w-full h-full flex flex-col justify-center items-center bg-green-300">
        //         Modo termianl 
        //     </div>
        // </div>

        <div className="flex p-3">
            {/* Botoes de opções */}

            {/* botao de inserir ip Pesquisa*/}
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
                    onClick={() => console.log("clicavel")}
                >
                    Acessar
                </button>
            </div>

            

            {/* Fazer futuro */}
            <div>
                {/* botao modo click/livre */}

                {/* botoes de opções */}
            </div>

            {/* Terminal */}
            <div>

            </div>
        </div>
    )
}