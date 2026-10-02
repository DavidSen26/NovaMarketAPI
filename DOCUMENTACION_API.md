
# DOCUMENTACIÓN TÉCNICA DE LA API REST - NOVAMARKET

## 1. Información general

**Proyecto:** NovaMarket  
**Módulo:** API REST para gestión de productos  
**Tecnologías:** Node.js, Express, MySQL y JavaScript  
**Herramienta de pruebas:** Postman  
**Responsable:** Jose David Cajica Sanchez

## 2. Objetivo

Desarrollar una API REST que permita consultar, registrar, actualizar y eliminar productos de la base de datos del sistema NovaMarket.

La API facilita la comunicación entre aplicaciones cliente y el sistema de almacenamiento de información mediante solicitudes HTTP y respuestas en formato JSON.

## 3. Tecnologías utilizadas

- Node.js: entorno de ejecución de JavaScript.
- Express: framework utilizado para crear el servidor y las rutas REST.
- MySQL: sistema gestor de base de datos.
- mysql2: librería para conectar Node.js con MySQL.
- dotenv: permite gestionar variables de configuración.
- cors: permite configurar el acceso entre aplicaciones.
- Nodemon: facilita la ejecución durante el desarrollo.
- Postman: herramienta utilizada para probar los servicios.

## 4. Dirección base de la API

Durante las pruebas locales, la dirección base es:

http://localhost:3000

Los servicios de productos están disponibles en:

http://localhost:3000/api/productos

## 5. Servicios REST desarrollados

### 5.1 Consultar todos los productos

**Método HTTP:** GET

**Endpoint:**
GET /api/productos

**Descripción:**
Consulta los productos almacenados en la base de datos y devuelve una respuesta JSON con el total de registros y la información de los productos.

**Respuesta esperada:** 200 OK.

### 5.2 Consultar un producto por ID

**Método HTTP:** GET

**Endpoint:**
GET /api/productos/:id

**Descripción:**
Busca un producto utilizando su identificador.

**Respuesta esperada:** 200 OK si existe el producto; 404 Not Found si no existe.

### 5.3 Registrar un producto

**Método HTTP:** POST

**Endpoint:**
POST /api/productos

**Descripción:**
Registra un nuevo producto en la base de datos.

**Formato de entrada:** JSON.

Ejemplo de solicitud:

{
  "nombre_producto": "Producto de prueba API",
  "descripcion": "Registro temporal",
  "precio": 5000,
  "stock": 10,
  "imagen": null,
  "id_categoria": null,
  "id_promocion": null
}

**Respuesta esperada:** 201 Created cuando el registro es exitoso.

La categoría y la promoción deben cumplir las restricciones definidas en la base de datos.

### 5.4 Actualizar un producto

**Método HTTP:** PUT

**Endpoint:**
PUT /api/productos/:id

**Descripción:**
Modifica la información de un producto existente utilizando su identificador.

Ejemplo de solicitud:

{
  "nombre_producto": "Producto de prueba API actualizado",
  "descripcion": "Producto actualizado mediante PUT",
  "precio": 6500,
  "stock": 20,
  "imagen": null,
  "id_categoria": null,
  "id_promocion": null
}

**Respuesta esperada:** 200 OK cuando la actualización se realiza correctamente.

### 5.5 Eliminar un producto

**Método HTTP:** DELETE

**Endpoint:**
DELETE /api/productos/:id

**Descripción:**
Elimina un producto de la base de datos utilizando su identificador.

**Respuesta esperada:** 200 OK cuando el producto se elimina correctamente.

Si el producto no existe, el servicio devuelve 404 Not Found.

## 6. Validaciones implementadas

La API realiza las siguientes validaciones:

- El nombre del producto es obligatorio.
- El precio debe ser un número mayor o igual a cero.
- El stock debe ser un número entero mayor o igual a cero.
- El identificador debe ser un entero positivo.
- Se comprueba si el producto existe antes de actualizarlo o eliminarlo.
- Se utilizan consultas SQL parametrizadas para las operaciones de escritura y consulta por identificador.
- Los errores se gestionan mediante respuestas HTTP y mensajes JSON.

## 7. Códigos de respuesta HTTP

- 200 OK: operación realizada correctamente.
- 201 Created: producto registrado correctamente.
- 400 Bad Request: datos inválidos o solicitud incorrecta.
- 404 Not Found: producto o ruta no encontrados.
- 409 Conflict: conflicto con registros relacionados.
- 500 Internal Server Error: error interno del servidor.

## 8. Pruebas realizadas con Postman

Se realizaron pruebas de los servicios REST para verificar el funcionamiento de las operaciones CRUD.

- GET: consulta de todos los productos y consulta por identificador.
- POST: registro de un producto de prueba.
- PUT: actualización del producto de prueba y verificación de los cambios mediante GET.
- DELETE: eliminación del producto de prueba.
- GET posterior a DELETE: verificación de que el producto eliminado devuelve 404 Not Found.

Las capturas de pantalla de las pruebas se almacenan en la carpeta evidencias del proyecto.

## 9. Seguridad y configuración

Los datos de conexión a MySQL se configuran mediante variables de entorno almacenadas en el archivo .env.

El archivo .env no debe publicarse en el repositorio de código.

Las consultas SQL utilizan parámetros para evitar la concatenación directa de valores recibidos desde las solicitudes.

## 10. Conclusión

El desarrollo de la API REST de NovaMarket permite gestionar productos mediante los métodos HTTP GET, POST, PUT y DELETE.

Las pruebas realizadas con Postman permiten comprobar la comunicación entre el servidor Node.js, Express y la base de datos MySQL, así como la correcta respuesta de los servicios implementados.
