const productos = [
    // Notebooks
    {
        nombre: 'Notebook 1',
        category_id: 1,
        descripcion: 'Notebook de alta gama con procesador i7 y 16GB de RAM.',
        stock: 0,
        status: 'disponible',
        precio: '1.500.000'
    },
    {
        nombre: 'Notebook 2',
        category_id: 1,
        descripcion: 'Notebook ultradelgada con pantalla de 13 pulgadas y SSD de 512GB.',
        stock: 8,
        status: 'disponible',
        precio: '1.200.000'
    },
    {
        nombre: 'Notebook 3',
        category_id: 1,
        descripcion: 'Notebook para gaming con tarjeta gráfica dedicada y 32GB de RAM.',
        stock: 5,
        status: 'disponible',
        precio: '2.000.000'
    },
    {
        nombre: 'Notebook 4',
        category_id: 1,
        descripcion: 'Notebook económica para estudiantes, con procesador i5 y 8GB de RAM.',
        stock: 12,
        status: 'disponible',
        precio: '800.000'
    },
    // Desktop
    {
        nombre: 'Desktop 1',
        category_id: 2,
        descripcion: 'Desktop para oficina con procesador i3 y 4GB de RAM.',
        stock: 0,
        status: 'disponible',
        precio: '500.000'
    },
    {
        nombre: 'Desktop 2',
        category_id: 2,
        descripcion: 'Desktop gaming con procesador Ryzen 5 y tarjeta gráfica GTX 1660.',
        stock: 7,
        status: 'disponible',
        precio: '1.200.000'
    },
    // Monitores
    {
        nombre: 'Monitor 1',
        category_id: 3,
        descripcion: 'Monitor Full HD de 24 pulgadas.',
        stock: 0,
        status: 'disponible',
        precio: '150.000'
    },
    {
        nombre: 'Monitor 2',
        category_id: 3,
        descripcion: 'Monitor 4K de 27 pulgadas con panel IPS.',
        stock: 10,
        status: 'disponible',
        precio: '400.000'
    },
    {
        nombre: 'Monitor 3',
        category_id: 3,
        descripcion: 'Monitor ultraancho de 34 pulgadas.',
        stock: 5,
        status: 'disponible',
        precio: '600.000'
    },
    {
        nombre: 'Monitor 4',
        category_id: 3,
        descripcion: 'Monitor gaming con tasa de refresco de 144Hz.',
        stock: 8,
        status: 'disponible',
        precio: '300.000'
    },
    {
        nombre: 'Monitor 5',
        category_id: 3,
        descripcion: 'Monitor curvo de 32 pulgadas.',
        stock: 12,
        status: 'disponible',
        precio: '500.000'
    },
    {
        nombre: 'Monitor 6',
        category_id: 3,
        descripcion: 'Monitor económico de 21 pulgadas.',
        stock: 25,
        status: 'disponible',
        precio: '120.000'
    },
    // Teclados
    {
        nombre: 'Teclado 1',
        category_id: 4,
        descripcion: 'Teclado mecánico con retroiluminación RGB.',
        stock: 50,
        status: 'disponible',
        precio: '80.000'
    },
    {
        nombre: 'Teclado 2',
        category_id: 4,
        descripcion: 'Teclado de membrana silencioso.',
        stock: 30,
        status: 'disponible',
        precio: '40.000'
    },
    {
        nombre: 'Teclado 3',
        category_id: 4,
        descripcion: 'Teclado gaming con teclas programables.',
        stock: 20,
        status: 'disponible',
        precio: '100.000'
    },
    {
        nombre: 'Teclado 4',
        category_id: 4,
        descripcion: 'Teclado inalámbrico compacto.',
        stock: 0,
        status: 'disponible',
        precio: '70.000'
    },
    {
        nombre: 'Teclado 5',
        category_id: 4,
        descripcion: 'Teclado ergonómico para uso prolongado.',
        stock: 15,
        status: 'disponible',
        precio: '90.000'
    },
    {
        nombre: 'Teclado 6',
        category_id: 4,
        descripcion: 'Teclado resistente al agua.',
        stock: 10,
        status: 'disponible',
        precio: '60.000'
    },
    {
        nombre: 'Teclado 7',
        category_id: 4,
        descripcion: 'Teclado mecánico de bajo perfil.',
        stock: 12,
        status: 'disponible',
        precio: '85.000'
    },
    {
        nombre: 'Teclado 8',
        category_id: 4,
        descripcion: 'Teclado con touchpad integrado.',
        stock: 8,
        status: 'disponible',
        precio: '95.000'
    },
    {
        nombre: 'Teclado 9',
        category_id: 4,
        descripcion: 'Teclado para Mac con diseño minimalista.',
        stock: 5,
        status: 'disponible',
        precio: '75.000'
    },
    {
        nombre: 'Teclado 10',
        category_id: 4,
        descripcion: 'Teclado flexible y enrollable.',
        stock: 3,
        status: 'disponible',
        precio: '50.000'
    },
    // Ratones
    {
        nombre: 'Ratón 1',
        category_id: 5,
        descripcion: 'Ratón ergonómico con diseño vertical.',
        stock: 25,
        status: 'disponible',
        precio: '60.000'
    },
    {
        nombre: 'Ratón 2',
        category_id: 5,
        descripcion: 'Ratón gaming con sensor óptico de alta precisión.',
        stock: 20,
        status: 'disponible',
        precio: '90.000'
    },
    {
        nombre: 'Ratón 3',
        category_id: 5,
        descripcion: 'Ratón inalámbrico con batería recargable.',
        stock: 15,
        status: 'disponible',
        precio: '70.000'
    },
    {
        nombre: 'Ratón 4',
        category_id: 5,
        descripcion: 'Ratón óptico estándar con cable USB.',
        stock: 0,
        status: 'disponible',
        precio: '30.000'
    },
    {
        nombre: 'Ratón 5',
        category_id: 5,
        descripcion: 'Ratón de viaje compacto.',
        stock: 30,
        status: 'disponible',
        precio: '40.000'
    },
    {
        nombre: 'Ratón 6',
        category_id: 5,
        descripcion: 'Ratón con botones personalizables.',
        stock: 18,
        status: 'disponible',
        precio: '80.000'
    },
    {
        nombre: 'Ratón 7',
        category_id: 5,
        descripcion: 'Ratón silencioso para oficina.',
        stock: 12,
        status: 'disponible',
        precio: '50.000'
    },
    {
        nombre: 'Ratón 8',
        category_id: 5,
        descripcion: 'Ratón para Mac con diseño elegante.',
        stock: 10,
        status: 'disponible',
        precio: '70.000'
    },
    {
        nombre: 'Ratón 9',
        category_id: 5,
        descripcion: 'Ratón económico para estudiantes.',
        stock: 40,
        status: 'disponible',
        precio: '25.000'
    },
    {
        nombre: 'Ratón 10',
        category_id: 5,
        descripcion: 'Ratón vertical para evitar tensión en la muñeca.',
        stock: 9,
        status: 'disponible',
        precio: '65.000'
    },
    // Impresoras
    {
        nombre: 'Impresora 1',
        category_id: 6,
        descripcion: 'Impresora láser monocromática.',
        stock: 8,
        status: 'disponible',
        precio: '120.000'
    },
    {
        nombre: 'Impresora 2',
        category_id: 6,
        descripcion: 'Impresora inkjet multifuncional.',
        stock: 0,
        status: 'disponible',
        precio: '150.000'
    },
    {
        nombre: 'Impresora 3',
        category_id: 6,
        descripcion: 'Impresora térmica para etiquetas.',
        stock: 3,
        status: 'disponible',
        precio: '180.000'
    },
    // Routers
    {
        nombre: 'Router 1',
        category_id: 7,
        descripcion: 'Router Wi-Fi N con 4 puertos Ethernet.',
        stock: 5,
        status: 'disponible',
        precio: '50.000'
    },
    {
        nombre: 'Router 2',
        category_id: 7,
        descripcion: 'Router Wi-Fi AC con doble banda.',
        stock: 8,
        status: 'disponible',
        precio: '90.000'
    },
    {
        nombre: 'Router 3',
        category_id: 7,
        descripcion: 'Router de malla para cobertura completa.',
        stock: 12,
        status: 'disponible',
        precio: '150.000'
    },
    {
        nombre: 'Router 4',
        category_id: 7,
        descripcion: 'Router Wi-Fi 6 con alta velocidad.',
        stock: 7,
        status: 'disponible',
        precio: '200.000'
    },
    {
        nombre: 'Router 5',
        category_id: 7,
        descripcion: 'Router para gamers con QoS.',
        stock: 10,
        status: 'disponible',
        precio: '130.000'
    },
    {
        nombre: 'Router 6',
        category_id: 7,
        descripcion: 'Router compacto para uso doméstico.',
        stock: 25,
        status: 'disponible',
        precio: '40.000'
    },
];
export default productos