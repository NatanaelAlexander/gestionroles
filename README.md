First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Descripción: 

La app comenzó como una herramienta para la gestión de roles, pero ha evolucionado para incluir la gestión de inventario. Todos los usuarios tendrán un rol específico que determinará su acceso a diferentes funcionalidades dentro de la aplicación.

Roles de usuario:

-Administrador: Tiene acceso completo a todas las funcionalidades de la app, incluyendo la gestión de usuarios y productos.
-Visita: Puede ver los productos disponibles en el inventario y editar su información personal, como su perfil y contraseña.
-Bodeguero: Tiene acceso a todas las funcionalidades relacionadas con la gestión de productos, incluyendo la creación, edición y eliminación de productos. También puede editar su información personal.

Funcionalidades de la app:

Login: Sistema de autenticación para permitir a los usuarios acceder a la app según su rol.
Gestión de usuarios:
Crear un nuevo usuario.
Editar un usuario.
Eliminar un usuario.
Cambiar contraseña.
Listar usuarios.
Listar usuarios por rol.
Listar usuarios por estado.
Gestión de inventario:
Crear un nuevo producto.
Editar un producto existente.
Eliminar un producto.
Listar productos disponibles en el inventario.
Seguridad: Implementación de validaciones y permisos basados en roles para asegurar que cada usuario acceda solo a las funcionalidades correspondientes a su rol.
Notificaciones: Sistema para alertar a los usuarios sobre cambios importantes, como la creación de nuevos usuarios, eliminación de usuarios o modificaciones en el inventario.
Optimización y Búsqueda: Funcionalidades avanzadas para filtrar y buscar usuarios y productos dentro de la app.