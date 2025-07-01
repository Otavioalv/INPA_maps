import type { infoPortsListType } from "@/types/infraApi"
import { LoadingTableIntStatus } from "../LoadingTableIntStatus/LoadingTableIntStatus"
// import type { responseInfoPortsType } from "../DropContainer/DropContainer"


export const TableIntStatus = ({results}: {results?: infoPortsListType}) => {
    console.log("TABLE INT STATUS: ", results);
    return (
        <>
            {results?.length ? results.map((switchData, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <h2 className="">
                        Switch IP: <span className="bg-green-400 rounded p-1 text-white">
                            {switchData.sw_ip}
                        </span>
                    </h2>
                    
                    {switchData.ports_info.length ? (
                        <table className="rounded-md overflow-hidden text-zinc-800">
                            <thead>
                            <tr>
                                <th className="bg-zinc-700 text-white p-2 px-5">Port</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">Name</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">Status</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">VLAN</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">Duplex</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">Speed</th>
                                <th className="bg-zinc-700 text-white p-2 px-5">Type</th>
                            </tr>
                            </thead>
                            <tbody>
                            {switchData.ports_info.map((port, i) => (
                                <tr key={i} className={`${i % 2 ? "bg-slate-200" : "bg-slate-100"} cursor-pointer hover:brightness-95 transition duration-100`}>
                                    <td className="p-2 px-5">
                                        {port.port}
                                    </td>
                                    <td className="p-2 px-5">{port.name || "-"}</td>
                                    <td className="p-2 px-5 flex items-center justify-between gap-2">
                                        {port.status}
                                        <span
                                            className={`
                                            h-3 w-3 rounded-full
                                            ${
                                                port.status === "connected"
                                                ? "bg-green-500"
                                                : port.status === "notconnect"
                                                ? "bg-gray-400"
                                                : "bg-red-600"
                                            }
                                            `}
                                        ></span>
                                    </td>
                                    <td className="p-2 px-5">{port.vlan}</td>
                                    <td className="p-2 px-5">{port.duplex}</td>
                                    <td className="p-2 px-5">{port.speed}</td>
                                    <td className="p-2 px-5">{port.type}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="bg-red-500 flex p-2 px-4 rounded-md">
                            <h1 className="text-white w-full h-full text-center">
                                Sem dados do switch
                            </h1>
                        </div>
                    )}
                </div>
            )):(
                <LoadingTableIntStatus/>
            )}
            
        </>
    )
}