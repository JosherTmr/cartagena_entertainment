<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cartagena Entertainment - Rent and Pleasure

Este proyecto es una aplicación web de lujo para "Cartagena Entertainment - Rent and Pleasure", diseñada para mostrar sus exclusivos servicios de alquiler de yates, propiedades y experiencias en el Caribe.

## Visión General

La aplicación está construida como una Single Page Application (SPA) utilizando un stack moderno de tecnologías de frontend. Presenta un diseño elegante y dinámico, con animaciones y un fondo líquido interactivo para reflejar la marca de lujo de la empresa. Toda la información, desde los servicios hasta los destinos, se gestiona localmente a través de una base de datos simulada en TypeScript, lo que facilita las actualizaciones y el mantenimiento.

## Stack Tecnológico

*   **Lenguaje Base:** TypeScript
*   **Framework:** React v19
*   **Bundler y Entorno de Desarrollo:** Vite
*   **Enrutamiento:** React Router DOM v7
*   **Estilos:** TailwindCSS (implícito por las clases `className`)

## Estructura del Proyecto

El código fuente está organizado en los siguientes directorios clave:

*   `components/`: Contiene componentes de React reutilizables que conforman la interfaz de usuario, como el encabezado (`Header`), el pie de página (`Footer`), paneles de vidrio (`GlassPanel`) y tarjetas de servicio (`ServiceCard`).
*   `data/`: Alberga la "base de datos" de la aplicación. El archivo `database.ts` exporta todos los datos necesarios, como información de la empresa, servicios, y destinos.
*   `pages/`: Contiene los componentes de React que actúan como páginas completas de la aplicación (ej. `HomePage`, `ServicesPage`). Cada archivo corresponde a una ruta principal.
*   `App.tsx`: Es el componente raíz que define la estructura general de la aplicación, incluyendo el layout y las rutas de navegación.
*   `index.tsx`: Es el punto de entrada de la aplicación, donde se monta el componente `App` en el DOM.

## Cómo Ejecutar el Proyecto

Sigue estos pasos para configurar y ejecutar la aplicación en tu entorno local:

1.  **Clonar el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_DIRECTORIO>
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js instalado. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    Este comando iniciará la aplicación en modo de desarrollo con hot-reloading.
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que Vite asigne).

## Cómo Agregar una Nueva Página

Para agregar una nueva página a la aplicación (por ejemplo, una página de "Blog"), sigue estos pasos:

1.  **Crear el Componente de la Página:**
    En el directorio `pages/`, crea un nuevo archivo `.tsx` para tu página (ej. `BlogPage.tsx`). Diseña tu componente de página, importando los datos y componentes que necesites.
    ```typescript
    // pages/BlogPage.tsx
    import React from 'react';

    const BlogPage: React.FC = () => {
      return (
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center">Nuestro Blog</h1>
          {/* Contenido del blog aquí */}
        </div>
      );
    };

    export default BlogPage;
    ```

2.  **Agregar la Ruta en `App.tsx`:**
    Importa tu nuevo componente de página en `App.tsx` y añade una nueva ruta dentro del componente `<Routes>`.
    ```typescript
    // App.tsx
    import BlogPage from './pages/BlogPage'; // 1. Importa la página

    const App: React.FC = () => {
        return (
            <Router>
                {/* ... */}
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/destinations" element={<DestinationsPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/blog" element={<BlogPage />} /> {/* 2. Añade la ruta */}
                    </Routes>
                </main>
                {/* ... */}
            </Router>
        );
    };
    ```

3.  **Añadir el Enlace de Navegación en `Header.tsx`:**
    Para que los usuarios puedan acceder a tu nueva página, agrégala al menú de navegación en `components/Header.tsx`. Deberás añadir un `NavLink` tanto en la navegación de escritorio como en la móvil.
    ```typescript
    // components/Header.tsx
    // ...
    <nav className="hidden md:flex items-center space-x-8">
        <NavLink to="/" ...>Inicio</NavLink>
        <NavLink to="/services" ...>Servicios</NavLink>
        <NavLink to="/destinations" ...>Destinos</NavLink>
        <NavLink to="/about" ...>Nosotros</NavLink>
        <NavLink to="/blog" className={({ isActive }) => ...}>Blog</NavLink> {/* 3. Añade el enlace */}
    </nav>
    // ...
    {isMenuOpen && (
        <div className="md:hidden ...">
            <nav className="flex flex-col ...">
                <NavLink to="/" ...>Inicio</NavLink>
                <NavLink to="/services" ...>Servicios</NavLink>
                <NavLink to="/destinations" ...>Destinos</NavLink>
                <NavLink to="/about" ...>Nosotros</NavLink>
                <NavLink to="/blog" ... onClick={() => ...}>Blog</NavLink> {/* 4. Añade el enlace móvil */}
            </nav>
        </div>
    )}
    // ...
    ```

¡Y eso es todo! La nueva página estará completamente integrada en la aplicación.