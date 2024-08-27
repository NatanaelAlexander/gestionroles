const MiComponente = ({ accion }) => {
    let contenido;

    switch (accion) {
        case 'Borrado':
            contenido = <div className="bg-red-400 py-[2px] rounded-md text-gray-200 text-center px-3">Borrado</div>;
            break;
        case 'Modificado':
            contenido = <div className="bg-green-400 py-[2px] rounded-md text-gray-200 text-center px-3">Modificado</div>;
            break;
        case 'Creacion':
            contenido = <div className="bg-blue-400 py-[2px] rounded-md text-gray-200 text-center px-3">Creado</div>;
            break;
        case 'Exportado':
            contenido = <div className="bg-orange-400 py-[2px] rounded-md text-gray-200 text-center px-3">Exportado</div>;
            break;
        case 'Importado':
            contenido = <div className="bg-purple-400 py-[2px] rounded-md text-gray-200 text-center px-3">Importado</div>;
            break;
        default:
            contenido = <div className="">Acción desconocida</div>;
    }

    return <td className="pl-4 py-[10px]">{contenido}</td>;
};

export default MiComponente;
