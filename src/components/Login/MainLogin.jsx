
export default function MainLogin() {
    return (
        <section className="w-screen h-screen flex justify-center mx-auto items-center">

            <form className="p-5 border rounded-lg">

                <div className="flex flex-col p-6 space-y-1">
                    <span className="whitespace-nowrap font-semibold tracking-tight text-2xl">Iniciar sesión</span>
                    <p className="text-sm text-muted-foreground">Ingresa tu correo electrónico y contraseña para acceder a tu cuenta.</p>
                </div>

                <div className="p-6 space-y-4">
                    <div className="grid space-y-2">
                        <label>Usuario</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="ingrese su usuario" />
                    </div>
                    <div className="grid space-y-2">
                        <label>Contraseña</label>
                        <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" type="text" placeholder="ingrese su contraseña" />
                    </div>
                    <div className="flex items-center pt-6">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 w-full">Iniciar sesión</button>
                    </div>
                </div>
            </form>
        </section>
    )
}