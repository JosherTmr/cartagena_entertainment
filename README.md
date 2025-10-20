# Cartagena Entertainment - Rent and Pleasure

**Cartagena Entertainment** es una aplicación web interactiva diseñada para mostrar y gestionar una exclusiva oferta de servicios de lujo en Cartagena de Indias y el Caribe. El proyecto funciona como un escaparate digital para el alquiler de yates, mansiones, vehículos de alta gama y la organización de experiencias a medida.

El objetivo principal es ofrecer a los usuarios una plataforma visualmente atractiva e intuitiva donde puedan explorar, descubrir y solicitar servicios de alto standing, reflejando siempre una imagen de exclusividad, confort y aventura.

## 🎨 Concepto Principal: La Estética "Liquid Glass"

La identidad visual del sitio se basa en un concepto que llamamos **"Liquid Glass"**. Esta no es una tecnología específica, sino una filosofía de diseño que busca crear una interfaz moderna, fluida y con una sensación de profundidad. Se inspira en los principios del "glassmorphism".

Sus características principales son:

-   **Superficies Translúcidas:** Los paneles y contenedores tienen un fondo semitransparente (`rgba`) que permite vislumbrar el fondo, creando capas visuales.
-   **Desenfoque de Fondo (Frosted Glass):** Utilizamos el efecto `backdrop-blur` para desenfocar lo que hay detrás de los paneles, similar a un cristal esmerilado. Esto mejora la legibilidad y refuerza la sensación de profundidad.
-   **Bordes Sutiles:** Un borde delgado y ligeramente iluminado (`border-color: rgba(255, 255, 255, 0.1)`) define los paneles sin romper la fluidez del diseño.
-   **Animaciones Fluidas:** Las microinteracciones, transiciones y animaciones están diseñadas para ser suaves y orgánicas, imitando el movimiento de un líquido.

El componente `components/GlassPanel.tsx` es la implementación central de esta estética, sirviendo como base para la mayoría de los elementos de la interfaz.

### 🎨 Paleta de Colores

La identidad visual del proyecto se apoya en una paleta de colores inspirada en los tonos del Caribe: desde las aguas profundas hasta los verdes vibrantes de su vegetación.

| Color          | Hex       | Variable CSS           | Rol Principal                               |
|----------------|-----------|------------------------|---------------------------------------------|
| Licorice       | `#211916` | `--color-navy`         | Color de fondo principal, oscuro y elegante.|
| Keppel         | `#59b4a3` | `--color-keppel`       | Acento primario para botones y elementos UI.|
| Mint           | `#57aa80` | `--color-keppel-light` | Estado hover, acentos secundarios.          |
| Celadon        | `#adedcb` | N/A                    | Toques de luz, elementos muy destacados.    |
| Hooker's Green | `#486b65` | N/A                    | Tonos de acento más oscuros y sobrios.      |

### 🎨 Tipografía

La tipografía juega un papel crucial en la identidad visual del sitio, combinando elegancia con legibilidad.

| Fuente                    | Variable CSS       | Rol Principal                                                                 |
|---------------------------|--------------------|-------------------------------------------------------------------------------|
| Buckwheat TCSans-Painted  | `--font-display`   | Títulos principales y encabezados (`<h1>`, `<h2>`). Aporta un carácter único y lujoso. |
| Poppins                   | `font-sans`        | Párrafos, texto de UI y contenido general. Garantiza una legibilidad excelente. |

## ✨ Tecnologías Utilizadas

Este proyecto fue construido utilizando tecnologías web modernas para garantizar una experiencia de usuario fluida y un desarrollo eficiente.

