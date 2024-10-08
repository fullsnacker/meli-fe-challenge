<a name="readme-top"></a>

# Challenge de Mercadolibre - Listado y detalle de productos

<img src="https://i.postimg.cc/8cvGtkRt/Screenshot-from-2024-10-08-15-05-50.png" alt="Logo">
<br /><br />

<div align="center">
  <p align="center">
    <a href="https://meli-fe-challenge-client.vercel.app/">Ver Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li><a href="#acerca-del-proyecto">Acerca del Proyecto</a></li>
    <li> <a href="#descripción-de-la-aplicación">Descripción De La Aplicación</a></li>
    <li><a href="#características-de-la-aplicación">Características De La Aplicación</a></li>
    <li><a href="#tecnologías-utilizadas">Tecnologías Utilizadas</a></li>
    <li><a href="#meli-api">MELI API</a></li>
    <li><a href="#requisitos-del-sistema">Requisitos Del Sistema</a></li>
    <li><a href="#instalación">Instalación</a></li>
    <li><a href="#variables-de-entorno">Variables de Entorno</a></li>
    <li><a href="#ejecución-en-modo-desarrollo">Ejecución En Modo Desarrollo</a></li>
    <li><a href="#probar-la-aplicación">Probar La Aplicación</a></li>
    <li><a href="#dependencias">Dependencias</a></li>
    <li><a href="#urls-productivas">URLs Productivas</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>

## Acerca del Proyecto

Este desarrollo surgio a modo de "challenge" o desafio para trabajar en MercadoLibre y fue desarrollado por Juan Manuel Garcia en Octubre de 2024.

La consigna del "challenge" se encuentra en este repositorio, en la carpeta "assignment".

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Descripción De La Aplicación

Esta aplicación es un listado de productos de **MercadoLibre**, la plataforma mas grande de ecommerce de Argentina entre otros paises. La app permite buscar productos mediante la API pública de MercadoLibre y mostrar los resultados en un formato atractivo. La arquitectura de la aplicación es **Fullstack**, con un proyecto front-end (client) desarrollado en **React.js** manejando los estilos con **Sass** y un proyecto back-end (server) en **Node.js** utilizando **Express.js**.

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Características De La Aplicación

- Búsqueda de productos a través de la API de MercadoLibre.
- Listado de productos con información detallada (nombre, precio, imagen, etc.).
- Responsive Design para una experiencia óptima en dispositivos móviles y de escritorio.
- Arquitectura de cliente-servidor bien definida y organizada.

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Tecnologías Utilizadas

### Front-end

- **React.js**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a nuestro servidor.
- **React Router**: Para manejar las rutas y la navegación.
- **Sass**: Para estilos basados en componentes.
- **Jest**: Para realizar pruebas unitarias de la aplicación.

### Back-end

- **Node.js**: Entorno de ejecución de JavaScript del lado del servidor.
- **Express.js**: Framework web para Node.js que simplifica la creación de API RESTful.
- **Axios**: Para realizar solicitudes HTTP a la API de MercadoLibre.
- **Cors**: Para habilitar el intercambio de recursos de origen cruzado entre el cliente y el servidor.
- **Jest**: Para realizar pruebas unitarias de la aplicación.

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## MELI API

- **MercadoLibre API**: La aplicación consume la API pública de MercadoLibre para obtener información de los productos.

### Los end-point utilizados de la api fueron:

1. Brinda una lista de productos en base a una query:
   ```sh
   https://api.mercadolibre.com/sites/MLA/search?q=​:query
   ```
2. Brinda información de un producto en base a su id:
   ```sh
   https://api.mercadolibre.com/items/​:id
   ```
3. Brinda texto de descripción de un producto en base a su id:
   ```sh
   https://api.mercadolibre.com/items/​:id​/description
   ```
4. Brinda información de una categoria en base a su id:

   ```sh
   https://api.mercadolibre.com/category/​:id
   ```

   <p align="right">(<a href="#readme-top">Subir</a>)</p>

## Requisitos Del Sistema

