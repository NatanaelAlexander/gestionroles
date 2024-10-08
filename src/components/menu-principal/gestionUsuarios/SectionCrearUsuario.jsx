export default function SectionCrearUsuario() {
    return (
        <>
            <nav className="flex flex-row gap-5">
                <input className="w-full px-5 border rounded-md bg-gray-100 placeholder:text-base placeholder:text-gray-400" type="text" placeholder="Buscar usuario" />
                <button className="text-nowrap bg-black text-white p-2 rounded-md hover:bg-gray-700">Crear nuevo usuario</button>
            </nav>
        </>
    )
}