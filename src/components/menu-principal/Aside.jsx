import { FaUserCircle } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { FiUsers } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import Link from "next/link";
import { CiBoxes } from "react-icons/ci";
import { RiFileListLine } from "react-icons/ri";

export default function Aside() {
    return (
        <aside className="w-[275px] relative">
            <div className="fixed text-sm font-medium sm:text-base py-6 px-4 flex flex-col gap-4 border-r h-screen ">

                <figure className="flex flex-row gap-2 items-center">
                    <FaUserCircle className="size-10" />
                    <p>Hola Natanael</p>
                </figure>

                <div className="flex flex-col gap-[1px] mt-2">
                    <Link href={'/'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><CiLogout className="rotate-180 size-5 mr-2" />Cerrar sesión</Link>
                    <Link href={'/menu-principal/perfil'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><FiUser className="size-5 mr-2" />Perfil</Link>
                </div>

                <div className="flex flex-col gap-[1px]">
                    <Link href={'/menu-principal/historial'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><RiFileListLine className="size-5 mr-2" />Historial</Link>
                    <Link href={'/menu-principal'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><RxDashboard className="size-5 mr-2" />Dashboard</Link>
                    <Link href={'/menu-principal/gestion-usuario'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><FiUsers className="size-5 mr-2" />Gestión de usuarios</Link>
                    <Link href={'/menu-principal/inventario'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><BsBoxSeam className="size-5 mr-2" />Gestión de inventario</Link>
                    <Link href={'/menu-principal/existencias'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><CiBoxes className="size-5 mr-2" />Gestión de existencias</Link>
                </div>

                <div className="flex flex-col gap-[1px]">
                    <Link href={'/menu-principal/ayuda'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><IoIosHelpCircleOutline className="size-5 mr-2" />Ayuda</Link>
                    <Link href={'/menu-principal/termino-condiciones'} className="flex flex-row items-center text-nowrap py-2 cursor-pointer px-4 rounded-md hover:bg-gray-100"><GrDocumentText className="size-5 mr-2" />Términos y condiciones</Link>
                </div>
            </div>
        </aside>
    )
}