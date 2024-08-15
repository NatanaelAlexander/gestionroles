'use client';
import productos from "./productos";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaSortUp, FaSortDown } from "react-icons/fa";

export default function ListarProductos({ params }) {
    const [productosFiltrados, setproductosFiltrados] = useState([]);
    const [id, categoria] = params.slug;
    const [filtroStock, setFiltroStock] = useState("");
    const [filtroEstado, setFiltroEstado] = useState("");
    const [ordenAscendente, setOrdenAscendente] = useState(true);

    useEffect(() => {
        let filtrado = productos.filter((producto) =>
            producto.category_id == id &&
            (filtroStock === 'con' ? producto.stock > 0 : filtroStock === 'sin' ? producto.stock === 0 : true) &&
            (filtroEstado ? producto.status === filtroEstado : true)
        );

        filtrado.sort((a, b) =>
            ordenAscendente ? b.stock - a.stock : a.stock - b.stock
        );

        setproductosFiltrados(filtrado);
    }, [id, filtroStock, filtroEstado, ordenAscendente]);

    const manejarOrden = () => {
        setOrdenAscendente(!ordenAscendente);
    };

    return (
        <div className="pt-10 px-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{categoria}</h2>
                <div className="flex space-x-4">
                    <select
                        className="border rounded px-2 py-1"
                        value={filtroStock}
                        onChange={(e) => setFiltroStock(e.target.value)}
                    >
                        <option value="">Filtrar por stock</option>
                        <option value="sin">Sin stock</option>
                        <option value="con">Con stock</option>
                    </select>
                    <select
                        className="border rounded px-2 py-1"
                        value={filtroEstado}
                        onChange={(e) => setFiltroEstado(e.target.value)}
                    >
                        <option value="">Filtrar por estado</option>
                        <option value="disponible">disponible</option>
                        <option value="inactivo">Inactivo</option>
                    </select>
                </div>
            </div>
            <table className="w-full table-auto bg-white shadow-md rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                    <tr className="">
                        <th className="px-4 py-2 text-left">Nombre</th>
                        <th className="px-4 py-2 text-left">Descripción</th>
                        <th
                            className="px-4 py-2 text-left cursor-pointer flex items-center mx-auto"
                            onClick={manejarOrden}
                        >
                            Stock
                            {ordenAscendente ? (
                                <FaSortUp className="ml-1" />
                            ) : (
                                <FaSortDown className="ml-1" />
                            )}
                        </th>
                        <th className="px-4 py-2 text-left">
                            Precio c/u
                        </th>
                        <th className="px-4 py-2 text-left">Estado</th>
                        <th className="px-4 py-2 text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {productosFiltrados.map((producto) => (
                        <tr key={producto.nombre} className="hover:bg-gray-100">
                            <td className="border-t px-4 py-[10px] cursor-pointer">{producto.nombre}</td>
                            <td className="border-t px-4 py-[10px] truncate max-w-lg">{producto.descripcion}</td>
                            <td className="border-t px-4 py-[10px]">{producto.stock}</td>
                            <td className="border-t px-4 py-[10px] capitalize">{producto.precio}</td>
                            <td className="border-t px-4 py-[10px] capitalize">{producto.status}</td>
                            <td className="border-t px-4 py-[10px] flex flex-row gap-5 justify-end">
                                <FiEdit className="size-5 cursor-pointer hover:scale-105 transition hover:text-blue-500" />
                                <RiDeleteBin6Line className="size-5 cursor-pointer hover:scale-105 hover:text-red-500 transition" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
