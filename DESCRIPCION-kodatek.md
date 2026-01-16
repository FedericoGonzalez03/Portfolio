# KodaTek Landing Page - Proyecto Full-Stack

## A) Contexto

**Proyecto:** Landing page para KodaTek, mi propio emprendimiento de desarrollo de software personalizado  
**Problema:** Necesitaba una presencia digital moderna que no solo presentara los servicios de la empresa, sino que automatizara la captación y calificación de leads mediante un asistente de IA conversacional. El objetivo era reducir la fricción en el proceso de consulta inicial y permitir el agendamiento de reuniones de descubrimiento sin intervención manual.

**Necesidad de negocio:** Transformar visitantes interesados en leads calificados de forma automatizada, proporcionando una experiencia interactiva que responda preguntas sobre servicios, capacidades técnicas y agende reuniones directamente en mi calendario.

---

## B) Mi Rol

**Fundador & Full-Stack End-to-End Developer**

Como fundador de KodaTek, desarrollé la solución completa de inicio a fin, abarcando:

- **Frontend:** Diseño e implementación de la interfaz con Next.js 15
- **Backend:** Desarrollo de APIs para chat con IA, envío de emails transaccionales e integración con servicios externos
- **Integración de IA:** Implementación del chatbot conversacional con Claude (vía Pollinations AI) incluyendo function calling para agendamiento de reuniones
- **DevOps:** Configuración del proyecto, gestión de variables de entorno y preparación para deployment en Vercel
- **Integraciones:** Conexión con Cal.com API v2 para gestión de calendario y disponibilidad, y Zoho Mail para notificaciones por correo

---

## C) Qué Construí

### Features Principales

1. **Landing Page Moderna y Responsiva**
   - Hero section con efectos visuales tipo grid y gradientes
   - Secciones de servicios con cards interactivas con efecto glow
   - Navegación sticky flotante con scroll smooth
   - Formulario de contacto con validación client-side y envío de emails

2. **Chatbot de IA Conversacional (Koda AI)**
   - Asistente virtual integrado con Claude vía Pollinations AI
   - Sistema de function calling para ejecutar acciones (consultar disponibilidad, agendar reuniones)
   - Base de conocimientos personalizada sobre servicios y procesos de KodaTek
   - Interfaz de chat flotante tipo widget con animaciones y estados de carga

3. **Sistema de Agendamiento Automático**
   - Consulta de disponibilidad en tiempo real desde Cal.com API v2
   - Presentación de slots agrupados por día y zona horaria del usuario
   - Agendamiento de reuniones con creación automática de eventos de calendario
   - Gestión de duraciones flexibles (15, 30, 45, 60, 75, 90 minutos)

4. **Sistema de Notificaciones**
   - Envío de emails transaccionales desde el formulario de contacto
   - Integración con Zoho Mail SMTP
   - Toast notifications para feedback instantáneo de acciones del usuario

5. **Componentes Interactivos con Efectos Avanzados**
   - GlowCard: componentes con efectos de brillo naranja en hover
   - DelayedAnimationContainer: animaciones escalonadas para entrada de elementos
   - Sistema de logging customizado para debugging de integraciones

6. **Páginas Legales Dinámicas**
   - Renderizado de términos y condiciones y política de privacidad desde Markdown
   - Layout consistente con estilos customizados

---

## D) Decisiones Técnicas

### 1. **Next.js 15 con App Router y React Server Components**
   - **Por qué:** Aprovecha las últimas features de Next.js para optimización automática (Code Splitting, Image Optimization), mejora SEO y permite mezclar server/client components estratégicamente.
   - **Beneficio:** Las secciones estáticas se renderizan en el servidor, mientras que componentes interactivos (chat, formularios) son client-side, logrando el balance óptimo entre performance e interactividad.

### 2. **Pollinations AI como Proxy para Claude**
   - **Por qué:** Acceso a modelos de IA avanzados (Claude) sin necesidad de gestionar API keys de múltiples proveedores, con soporte nativo para function calling.
   - **Beneficio:** Implementación rápida y económica de capacidades de IA conversacional, con control total sobre tools y system prompts.
   - **Trade-off:** Dependencia de un servicio third-party, mitigado con configuración de API key opcional y logging exhaustivo para debugging.

