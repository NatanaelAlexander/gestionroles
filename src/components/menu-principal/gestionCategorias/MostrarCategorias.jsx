import categorias from "./categorias"
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function MostrarCategorias() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">

            {categorias.map((categoria) => (
                <div key={categoria.id} className="border rounded-md p-5 flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center">
                        <h4 className="font-semibold text-lg cursor-pointer">{categoria.nombre}</h4>
                        <figure className="flex flex-row gap-5">
                            <FiEdit className="size-5 cursor-pointer hover:scale-105 transition" />
                            <RiDeleteBin6Line className="size-5 cursor-pointer hover:scale-105 transition" />
                        </figure>
                    </div>
                    <div>
                        <p className="text-gray-400">{categoria.descripción}</p>
                    </div>
                </div>
            ))}



        </div>
    )
}