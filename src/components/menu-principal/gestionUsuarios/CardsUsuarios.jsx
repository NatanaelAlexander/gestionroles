import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";



import usuarios from "./usuarios";

export default function CardsUsuarios() {
    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
            
            {usuarios.map((usuario) => (
                <div key={usuario.id} className="border p-5 w-auto rounded-md shadow-md">
                    <figure>
                        <FaUserCircle className="w-full h-32" />
                    </figure>
                    <div className="flex flex-col gap-3 pt-5">
                        <div>
                            <p className="text-center text-lg">{usuario.nombre} {usuario.apellido}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-center text-sm bg-gray-200 rounded-md text-gray-600 p-0.5 font-normal">{usuario.cargo}</span>
                            <span className="text-center text-sm bg-gray-200 rounded-md text-gray-600 p-0.5 font-normal">{usuario.rol}</span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center pt-5 gap-2">
                        <FiEdit title="Editar usuario" className="size-6 cursor-pointer hover:scale-105 transition hover:text-blue-500" />
                        <RiDeleteBin6Line title="Eliminar usuario" className="size-6 cursor-pointer hover:scale-105 hover:text-red-500 transition" />
                    </div>
                </div>
            ))}


        </section>
    )
}