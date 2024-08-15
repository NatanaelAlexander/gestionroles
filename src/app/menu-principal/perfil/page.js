import Tittle from "@/components/menu-principal/Tittle"
import Perfil from "@/components/menu-principal/perfil/Perfil"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Perfil"} />
                <div>
                    <Perfil />
                </div>

            </div>
        </>
    )
}