-   **Framework Frontend:** [React](https://react.dev/) (v19)
-   **Bundler y Entorno de Desarrollo:** [Vite](https://vitejs.dev/)
-   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
-   **Enrutamiento:** [React Router DOM](https://reactrouter.com/)
-   **Estilos CSS:** [Tailwind CSS](https://tailwindcss.com/) para un diseño "utility-first" rápido y responsivo.
-   **Iconografía:** [Font Awesome](https://fontawesome.com/)
-   **Fuentes:** [Google Fonts (Poppins)](https://fonts.google.com/) y fuentes personalizadas.

## 🚀 Guía de Inicio Rápido

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Requisitos Previos
-   [Node.js](https://nodejs.org/) (versión 20.x o superior)
-   [npm](https://www.npmjs.com/) (se instala con Node.js)

### Instalación
1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/cartagena-entertainment---liquid-glass.git
    cd cartagena-entertainment---liquid-glass
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    ```

3.  **Configura las variables de entorno (Opcional):**
    -   Crea un archivo `.env` en la raíz del proyecto.
    -   Si el proyecto evoluciona para usar APIs externas (como Gemini), aquí se añadirían las claves:
    ```env
    VITE_GEMINI_API_KEY="TU_API_KEY_AQUÍ"
    ```

4.  **Ejecuta la aplicación:**
    El servidor de desarrollo se iniciará en `http://localhost:3000`.
    ```bash
    npm run dev
    ```

## 📂 Estructura del Proyecto

La estructura de carpetas está organizada para mantener una clara separación de responsabilidades:

```
/
├── public/             # Archivos estáticos (imágenes, videos, logo)
├── src/
│   ├── components/     # Componentes React reutilizables (Header, GlassPanel, etc.)
│   ├── data/           # Datos estáticos de la aplicación (database.ts)
│   ├── pages/          # Componentes que representan las páginas (HomePage, ServicesPage)
│   ├── App.tsx         # Componente raíz, configuración de rutas y layout principal
│   ├── index.css       # Estilos globales y variables CSS
│   └── index.tsx       # Punto de entrada de la aplicación React
├── index.html          # Plantilla HTML principal
├── package.json        # Dependencias y scripts del proyecto
├── tsconfig.json       # Configuración de TypeScript
└── vite.config.ts      # Configuración del entorno Vite
```

## 👨‍💻 Guía para Desarrolladores

Esta sección explica cómo extender y mantener el sitio web.

### Componentes Clave

-   `GlassPanel.tsx`: El pilar de la estética "Liquid Glass". Úsalo para envolver cualquier sección de contenido que deba tener este estilo.
-   `LiquidButton.tsx`: Botón personalizado con un efecto de "líquido" al pasar el cursor. Ideal para llamadas a la acción.
-   `AnimateOnScroll.tsx`: Un componente de orden superior que anima a sus hijos cuando aparecen en la pantalla. Úsalo para añadir dinamismo a las páginas.
-   `BookingBar.tsx`: La barra de búsqueda. Tiene una lógica compleja para mostrarse de forma diferente en el "hero" y en la cabecera fija.
-   `Header.tsx`: Gestiona la navegación principal, el logo y la transición entre la cabecera transparente y la fija ("sticky").
-   `FeaturedCarousel.tsx`: Un carrusel 3D, visualmente impactante y responsivo, diseñado para mostrar los servicios destacados en la página de inicio. Cuenta con autoplay, navegación manual y soporte para gestos táctiles (swipe).

### Cómo Agregar un Nuevo Componente

1.  **Crea el archivo:** Añade un nuevo archivo `.tsx` en la carpeta `src/components/`, por ejemplo, `src/components/TestimonialCard.tsx`.
2.  **Desarrolla el componente:** Escribe el código del componente. Intenta reutilizar componentes existentes como `GlassPanel` para mantener la consistencia visual.
    ```tsx
    // src/components/TestimonialCard.tsx
    import React from 'react';
    import GlassPanel from './GlassPanel';

    interface TestimonialCardProps {
      quote: string;
      author: string;
    }

    const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author }) => {
      return (
        <GlassPanel>
          <p className="italic">"{quote}"</p>
          <p className="font-bold mt-4 text-right">- {author}</p>
        </GlassPanel>
      );
    };

    export default TestimonialCard;
    ```
3.  **Úsalo donde lo necesites:** Importa y utiliza el nuevo componente en cualquier página o componente.

### Cómo Agregar una Nueva Página

Sigue estos pasos para añadir una nueva ruta y su página correspondiente (ej. "Contacto").

1.  **Crea el componente de la página:**
    Crea un nuevo archivo en `src/pages/`, por ejemplo, `src/pages/ContactPage.tsx`. Diseña el contenido de tu página.
    ```tsx
    // src/pages/ContactPage.tsx
    import React from 'react';
    import AnimateOnScroll from '../components/AnimateOnScroll';

    const ContactPage: React.FC = () => {
      return (
        <div className="container mx-auto px-4 py-16">
          <AnimateOnScroll>
            <h1 className="text-4xl font-bold text-center">Contacto</h1>
            {/* ... resto del contenido ... */}
          </AnimateOnScroll>
        </div>
      );
    };

    export default ContactPage;
    ```

2.  **Añade la ruta en `App.tsx`:**
    Importa tu nueva página y añade una nueva `<Route>` dentro del componente `<Routes>`.
    ```tsx
    // src/App.tsx
    import HomePage from './pages/HomePage';
    import ServicesPage from './pages/ServicesPage';
    // ... otros imports
    import ContactPage from './pages/ContactPage'; // <-- Importa la nueva página

    const AppContent: React.FC = () => {
      // ...
      return (
        // ...
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* ... otras rutas */}
            <Route path="/contact" element={<ContactPage />} /> {/* <-- Añade la nueva ruta */}
        </Routes>
        // ...
      );
    }
    ```

3.  **Integra el enlace en el Header:**
    Abre `src/components/Header.tsx` y añade un `NavLink` a la nueva página. **Recuerda hacerlo tanto en la navegación de escritorio como en la móvil.**

    ```tsx
    // src/components/Header.tsx

    // En la navegación de escritorio (<nav className="hidden md:flex ...">)
    <NavLink to="/contact" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>Contacto</NavLink>

    // En la navegación móvil (<div className="md:hidden ...">)
    <NavLink to="/contact" className={...} onClick={() => setIsMenuOpen(false)}>Contacto</NavLink>
    ```

### Gestión de Datos

Toda la información estática (servicios, destinos, información de la empresa) se centraliza en `src/data/database.ts`. Este archivo exporta tipos (`interface`) y arreglos de datos. Para modificar, añadir o eliminar un servicio o destino, solo necesitas editar este archivo. La aplicación se actualizará dinámicamente.

## 🌐 Despliegue

Para desplegar esta aplicación en producción, puedes utilizar plataformas como Vercel, Netlify o tu propio servidor.

1.  **Construye la aplicación:**
    Este comando generará una carpeta `dist` con los archivos estáticos optimizados.
    ```bash
    npm run build
    ```

2.  **Despliega la carpeta `dist`:**
    -   **Vercel/Netlify:** Conecta tu repositorio de Git. La plataforma detectará que es un proyecto Vite, ejecutará `npm run build` y desplegará el contenido de `dist`. No olvides configurar las variables de entorno en el panel de tu proveedor de hosting.
    -   **Servidor Propio:** Sube el contenido de la carpeta `dist` a tu servidor y configúralo para que sirva el `index.html` principal.

## 📄 Licencia

Este proyecto se distribuye bajo la licencia MIT.