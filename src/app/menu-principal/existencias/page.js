import Tittle from "@/components/menu-principal/Tittle"

export default function page() {
    return (
        <>
            <div className="w-full">
                <Tittle tittle={"Gestión de existencias"} />

                <div className="container mx-auto p-10">
                    {/* Main content */}
                    Soy existencias
                </div>
            </div>

        </>
    )
}