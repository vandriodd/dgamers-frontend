# Todo App - **DGamerStudio** 📝

![mockup](https://github.com/user-attachments/assets/5e1a7481-9171-4cfc-a9ec-d3bcb38936c9)

¡Bienvenido/a a **Todo App**! 😊 Una aplicación frontend desarrollada en [React](https://es.react.dev/) para gestionar tareas con estilo. Permite realizar operaciones CRUD _(Crear, Leer, Actualizar y Eliminar)_, cambiar el estado de las tareas, y filtrar según su estado. Todo esto acompañado de una interfaz moderna gracias a [PrimeReact](https://primereact.org/). 💻🎉

## **Índice** 📚

1. [Objetivo](#objetivo)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Configuración del Proyecto](#configuración-del-proyecto)
5. [Funciones Implementadas](#funciones-implementadas)
6. [Extras](#extras)

## **Objetivo** 🎯

El objetivo de esta prueba técnica es demostrar habilidades en desarrollo frontend construyendo una app funcional y atractiva para gestionar tareas. Estas son las principales características:

- Mostrar una lista de tareas.
- Crear nuevas tareas.
- Editar tareas existentes.
- Eliminar tareas.
- Cambiar el estado de una tarea _(completada o pendiente)_ desde un **checkbox** en la tarjeta de cada tarea.  
- **Extra**: Filtrar tareas por estado: **todas**, **completadas** o **pendientes**.

## **Tecnologías Utilizadas** 🛠️

- **React**: Framework principal del frontend.
- **PrimeReact**: Biblioteca de componentes UI modernos.
- **Axios**: Cliente HTTP para conectar con la API REST.
- **Vite**: Herramienta rápida para desarrollo y configuración.
- **dotenv**: Gestión sencilla de variables de entorno.

## **Requisitos Previos** 🧰

Asegúrate de tener instalado:  
- **Node.js** (v16 o superior).
- Un gestor de paquetes como **npm**, **yarn** o **pnpm**.

## **Configuración del Proyecto** ⚙️

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/vandriodd/dgamers-frontend.git
   cd dgamers-frontend
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configurar las variables de entorno:**

   - Crear un archivo `.env` en la _raíz_ del proyecto.  
   - Agregar la línea:  

     ```plaintext
     VITE_PUBLIC_TOKEN=tu_token_de_autorizacion
     ```

> [!IMPORTANT]
> Sin este token, las solicitudes van a ser **rechazadas**.

4. **Iniciar el servidor de desarrollo:**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm run dev
   ```

5. 🌐 **Abrir la aplicación**: Visita [http://localhost:5173](http://localhost:5173) en tu navegador. ¡Y listo! 🎉  

## **Funciones Implementadas** 🔧

1. **Mostrar lista de tareas** 📋
   - Realiza una petición `GET` a `/tasks` para recuperar las tareas desde la API.
   - Las tareas se muestran dinámicamente utilizando componentes de PrimeReact.

2. **Crear tareas** ➕
   - Realiza una petición `POST` a `/tasks`.
   - Campos:
     - `title` _(requerido)_.
     - `description` _(opcional)_.

3. **Editar tareas** ✏️
   - Realiza una petición `PUT` a `/tasks/{id}` para actualizar los campos:
     - `title` _(requerido)_.
     - `description` _(opcional)_.

4. **Eliminar tareas** 🗑️
   - Realiza una petición `DELETE` a `/tasks/{id}`.

5. **Cambiar estado** 🔄
   - Cambia el estado _(completada o pendiente)_ utilizando un **checkbox** en la tarjeta de la tarea.

6. **Filtrar tareas** 🔍
   - Opciones:
     - **Todas**: Muestra todas las tareas.
     - **Completadas**: Muestra solo las tareas completadas.
     - **Pendientes**: Muestra solo las tareas pendientes.

## **Extras** 🌟

¿Te interesa ver el proceso creativo detrás de esta app? 🌈 Te invito a explorarlo en [Figma](https://www.figma.com/design/QSEG02NF96xd2i0ZCrloqQ/DGamerStudio-Frontend?node-id=0-1&t=dditpR3HvAVATVzn-1).
