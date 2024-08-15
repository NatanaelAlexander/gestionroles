import Tittle from "@/components/menu-principal/Tittle"
import Buscador from "@/components/menu-principal/inventario/productos/Buscador"
import ListarProductos from "@/components/menu-principal/inventario/productos/ListarProductos"

export default function page({ params }) {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de inventario"} />

                <div className="container mx-auto p-10">
                    <Buscador />

                    <ListarProductos params={params} />
                </div>
            </div>

        </>
    )
}