import { IoIosArrowForward } from "react-icons/io";
import historial from "./historial";
import Accion from "./Accion"

export default function HistoryList() {

    return (
        <div className="pt-10">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Ultimos movimientos</h2>
                <div className="flex space-x-4">
                    <select className="border rounded px-2 py-1">
                        <option value="">Filtrar por categoria</option>
                        <option value="sin">Sin stock</option>
                        <option value="con">Con stock</option>
                    </select>
                    <select className="border rounded px-2 py-1">
                        <option value="">Filtrar por Acción</option>
                        <option value="Borrado">Borrado</option>
                        <option value="Creado">Creado</option>
                        <option value="Modificado">Modificado</option>
                        <option value="Exportado">Exportado</option>
                        <option value="Importado">Importado</option>
                    </select>
                </div>
            </div>
            <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className="text-left">
                        <th className="pl-4 py-2">Id</th>
                        <th className="pl-4 py-2">Fecha</th>
                        <th className="pl-4 py-2">Usuario</th>
                        <th className="pl-4 py-2">Producto</th>
                        <th className="pl-4 py-2">Accción</th>
                        <th className="pl-4 py-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((item) => (
                        <tr key={item.id} className="hover:bg-gray-100 text-left">
                            <td className="pl-4 py-[10px]">{item.id}</td>
                            <td className="pl-4 py-[10px]">{item.fecha}</td>
                            <td className="pl-4 py-[10px]">{item.usuario}</td>
                            <td className="pl-4 py-[10px]">{item.producto}</td>
                            <Accion accion={item.accion} />
                            <td className="pr-4 py-[10px] flex gap-5 justify-end cursor-pointer">
                                <p className="flex flex-row gap-2 items-center">Ver más<IoIosArrowForward /></p>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    )

}