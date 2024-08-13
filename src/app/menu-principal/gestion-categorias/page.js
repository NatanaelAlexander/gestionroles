import Tittle from "@/components/menu-principal/Tittle"
import Buscador from "@/components/menu-principal/gestionCategorias/Buscador"
import MostrarCategorias from "@/components/menu-principal/gestionCategorias/MostrarCategorias"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de categorias"} />

                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <Buscador />
                    <MostrarCategorias/>
                </div>
            </div>

        </>
    )
}