# CLAUDE.md — Raíces Transformación

## Objetivo
Landing premium para Raíces (coaching organizacional, raicestransformacion). Rediseño de su web actual de Lovable. Dirección de arte: "cálido orgánico con rigor corporativo" — paleta tierra, serif elegante solo en títulos clave, mucho whitespace, cero estética de plantilla.

## Stack
- React + Vite + TypeScript + Tailwind CSS
- Deploy target: Cloudflare Pages (conectado a GitHub, build `npm run build`, salida `dist`). `public/_headers` bloquea la indexación mientras el sitio está en prueba: borrarlo al pasar a producción.
- Sin backend (landing estática)
- Dev server: http://localhost:6651 (puerto fijo, no cambiar)

## Comandos
- npm run dev — levanta en :6651
- npm run build — build de producción

## Decisiones de arquitectura
- Construcción sección por sección, de arriba hacia abajo. Se valida cada sección antes de seguir.
- Estrategia "esqueleto primero": placeholders (Unsplash, logos grises, testimonios genéricos) hasta tener contenido real.
- Componentes de secciones en src/components/landing/
- Componentes compartidos de landings de servicio (header, hero, grillas de íconos, fases, metodología, CTA) en src/components/service-page/ — reutilizados por las 6 landings de servicio para no duplicar boilerplate.
- Landings internas de servicios en src/pages/, ruteadas con react-router-dom (rutas viven en main.tsx, no en App.tsx).

## Bugs conocidos
(ninguno)

## Tareas pendientes
- Hero: listo
- Propósito: en validación
- Servicios: rediseñada — ahora son 7 servicios individuales, cada uno con landing propia (Coaching de Equipos, Coaching Ejecutivo, Team Building, Identidad Organizacional, Programa de Liderazgo GPS, Mindfulness). "Talleres y Capacitaciones" queda como card "Próximamente" sin landing, sin contenido final todavía. Contenido de cada landing tomado de serviciosraices.txt (Downloads). Pendiente: revisión de Nacho/Vicky del copy y orden de las cards, fotos reales por servicio (hoy repiten fotohero.png), verificación en mobile real.
- Contacto: construida (`Contacto.tsx`, id="contacto", debajo de Quienes Somos), replicando contacto.png de Downloads sin el gráfico de raíz decorativo de la derecha. Botón "Agendar una reunión" y el WhatsApp del bloque de contacto van a WHATSAPP_URL; el mail abre mailto: a raices.espaciosdetransformacion@gmail.com. LinkedIn e Instagram con href="#" placeholder — pendiente que Santiago pase los links reales. Íconos de LinkedIn/Instagram no existen en la versión de lucide-react instalada, se armaron a mano en src/components/icons/SocialIcons.tsx (paths estándar de Feather Icons).
- Próxima sección: a definir
