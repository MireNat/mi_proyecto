# API REST con Node.js y Sequelize

Este proyecto implementa una API REST utilizando Node.js, Express y Sequelize ORM para la gestión de clientes y pedidos.

## Características

- Arquitectura MVC adaptada para API REST
- Base de datos SQL (PostgreSQL) con Sequelize ORM
- Endpoints para operaciones CRUD de clientes y pedidos
- Relaciones entre entidades (Un cliente puede tener muchos pedidos)

## Requisitos previos

- Node.js (v14 o superior)
- PostgreSQL
- npm o yarn

## Estructura del proyecto

```
mi-proyecto-sequelize/
├── bin/
│   └── www                # Script de inicio del servidor
├── config/
│   └── config.json        # Configuración de la base de datos
├── controllers/           # Controladores para la lógica de negocio
│   ├── cliente.controller.js
│   └── pedido.controller.js
├── migrations/            # Migraciones de Sequelize
├── models/                # Modelos de datos
│   ├── cliente.js
│   ├── pedido.js
│   └── index.js
├── routes/                # Definición de rutas
│   ├── cliente.routes.js
│   └── pedido.routes.js
├── seeders/               # Datos de prueba (si los hay)
├── .gitignore
├── app.js                 # Configuración de Express
├── package.json
└── README.md
```

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mi-proyecto-sequelize.git
   cd mi-proyecto-sequelize
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos:
    - Edita el archivo `config/config.json` con tus credenciales de PostgreSQL
    - O crea un archivo `.env` en la raíz del proyecto (ver ejemplo en `.env.example`)

4. Ejecuta las migraciones:
   ```bash
   npx sequelize-cli db:migrate
   ```

## Ejecución

Para iniciar el servidor en modo desarrollo:

```bash
npm start
```

La API estará disponible en: http://localhost:3000

## API Endpoints

### Clientes

- `POST /api/clientes` - Crear un nuevo cliente
- `GET /api/clientes` - Obtener todos los clientes
- `GET /api/clientes/:id` - Obtener un cliente por ID
- `PUT /api/clientes/:id` - Actualizar un cliente
- `DELETE /api/clientes/:id` - Eliminar un cliente

### Pedidos

- `POST /api/pedidos` - Crear un nuevo pedido
- `GET /api/pedidos` - Obtener todos los pedidos
- `GET /api/pedidos/:id` - Obtener un pedido por ID
- `PUT /api/pedidos/:id` - Actualizar un pedido
- `DELETE /api/pedidos/:id` - Eliminar un pedido

## Ejemplos de uso

### Crear un cliente

```bash
curl -X POST http://localhost:3000/api/clientes \
  -H "Content-Type: application/json" \
  -d '{"nombre": "Juan Pérez", "correo": "juan@example.com"}'
```

### Crear un pedido

```bash
curl -X POST http://localhost:3000/api/pedidos \
  -H "Content-Type: application/json" \
  -d '{"fecha": "2023-04-15T12:00:00.000Z", "total": 150.50, "clienteId": 1}'
```

## Pruebas con Postman

Se incluye una colección de Postman para facilitar las pruebas:
1. Importa el archivo `Sequelize_API.postman_collection.json` en Postman
2. Ejecuta las solicitudes para probar los diferentes endpoints
