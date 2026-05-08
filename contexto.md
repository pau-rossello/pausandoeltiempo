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
### Espaciados y Layout
- **Contenedor**: `max-w-7xl` (1280px aprox).
- **Márgenes**: Amplios para crear "aire" (ej. `pt-32` para separación del header).
- **Galería Fotográfica**: Sistema de columnas masonry (`columns-1 md:columns-2 lg:columns-3`) con `gap-8` para respetar proporciones originales.
- **Galería Videografía**: Sistema de **grids estructurados** (`grid-cols-2 md:grid-cols-3`) para fotogramas cinematográficos (`aspect-video`) asegurando alineación perfecta y simetría (ej. composiciones de 6 imágenes).

### Adaptabilidad (Responsive Design)
- **Breakpoint Principal**: 768px.
- **Hero Banner (Mobile)**: Altura `100vh` (`100dvh`). Indicador de scroll activo pero desplazado al extremo inferior (`bottom: 0.5rem`) para no interferir con botones centrales. Diseño tipo "carta de presentación" para impacto inicial.
- **Sección Filosofía (Mobile)**: 
    - **Fluidez**: Scroll ajustado a `145vh` para eliminar huecos blancos innecesarios.
    - **Efecto Niebla**: Sección que inicia **solo con texto**. Usa fotos específicas para móvil desde `images/efecto/vertical/` (01-Izquierda Superior, 02-Derecha Central, 03-Izquierda Inferior) que se revelan gradualmente con velocidad uniforme vinculada al scroll.
    - **Indicadores**: `#phi-scroll-indicator` bajado a `1.5rem` para no interferir con el texto.
- **Social Proof / Testimonios**: 
    - **Puente Visual**: Línea de gradiente vertical (`md:hidden`) exclusiva para móvil para guiar el scroll tras la frase de servicios.
    - **Compactación**: Espaciado reducido (`pb-0` / `pt-16` en móvil, `pb-12` / `pt-20` en escritorio) para asegurar un flujo continuo y evitar la sensación de "fin de página".
- **Navegación**: Menú lateral desplegable para dispositivos móviles controlado por `js/main.js`.

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
- **Inicio**: Completada y optimizada. Incluye Hero banner full-screen (`100vh`), sección Filosofía con 3 imágenes verticales en móvil y velocidad uniforme (`ease: none`). Flujo optimizado hacia testimonios mediante compactación de espacios y puente visual.
- **Videografía**: Completada y optimizada. 
    - **Estructura**: Migrada de masonry a **grids estructurados** para fotogramas.
    - **Categorización**: Diferenciación entre "Proyectos Principales" (con enlaces a YouTube/Facebook) y "Proyectos Visuales" (archivos de stills).
    - **Consistencia**: Composición de 6 imágenes en grids de 3x2 para los proyectos estrella (*Dejando Huella* y *Noche de Luz*). 
    - **Flexibilidad**: Las fotos de "Detrás de Cámara" en *Noche de Luz* mantienen su aspect ratio original mediante un sistema de columnas para evitar recortes.
- **Sobre mí**: Completada. Texto biográfico justificado para mayor legibilidad y coherencia visual.
- **Contacto**: Estructura de página lista. Formulario pendiente de integración con servicio de envío (ej. Formspree) o futura migración a WordPress.
- **Global**: Footer unificado en todas las páginas con logo blanco, iconos de RRSS, ubicación (Madrid, España) y email. Sistema de "Fade-in" en carga y Media Queries para asegurar la estética 'Zen-Art' en todos los dispositivos.

## Estructura de Archivos
- **/css/style.css**: Estilos base, animaciones y lógica de zoom del lightbox.
- **/js/main.js**: Lógica de navegación móvil, animaciones de scroll y comportamiento del lightbox.
- **/images/**: Organizado por categorías (gastronomia, eventos, sesiones, etc.).
