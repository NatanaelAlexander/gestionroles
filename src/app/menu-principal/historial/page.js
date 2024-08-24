import Tittle from "@/components/menu-principal/Tittle"
import HistoryList from "@/components/menu-principal/historial/HistoryList"
import Buscador from "@/components/menu-principal/historial/Buscador"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Historial de movimientos"} />
                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <Buscador />
                    <HistoryList />
                </div>
            </div>
        </>
    )
}