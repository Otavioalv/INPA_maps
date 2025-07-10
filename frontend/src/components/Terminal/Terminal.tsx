import { useEffect, useRef, useState} from "react";
import type {ChangeEvent, KeyboardEvent} from "react" ;
import { socket } from "@/services/infraSocketIO";

export type terminalType = {
    terminalName: string
}

interface getResAccessInterface {
    message: string;
    results: string;
}

export const Terminal = ({terminalName}: terminalType) => {
    const beforeTerminalRef = useRef<HTMLDivElement>(null);
    const terminalRef = useRef<HTMLDivElement>(null);
    
    const [terminalValue, setTerminalValue] = useState<string>("");
    const [resultSw, setResultSw] = useState<string>("");

    const enterTerminal = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key !== "Enter") {return};

        if (e.shiftKey) return;

        e.preventDefault();

        if (!terminalValue) return;

        // setBeforeContentTerminal(beforeContentTerminal + "Enter\n");
        fetchConnectSw();
        // setBeforeTerminal();
    };
    
    const handleSetTerminalValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTerminalValue(e.target.value);
        console.log("Terminal: ", e.target.value);
    }

    const setBeforeTerminal = (res?: string) => {
        if(beforeTerminalRef.current) {
            const bfTerminal = `
                <div class="">
                    <div class="flex gap-2">
                        <p class="text-green-600"> 
                            ${terminalName}:
                        </p>

                        <p class="w-full resize-none bg-transparent border-none outline-none text-white h-full font-medium whitespace-pre-line">${terminalValue}</p>
                    </div>
                    
                    <pre class="text-white font-mono whitespace-pre-wrap">${res ? res : resultSw}</pre>
                </div>
            `;

            // console.log(beforeTerminalRef.current.innerHTML);
            
            beforeTerminalRef.current.innerHTML += bfTerminal;
            // beforeTerminalRef.current.innerHTML += bfTerminal;
        }


        setTerminalValue("");
    };


    const fetchConnectSw =  () => {
        const val = {
            // ip_sw: terminalName,
            ip_sw: "10.2.16.12",
            cmdl: terminalValue,
        }

        socket.emit("free_access_sw", val, () => {
            console.log("Conexão realizada");
        });

        socket.on("get_res_access_sw", (response: getResAccessInterface) => {
            console.log("TERMINAL: ", response)
            
            setResultSw(response.results)
            setBeforeTerminal(response.results)
        });

        return () => {
            socket.off("get_res_access_sw");
        }
    }

    // useEffect(() => {
    //     if(beforeTerminalRef.current) {
    //         const bfTerminal = `
    //             <div class="">
    //                 <div class="flex gap-2">
    //                     <p class="text-green-600"> 
    //                         ${terminalName}:
    //                     </p>

    //                     <p class="w-full resize-none bg-transparent border-none outline-none text-white h-full font-medium whitespace-pre-line"></p>
    //                 </div>
                    
    //                 <pre class="text-white font-mono whitespace-pre-wrap">${resultSw}</pre>
    //             </div>
    //         `;

    //         beforeTerminalRef.current.innerHTML = beforeTerminalRef.current.innerHTML + bfTerminal;
    //     }
    // }, [setResultSw, terminalName, resultSw]);

    useEffect(() => {
        const el = terminalRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight;
        }
    }, [])

    return (
        <div 
            ref={terminalRef}
            className="w-3/4 h-[700px] p-3 bg-black rounded-md font-bold overflow-scroll scroll-smooth flex-col-reverse"
        >
            
            {/* Conteudo antes do terminal */}
            <div 
                ref={beforeTerminalRef}
                className=""  
            >
            </div>


            <div className="flex gap-2 h-full">
                <p className="text-green-600">
                    {terminalName}:
                </p>
                <textarea
                    className="w-full resize-none bg-transparent border-none outline-none text-white h-full font-medium"
                    rows={1}
                    value={terminalValue}
                    onChange={handleSetTerminalValue}
                    onKeyDown={enterTerminal}
                />
                {/* <input 
                    type="text" 
                    className="w-full border-transparent text-white outline-none font-medium"
                /> */}
            </div>
        </div>
    )
}