import Tittle from "@/components/menu-principal/Tittle"
import Buscador from "@/components/menu-principal/gestionProductos/Buscador"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de productos"} />

                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <Buscador />
                </div>
            </div>

        </>
    )
}