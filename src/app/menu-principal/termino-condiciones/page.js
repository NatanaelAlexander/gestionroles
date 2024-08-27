import Tittle from "@/components/menu-principal/Tittle"
import TyC from "@/components/menu-principal/terminosYCondiciones/TyC"
export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Términos y condiciones"} />
                <div className="container mx-auto p-10">
                    {/* Main content */}
                    <TyC />
                </div>
            </div>
        </>
    )
}