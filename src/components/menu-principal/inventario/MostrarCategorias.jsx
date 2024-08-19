import categorias from "./categorias"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiBoxes } from "react-icons/ci";
import Link from "next/link";

export default function MostrarCategorias() {
    return (


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
            {categorias.map((categoria) => (
                <div key={categoria.id} className="border rounded-md p-5 flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center">
                        <Link href={`/menu-principal/inventario/${categoria.id}/${categoria.nombre}`} className="font-semibold text-lg cursor-pointer">{categoria.nombre}</Link>
                        <figure className="flex flex-row gap-5">
                        <FiEdit title="Editar categoria" className="size-5 cursor-pointer hover:scale-105 transition hover:text-blue-500" />
                        <RiDeleteBin6Line title="ELiminar categoria" className="size-5 cursor-pointer hover:scale-105 hover:text-red-500 transition" />
                        </figure>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-gray-400 text-sm line-clamp-1">{categoria.descripción}</p>
                        <span className="flex flex-row gap-1 items-center justify-end">
                            <CiBoxes></CiBoxes>
                            <p className="text-sm ">{categoria.productos} productos</p>
                        </span>
                    </div>
                </div>
            ))}


            {/* <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 animate-pulse">
                <div class="border rounded-md p-5 flex flex-col gap-5">
                    <div class="flex flex-row justify-between items-center">
                    <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                    <div class="flex flex-row gap-5">
                        <div class="h-6 w-6 bg-gray-200 rounded"></div>
                        <div class="h-6 w-6 bg-gray-200 rounded"></div>
                    </div>
                    </div>
                    <div>
                    <div class="h-4 bg-gray-200 rounded w-full mt-1"></div>
                    <div class="h-4 bg-gray-200 rounded w-3/4 mt-1"></div>
                    <div class="h-4 bg-gray-200 rounded w-2/3 mt-1"></div>
                    </div>
                </div>
                </div> */}

        </div>
    )
}