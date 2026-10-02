
# NovaMarketAPI

API REST desarrollada para el proyecto NovaMarket, orientada a la gestión de productos mediante operaciones CRUD.

## 1. Descripción del proyecto

NovaMarketAPI permite consultar, registrar, actualizar y eliminar productos almacenados en una base de datos MySQL.

El servicio se desarrolló con Node.js y Express, utilizando solicitudes HTTP y respuestas en formato JSON.

## 2. Tecnologías utilizadas

- Node.js
- Express
- MySQL
- mysql2
- dotenv
- cors
- Nodemon
- Postman

## 3. Requisitos previos

Para ejecutar el proyecto se necesita:

- Node.js instalado.
- MySQL Server instalado y en ejecución.
- La base de datos NovaMarket creada.
- Visual Studio Code o un editor compatible.
- Postman para probar los servicios REST.

## 4. Instalación

Clonar o descargar el repositorio del proyecto.

Abrir una terminal dentro de la carpeta NovaMarketAPI y ejecutar:

```bash
npm install
```

Este comando instala las dependencias definidas en package.json.

## 5. Configuración de la base de datos

Crear un archivo llamado .env en la carpeta principal del proyecto.

Configurar las variables de conexión:

```dotenv
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=ESCRIBE_AQUI_TU_CLAVE
DB_NAME=NovaMarket
```

Reemplazar ESCRIBE_AQUI_TU_CLAVE por la contraseña del usuario MySQL utilizado en el entorno local.

No compartir ni publicar el archivo .env.

## 6. Ejecución del servidor

Para iniciar el servidor en modo desarrollo:

```bash
npm run dev
```

Para iniciar el servidor normalmente:

```bash
npm start
```

El servidor estará disponible en:

http://localhost:3000

## 7. Endpoints disponibles

| Método | Endpoint | Función |
|--------|----------|---------|
| GET | / | Consultar el estado del servidor |
| GET | /api/health | Comprobar la conexión con MySQL |
| GET | /api/productos | Consultar todos los productos |
| GET | /api/productos/:id | Consultar un producto por ID |
| POST | /api/productos | Registrar un producto |
| PUT | /api/productos/:id | Actualizar un producto |
| DELETE | /api/productos/:id | Eliminar un producto |

## 8. Pruebas

Los servicios se prueban utilizando Postman.

Las operaciones GET, POST, PUT y DELETE permiten comprobar la consulta, creación, actualización y eliminación de productos.

Las capturas de las pruebas se encuentran en la carpeta evidencias, cuando esta se haya creado y se hayan guardado las imágenes correspondientes.

## 9. Documentación técnica

La documentación detallada de los endpoints, validaciones y códigos de respuesta se encuentra en:

DOCUMENTACION_API.md

## 10. Estructura del proyecto

```text
NovaMarketAPI/
├── config/
│   └── db.js
├── controllers/
│   └── productos.controller.js
├── routes/
│   └── productos.routes.js
├── middlewares/
├── evidencias/
├── server.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── DOCUMENTACION_API.md
└── README.md
```

## 11. Autor

Jose David Cajica Sanchez

Proyecto académico: NovaMarket.
