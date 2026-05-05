# Contexto del Proyecto: Pausando el Tiempo

Este archivo sirve como referencia central para mantener la coherencia en el desarrollo del portfolio.

## Perfil Profesional
- **Identidad**: Estudiante, fotógrafo y videógrafo.
- **Especialidades**:
    - **Fotografía**: Gastronomía (especialidad principal), eventos y sesiones.
    - **Videografía**: Cortometrajes, Dirección de Fotografía (DoP) en podcasts y contenido para RRSS.
- **Objetivo**: Portfolio limpio, minimalista y profesional para futura integración en WordPress.

## Filosofía de Diseño: 'Zen-Art Gallery'
- **Estética**: Delicada, minimalista y espaciosa.
- **Concepto**: Diseño "invisible" donde el contenido (fotos/vídeos) es el protagonista absoluto.
- **Estado de Referencia**: La página `gastronomia.html` es el "estándar de oro".

## Reglas de Diseño (Design System)

### Colores
- **Fondo**: `#FFFFFF` (`zen-light`)
- **Texto Principal**: `#2D2D2D` (`zen-dark`)
- **Divisores / Bordes**: `#E5E7EB` (`zen-grey`)
- **Footer**: Fondo `#2D2D2D` con texto `#FFFFFF`.

### Tipografía
- **Títulos y Navegación**: `Montserrat` (Sans-serif). 
    - Estilo común: Mayúsculas, tracking/espaciado aumentado (`tracking-[0.2em]` o `[0.4em]`), negrita.
- **Cuerpo y Citas**: `Merriweather` (Serif).
    - Estilo común: Itálica para citas descriptivas.

### Espaciados y Layout
- **Contenedor**: `max-w-7xl` (1280px aprox).
- **Márgenes**: Amplios para crear "aire" (ej. `pt-32` para separación del header).
- **Galería**: Sistema de columnas masonry (`columns-1 md:columns-2 lg:columns-3`) con `gap-8`.

## Componentes Técnicos Operativos
- **Header**: Fijo (`fixed`), fondo blanco, logo `logo_black.png`.
- **Logos**:
    - `logo_black.png`: Para fondos claros (header).
    - `logo_white.png`: Para fondos oscuros (footer e inicio).
- **Galería Masonry**: Fluida, respeta proporciones originales de las fotos. Flujo vertical por columnas.
- **Efecto Hover**: Zoom suave (`hover:scale-105`) con transición de 700ms.
- **Animaciones**: `fade-in` suave al cargar la página.
- **Lightbox Pro**: 
    - Visualización a pantalla completa.
    - **Sistema de Zoom**: Clic en imagen para ampliar (escala 1.5x). Cursores dinámicos (`zoom-in` / `zoom-out`).
- **Carrusel de Clientes**: Sistema interactivo en el inicio que destaca logos mediante escalado y opacidad. Activación por hover y rotación automática pausada por interacción individual.
- **GSAP & ScrollTrigger**: Utilizado en la página de Inicio para animaciones complejas vinculadas al scroll (revelado de texto progresivo y efectos de desenfoque/parallax en imágenes de fondo).
- **Rutas**: Siempre relativas (ej. `images/gastronomia/...`).
- **Sistema de Gestión de Orden**: "Nomenclatura Secuencial". El HTML está configurado del 01 al XX. El usuario cambia el orden renombrando los archivos locales.

## Estado del Proyecto
- **Gastronomía**: Completada (Estándar de Oro).
- **Eventos**: Completada. Configurada para **25 fotografías** siguiendo el sistema secuencial.
- **Sesiones**: Completada. Configurada para **7 fotografías** siguiendo el sistema secuencial.
- **Inicio**: Completada. Incluye Hero banner oscurecido, sección Filosofía interactiva (con indicador de scroll animado y revelado de texto e imágenes dinámicas) y Social Proof (Testimonios y Carrusel).
- **Videografía**: Completada y reestructurada. Dividida en "Proyectos Principales" (Dejando Huella, Noche de Luz, Mirada 21, Invisible, San Agustín) con enlaces a vídeo y galerías de "Detrás de Cámara", y "Proyectos Visuales" (Conversaciones con el Maestro, El Sonido de la Calle) enfocada en fotogramas. Todo en una nueva subcarpeta de imágenes `images/videografia/`.
- **Global**: Footer unificado en todas las páginas, reemplazando el texto de Instagram y WhatsApp por sus respectivos iconos hipervinculados. Galerías de Fotografía ajustadas a todo color por defecto para igualar la home.

## Estructura de Archivos
- **/css/style.css**: Estilos base, animaciones y lógica de zoom del lightbox.
- **/js/main.js**: Lógica de navegación móvil, animaciones de scroll y comportamiento del lightbox.
- **/images/**: Organizado por categorías (gastronomia, eventos, sesiones, etc.).