Para correr esta aplicación, necesitarás tener instalados los siguientes componentes:

- **Node.js** (Versión utilizada para el desarrollo v20.12.2)
- **npm** (Versión utilizada para el desarrollo 10.5.0)
- **Git**

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Instalación

Sigue estos pasos para poner en funcionamiento el proyecto en tu máquina local.

1. **Clonar el repositorio:**

```bash
git clone https://github.com/fullsnacker/meli-fe-challenge.git

o

git clone git@github.com:fullsnacker/meli-fe-challenge.git
```

2. **Instalar dependencias para el servidor (back-end)**

```bash
cd server
npm install
```

3. **Instalar dependencias para el cliente (front-end)**

```bash
cd client
npm install
```

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Variables de Entorno

Tanto el proyecto client como server cuentan con variables de entorno que se pueden configurar. A modo de simplificar, se encuentran en las carpetas de cada proyecto un archivo .env.example con una configuracion basica.

### .env de client

```bash
VITE_BASE_URL=XXXXXXXXXXXXXXX
```

### .env de server

```bash
PORT = XXXX
MELI_API_URL = 'XXXXXXXXXXXXXXXXXXXXXX'
```

En caso de que no haya un archivo de variables de entorno, se tomaran los siguientes datos

### client

```bash
VITE_BASE_URL=http://localhost:3000
```

### server

```bash
PORT = 3000
MELI_API_URL = 'https://api.mercadolibre.com'
```

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Ejecución En Modo Desarrollo

1. **Iniciar el servidor:**

```bash
  cd server
  npm run dev
```

**Se mostrara en consola un mensaje informando que el servidor se encuentra activo.**

2. **Server Endpoints**
   Pueden probarse los endpoints de nuestro servidor con Postman o una herramienta similar:

```bash
GET http://localhost:3000/api/items?q=:query

// Retorna una lista de productos basados en una consulta de búsqueda.

// Por ejemplo: GET http://localhost:3000/api/items?q=iphone
```

```bash
GET http://localhost:3000/api/items/:id

// Retorna información de un producto en base a su id.

// Por ejemplo: GET http://localhost:3000/api/items/MLA1928216710
```

2. **Iniciar el cliente:**

```bash
   cd client
   npm run dev
```

3. **Ingresar a aplicación:**

```bash
http://localhost:5173/
```

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Probar La Aplicación

Tanto el cliente como servidor cuentan con pruebas unitarias para sus funcionalidades. Las mismas fueron realizadas con Jest.

Para probar la app:

1. **Test del cliente:**

```bash
   cd client
   npm run test
```

2. **Test del servidor:**

```bash
   cd server
   npm run test
```

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Dependencias

| Client-side                      | Server-side                |
| -------------------------------- | -------------------------- |
| "axios": "^1.7.7",               | "axios": "^1.7.7",         |
| "eslint-plugin-jest": "^28.8.3", | "cookie-parser": "~1.4.4", |
| "history": "^5.3.0",             | "debug": "~2.6.9",         |
| "prop-types": "^15.8.1",         | "dotenv": "^16.4.5",       |
| "react": "^18.3.1",              | "express": "~4.16.1",      |
| "react-dom": "^18.3.1",          | "jest": "^29.7.0",         |
| "react-helmet": "^6.1.0",        | "module-alias": "^2.2.2",  |
| "react-router-dom": "^6.26.2",   | "morgan": "~1.9.1"         |
| "sass": "^1.79.4"                |

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## URLs Productivas

**Cliente**

```bash
https://meli-fe-challenge-client.vercel.app/
```

**Servidor**

```bash
https://meli-fe-challenge-server.vercel.app/
```

<p align="right">(<a href="#readme-top">Subir</a>)</p>

## Contacto

Fullsnacker - fullsnacker@gmail.com

Project Link: [https://github.com/fullsnacker/meli-fe-challenge](https://github.com/fullsnacker/meli-fe-challenge)

<p align="right">(<a href="#readme-top">Ir al inicio</a>)</p>