### 3. **Cal.com API v2 para Gestión de Calendario**
   - **Por qué:** Cal.com proporciona una API robusta para consultar disponibilidad y crear bookings programáticamente, con soporte de múltiples zonas horarias y duraciones flexibles.
   - **Beneficio:** Automatización completa del flujo de agendamiento sin construir lógica de calendario desde cero.
   - **Implementación:** Sistema de redondeo de duraciones a valores permitidos por la API (15, 30, 45, 60, 75, 90 min) para manejar solicitudes en lenguaje natural.

### 4. **Function Calling con IA para Acciones del Usuario**
   - **Por qué:** Permite que el chatbot ejecute acciones reales (consultar disponibilidad, agendar reuniones) en lugar de solo responder preguntas.
   - **Beneficio:** Experiencia conversacional natural donde el usuario describe su necesidad y la IA coordina las llamadas a APIs necesarias.
   - **Desafío resuelto:** Implementé un sistema de loops con límite de rounds (MAX_ROUNDS = 5) para manejar múltiples function calls secuenciales y prevenir loops infinitos.

---

## E) Desafíos y Cómo Los Resolví

### 1. **Gestión de Múltiples Tool Calls Secuenciales**
   **Problema:** El chatbot necesitaba ejecutar múltiples funciones en secuencia (ej: obtener fecha actual → consultar disponibilidad → agendar reunión). La respuesta de Pollinations podía incluir tool calls que generaban nuevos tool calls.

   **Solución:** Implementé un sistema de rounds con loop:

   Este enfoque permite que el modelo ejecute múltiples acciones secuenciales, evalúe resultados intermedios y tome decisiones informadas. El límite de rounds previene loops infinitos.

### 2. **Conversión de Lenguaje Natural a Parámetros de API**
   **Problema:** Los usuarios expresan duración de reuniones en lenguaje natural ("hora y media", "1 hora", "45 minutos"), pero Cal.com API solo acepta valores específicos (15, 30, 45, 60, 75, 90).

   **Solución:** Implementé lógica de redondeo al valor permitido más cercano:
   
   Además, configuré el system prompt del chatbot para interpretar expresiones comunes y convertirlas correctamente.

### 3. **Manejo de Zonas Horarias en Agendamiento**
   **Problema:** Cal.com API requiere fechas en ISO 8601 con UTC, pero necesitaba mostrar horarios al usuario en su zona horaria local para evitar confusión.

   **Solución:** 
   - La API devuelve `timeISO` en UTC para cada slot disponible
   - Usé `toLocaleTimeString` con el timezone del usuario (lo requiere el modelo por chat) para mostrar horarios locales en la UI
   
   Esto elimina la ambigüedad y errores comunes en sistemas multi-zona horaria.

---

## Tecnologías Utilizadas

**Frontend:**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion (animaciones)
- Lucide React (iconos)

**Backend & APIs:**
- Next.js API Routes
- Pollinations AI (Claude proxy)
- Cal.com API v2 (calendario)
- Nodemailer + Zoho Mail SMTP
- Google Calendar API (vía Cal.com)

**Deployment & Tooling:**
- Vercel (hosting y CI/CD)
- Vercel Analytics & Speed Insights
- TypeScript 5
- ESLint

---

## Resultados

- ✅ Landing page moderna con experiencia de usuario fluida y profesional
- ✅ Sistema de chatbot 100% funcional que responde preguntas y ejecuta acciones
- ✅ Automatización completa del flujo de agendamiento de reuniones
- ✅ Reducción de fricción en el proceso de captación de leads
- ✅ Sistema de notificaciones funcional para formulario de contacto
- ✅ Codebase bien estructurado, type-safe y mantenible

---

## Aprendizajes Clave

1. **Function Calling con LLMs requiere diseño cuidadoso:** El system prompt debe ser muy específico sobre cuándo y cómo usar tools, y el backend debe manejar edge cases (loops infinitos, llamadas duplicadas).

2. **Balance entre control del modelo y flexibilidad:** Dar al modelo capacidad de ejecutar acciones requiere reglas claras pero no tan restrictivas que limite su utilidad.

3. **Manejo de zonas horarias es complejo:** Cuando se trabaja con servicios externos (generalmente trabajan con UTC) siempre trabajar con UTC internamente y convertir a zona local solo para display. Documentar y loggear ambas representaciones.
