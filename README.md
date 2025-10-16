<div align="center">
  <img width="1200" height="475" alt="Banner de Cartagena Entertainment" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cartagena Entertainment - Rent and Pleasure

**Cartagena Entertainment** es una aplicación web interactiva diseñada para mostrar y gestionar una exclusiva oferta de servicios de lujo en Cartagena de Indias y el Caribe. El proyecto funciona como un escaparate digital para el alquiler de yates, mansiones, vehículos de alta gama y la organización de experiencias a medida.

El objetivo principal es ofrecer a los usuarios una plataforma visualmente atractiva e intuitiva donde puedan explorar, descubrir y solicitar servicios de alto standing, reflejando siempre una imagen de exclusividad, confort y aventura.

##  Demo y Vistas Previas

La aplicación presenta los servicios y destinos con imágenes de alta calidad para captar la atención del usuario. A continuación, algunos ejemplos visuales extraídos de la plataforma:

| Yates de Lujo | Mansiones Exclusivas | Cenas Románticas |
| :---: | :---: | :---: |
| <img src="https://images.pexels.com/photos/163236/luxury-yacht-yacht-yachting-yacht-charter-163236.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Yate de Lujo" /> | <img src="https://images.pexels.com/photos/259580/pexels-photo-259580.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Mansión de Lujo" /> | <img src="https://images.pexels.com/photos/3779693/pexels-photo-3779693.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Cena Romántica en Yate" /> |

## ✨ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web modernas para garantizar una experiencia de usuario fluida y un desarrollo eficiente.

- **Framework Frontend:** [React](https://react.dev/)
- **Bundler y Entorno de Desarrollo:** [Vite](https://vitejs.dev/)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
- **Estilos CSS:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconografía:** [Font Awesome](https://fontawesome.com/)
- **Fuentes:** [Google Fonts (Poppins)](https://fonts.google.com/)

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado el siguiente software en tu máquina:

- [Node.js](https://nodejs.org/) (se recomienda la versión 18.x o superior)
- [npm](https://www.npmjs.com/) (generalmente se instala con Node.js)

## 🚀 Instalación y Ejecución Local

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/cartagena-entertainment---liquid-glass.git
    cd cartagena-entertainment---liquid-glass
    ```

2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**
    -   Crea un archivo `.env` en la raíz del proyecto.
    -   Añade la siguiente variable. Esta clave es necesaria para habilitar funcionalidades relacionadas con la IA de Gemini (si aplica).
    ```env
    GEMINI_API_KEY="TU_API_KEY_AQUÍ"
    ```

4.  **Ejecuta la aplicación en modo de desarrollo:**
    El servidor se iniciará en `http://localhost:3000`.
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

La estructura de carpetas está organizada para mantener una clara separación de responsabilidades:

```
/
├── components/         # Componentes reutilizables (Header, Footer, etc.)
├── data/               # Archivos de datos estáticos (database.ts)
├── pages/              # Componentes que representan las páginas (HomePage, ServicesPage)
├── public/             # Archivos estáticos (imágenes, videos)
├── App.tsx             # Componente principal y configuración de rutas
├── index.tsx           # Punto de entrada de la aplicación React
├── vite.config.ts      # Configuración del entorno Vite
├── package.json        # Dependencias y scripts del proyecto
└── README.md           # Esta documentación
```

## ⚙️ Configuración del Entorno

El proyecto utiliza variables de entorno para gestionar claves de API y otros datos sensibles.

-   `GEMINI_API_KEY`: Esta clave es utilizada para conectar con los servicios de IA de Google Gemini. Es fundamental para cualquier funcionalidad que dependa de esta API. Sin ella, ciertas características podrían no funcionar.

## 🌐 Despliegue

Para desplegar esta aplicación en producción, puedes utilizar plataformas como Vercel, Netlify o tu propio servidor. El proceso general es el siguiente:

1.  **Construye la aplicación:**
    Este comando generará una carpeta `dist` con los archivos estáticos optimizados.
    ```bash
    npm run build
    ```

2.  **Despliega la carpeta `dist`:**
    -   **Vercel/Netlify:** Conecta tu repositorio de Git a la plataforma. Automáticamente detectarán que es un proyecto Vite, ejecutarán `npm run build` y desplegarán el contenido de la carpeta `dist`. No olvides configurar las variables de entorno en el panel de tu proveedor de hosting.
    -   **Servidor Propio:** Sube el contenido de la carpeta `dist` a tu servidor y configúralo para que sirva el `index.html` principal.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

*(Nota: Se recomienda añadir un archivo `LICENSE` con el texto completo de la licencia MIT).*

## 👨‍💻 Autor y Contacto

Desarrollado por **[Tu Nombre]**.

-   **GitHub:** [tu-usuario](https://github.com/tu-usuario)
-   **Sitio Web:** [tu-sitio-web.com](https://tu-sitio-web.com)
-   **Correo:** [tu-correo@ejemplo.com](mailto:tu-correo@ejemplo.com)