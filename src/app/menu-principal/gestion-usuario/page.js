import Tittle from "@/components/menu-principal/Tittle"
import CardsUsuarios from "@/components/menu-principal/gestionUsuarios/CardsUsuarios"

import SectionCrearUsuario from "@/components/menu-principal/gestionUsuarios/SectionCrearUsuario"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de usuarios"} />
                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <SectionCrearUsuario />
                    <CardsUsuarios />
                </div>
            </div>
        </>
    )
}