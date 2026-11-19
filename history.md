# history.md — Bitácora de Raíces
## 2026-07-06 — Setup
- Proyecto creado: Vite + React + TS + Tailwind, puerto 6651, estructura base lista.
## 2026-07-06 — Hero y Propósito
- Hero completado y aprobado (serif Source Serif/Libre Baskerville, paleta definitiva, foto local con difuminado). Sección Propósito construida.
## 2026-07-07 — Sección Servicios construida (por Santiago + Obrero, sin diseño del Arquitecto)
- Sección "Nuestros Servicios" (3 cards: Desarrollo de Líderes, Desarrollo de Equipos, Transformación Organizacional) implementada en `Servicios.tsx`, con varias rondas de ajuste de centrado/alineación.
- 3 landings internas nuevas construidas replicando imágenes de referencia provistas por Santiago: `DesarrolloLideres.tsx`, `DesarrolloEquipos.tsx`, `TransformacionOrganizacional.tsx`, cada una con hero propio, "¿Qué trabajamos?", "¿Cómo trabajamos?" (5 pasos) y "Beneficios".
- Se instaló `react-router-dom` y se agregaron rutas para las 3 landings; se agregó `ScrollToTop.tsx` para resetear el scroll al navegar entre páginas.
- Se integró el logo real (`logoraices.png`, procesado con fondo transparente) en el header de todas las páginas.
- Se agregaron botón flotante de WhatsApp (sitewide) y stats de autoridad (+300 líderes / +50 empresas / +3 años) en el Hero, reemplazando los 3 mini-servicios redundantes con la sección Servicios.
- Pendiente de auditoría del Arquitecto: fotos repetidas entre landings (falta contenido real), 3 íconos aproximados sin match exacto en Lucide, no verificado en mobile real (solo por breakpoints en código).
## 2026-07-07 — Rediseño de Servicios: de 3 landings agrupadas a 7 servicios individuales
- Nacho y Vicky pidieron no agrupar los servicios en 3 landings sino tener una landing por servicio (7 en total). Contenido real provisto en `serviciosraices.txt` (Downloads); la foto de referencia (`serviciosraicesfoto.png`) es de una web vieja de Raíces, usada solo como idea de agrupación de contenido, no como diseño a replicar.
- Se dieron de baja `DesarrolloLideres.tsx`, `DesarrolloEquipos.tsx` y `TransformacionOrganizacional.tsx` (y sus rutas en `main.tsx`).
- Se crearon 6 landings nuevas en `src/pages/`: `CoachingEquipos.tsx`, `CoachingEjecutivo.tsx`, `TeamBuilding.tsx`, `IdentidadOrganizacional.tsx`, `ProgramaLiderazgoGPS.tsx`, `Mindfulness.tsx`. El 7° servicio, "Talleres y Capacitaciones", queda como card "Próximamente" en la home sin landing (sin contenido final del cliente todavía).
- Se extrajeron componentes compartidos a `src/components/service-page/` (ServiceHeader, BackLink, ServiceHero, SectionDivider, IconFeatureGrid, PhaseSteps, Metodologia, ServiceCTA) para no duplicar boilerplate entre las 6 landings — antes cada landing repetía el header y el CTA final completos.
- Se rediseñó la sección "Servicios" de la home (`Servicios.tsx`): pasó de un bloque único con 3 cards divididas por líneas a una grilla de 7 cards individuales con borde propio y hover, mejorando (no replicando) la referencia vieja que pasó el cliente.
- Nueva sección "¿Cómo funciona?" (`PhaseSteps.tsx`) que no existía en las landings viejas — fases variables (2 a 4 según el servicio) con sub-listas, tomada del contenido del .txt.
- Verificado con `tsc --noEmit` y `npm run build`, ambos limpios.
## 2026-07-07 — Logo real, header sticky y sección Contacto
- Se reemplazó el logo placeholder por el logo real (`raiceslogo.jpeg`/`logosolo.jpeg`, provistos en Downloads), con el fondo gris removido vía Python/Pillow. Wordmark completo en headers (home y landings de servicio), ícono solo en el CTA final de cada landing.
- Header de la home y de las landings de servicio ahora es `sticky` con una línea divisoria (`border-b`) — se mantiene visible al hacer scroll. Se tuvo que sacar el header de adentro del div con `overflow-hidden` del Hero porque eso rompía el sticky.
- Se sincronizaron los links de navegación del header de las landings de servicio con los de la home (estaban desactualizados: tenían "Objetivo"/"Metodología" en vez de "Propósito"/"Equipo"→Quienes Somos).
- Nueva sección "Contacto" (`Contacto.tsx`), última sección de la home, debajo de Quienes Somos. Replica el layout de `contacto.png` (Downloads) sin el gráfico decorativo de raíz de la derecha. Fondo cream (no surface-soft) para mantener la alternancia con la sección anterior.
- LinkedIn/Instagram no existen como íconos en la versión instalada de lucide-react — se armaron a mano en `src/components/icons/SocialIcons.tsx` con paths estándar de Feather Icons.
- Ajuste post-revisión: se sacó el botón "Agendar una reunión" (no hay sistema de agenda) y se reemplazó por dos botones directos, WhatsApp (relleno, canal principal del sitio) y Mail (outline), con el mail y teléfono como texto debajo para copiar directo.
- Verificado con `tsc --noEmit` y `npm run build`, ambos limpios.
