# Todo App - **DGamerStudio**

Este proyecto es una aplicación frontend desarrollada en [React](https://es.react.dev/) que permite realizar operaciones CRUD _(Crear, Leer, Actualizar y Eliminar)_ sobre una lista de tareas. Utiliza [PrimeReact](https://primereact.org/) para la interfaz y se conecta con una API REST proporcionada usando [Axios](https://axios-http.com/docs/intro).

Además, incluye una funcionalidad adicional de **filtrado de tareas** que permite al usuario ver todas las tareas, solo las completadas o solo las pendientes.

## **Índice**

1. [Objetivo](#objetivo)
2. [Tecnologías Utilizadas](#tecnologías-usadas)
3. [Requisitos Previos](#requisitos-previos)
4. [Configuración del Proyecto](#configuración-del-proyecto)
5. [Instrucciones de Uso](#instrucciones-de-uso)
6. [Funciones Implementadas](#funciones-implementadas)
7. [Extras](#extras)

## **Objetivo**

Esta prueba técnica está diseñada por **DGamerStudio** y tiene como finalidad evaluar las habilidades en el desarrollo de aplicaciones frontend. El objetivo es construir una aplicación funcional para la gestión de tareas con las siguientes capacidades:

- Mostrar una lista de tareas.
- Crear una nueva tarea.
- Editar una tarea existente.
- Eliminar una tarea.
- Marcar una tarea como completada o pendiente.
- _**[Extra]**_ Filtrar las tareas por estado: **todas**, **completadas** o **pendientes**.

## **Tecnologías Usadas**

- **React**: Framework principal para la creación del frontend.
- **PrimeReact**: Biblioteca de componentes UI para un diseño moderno y funcional.
- **Axios**: Cliente HTTP para la comunicación con la API.
- **Vite**: Herramienta para la configuración y desarrollo del proyecto.
- **dotenv**: Gestión de variables de entorno.

## **Requisitos Previos**

Es importante que te asegures de tener instalado lo siguiente en tu máquina para correr este proyecto:

- Node.js (v16 o superior)
- npm, yarn o pnpm, el gestor de paquetes que prefieras. 😊

## **Configuración del Proyecto**

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/vandriodd/dgamers-frontend.git
   cd dgamers-frontend
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   # o
   yarn install
   # o
   pnpm install
   ```

3. **Configura las variables de entorno:**

   - Crea un archivo `.env` en la _raíz_ del proyecto.
   - Agrega la siguiente línea:
     ```plaintext
     VITE_PUBLIC_TOKEN=el_token_de_autorizacion
     ```
     Esto configurará el token de autorización necesario para las solicitudes a la API.

> [!IMPORTANT]
> Sin este token, las solicitudes van a ser **rechazadas**.

4. **Inicia el servidor de desarrollo:**

   ```bash
   npm run dev
   # o
   yarn dev
   # o
   pnpm run dev
   ```

5. Accede a la aplicación en [http://localhost:5173](http://localhost:5173). 🚀

## **Instrucciones de Uso**

- **Listar Tareas**: En la página principal, se mostrará una lista de tareas recuperadas desde la API.
- **Crear una Tarea**: Usa el formulario disponible para agregar una nueva tarea.
- **Editar una Tarea**: Haz clic en el botón de editar de una tarea para modificar su título, descripción o estado.
- **Eliminar una Tarea**: Haz clic en el botón de eliminar para borrar una tarea.
- **Cambiar Estado**: Marca una tarea como completada o pendiente utilizando un interruptor (toggle) en la lista.
- **Filtrar Tareas**: Utiliza los botones de selección (radio buttons) para filtrar las tareas y mostrar:
  - **Todas**: Muestra todas las tareas sin importar su estado.
  - **Completadas**: Muestra solo las tareas marcadas como completadas.
  - **Pendientes**: Muestra solo las tareas marcadas como pendientes.

## **Funciones Implementadas**

### 1. **Mostrar la Lista de Tareas**

- Petición GET a `/tasks` para obtener todas las tareas.
- Renderización dinámica utilizando componentes de PrimeReact.

### 2. **Crear una Nueva Tarea**

- Petición POST a `/tasks` con los campos `title` _(requerido)_ y `description` _(opcional)_.

### 3. **Editar una Tarea**

- Petición PUT a `/tasks/{id}` con los campos actualizados (`title` _(requerido)_, `description` _(opcional)_, `completed`).

### 4. **Eliminar una Tarea**

- Petición DELETE a `/tasks/{id}` para eliminar una tarea específica.

### 5. **Marcar como Completada o Pendiente**

- Actualización del campo `completed` a través de una acción de edición.

### 6. **Filtrar las Tareas**

- Implementación de un sistema de filtros basado en botones de selección _(radio buttons)_.
- Actualización dinámica de la lista mostrada según el filtro seleccionado:
  - **Todas**: Muestra todas las tareas recuperadas de la API.
  - **Completadas**: Filtra las tareas cuyo campo `completed` es `true`.
  - **Pendientes**: Filtra las tareas cuyo campo `completed` es `false`.

## **Extras**

Si gustan, pueden ver un poco de lo que fue el proceso creativo para diseñar la interfaz de la aplicación en [Figma](https://www.figma.com/design/QSEG02NF96xd2i0ZCrloqQ/DGamerStudio-Frontend?node-id=0-1&t=dditpR3HvAVATVzn-1).
