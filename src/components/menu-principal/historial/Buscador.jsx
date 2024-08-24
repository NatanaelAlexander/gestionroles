export default function Buscador(){
    return(
        <nav className="flex flex-row gap-5">
            <input className="w-full px-5 border rounded-md bg-gray-100 p-2 placeholder:text-base placeholder:text-gray-400" type="text" placeholder="Buscar por ID del movimiento" />
        </nav>
    )
}

