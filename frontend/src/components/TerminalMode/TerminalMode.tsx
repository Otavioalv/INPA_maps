

export const TerminalMode = () => {
    return (
        // <div className="flex flex-col items-end justify-center p-2 bg-red-400">
        //     <div className="w-full h-full flex flex-col justify-center items-center bg-green-300">
        //         Modo termianl 
        //     </div>
        // </div>

        <div className="flex p-3">
            {/* Botoes de opções */}

            {/* botao de inserir ip Pesquisa*/}
            <div className="bg-green-300 rounded w-3xs">
                <input 
                    type="text"  
                    placeholder="Insira um IP"
                    className="
                            w-full h-full p-3 placeholder-green-600 text-green-900 
                            border-2 border-transparent rounded 
                            focus:outline-none focus:border-green-500"
                />
            </div>

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