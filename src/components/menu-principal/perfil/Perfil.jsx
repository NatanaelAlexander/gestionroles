import { FaUserCircle } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export default function Perfil() {
    return (
        <>
            <section className="w-full flex flex-col justify-center items-center py-10 gap-10">
                <div className="flex flex-col items-center gap-5">
                    <FaUserCircle className="size-44" />
                    <p className="font-semibold text-2xl">Perfil de Natanael</p>
                    
                </div>
                <div className="p-10 border rounded-md flex flex-col gap-5">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg font-medium">Datos personales</p>
                        <FiEdit title="Editar datos" className="size-5 cursor-pointer hover:scale-105 transition hover:text-blue-500" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-base">Nombre</label>
                            <input type="text" placeholder="Natanael" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-base">Apellido</label>
                            <input type="text" placeholder="Muñoz" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base">Correo</label>
                        <input type="email" placeholder="ejemploCorreo@gmail.com" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-base">Contraseña</label>
                        <input type="password" placeholder="************" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                    </div>
                    <div className="flex flex-row gap-5">
                        <div className="flex flex-col gap-1">
                            <label className="text-base">Cargo de empresa</label>
                            <input type="text" placeholder="jefe de área" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <label className="text-base">Rol de aplicación</label>
                            <input type="text" placeholder="Administrador" disabled="true" className="bg-gray-200 rounded-sm p-1" />
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}