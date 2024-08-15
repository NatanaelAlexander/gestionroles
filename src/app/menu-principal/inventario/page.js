import Tittle from "@/components/menu-principal/Tittle"
import Buscador from "@/components/menu-principal/inventario/Buscador"
import MostrarCategorias from "@/components/menu-principal/inventario/MostrarCategorias"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de inventario"} />

                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <Buscador />
                    <MostrarCategorias/>
                </div>
            </div>

        </>
    )
}