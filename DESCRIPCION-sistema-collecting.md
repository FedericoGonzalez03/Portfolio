# Sistema de Gestión y Cobranzas - Collecting SRL

**Aplicación web full-stack para gestión integral de cobranzas empresariales**

---

## A) Contexto del Proyecto

### Cliente y Problemática
Desarrollado para **Collecting SRL**, empresa dedicada a la gestión de cobranzas corporativas en Uruguay. El cliente enfrentaba desafíos operativos críticos:

- **Gestión manual ineficiente**: Seguimiento de clientes y facturas mediante hojas de cálculo Excel dispersas
- **Falta de trazabilidad**: Sin registro histórico de comunicaciones con clientes (llamadas, visitas, acuerdos de pago)
- **Comunicación fragmentada**: Necesidad de cambiar entre múltiples aplicaciones para enviar emails, WhatsApp y gestionar documentos
- **Ausencia de notificaciones**: Imposibilidad de coordinar equipos en tiempo real sobre actualizaciones críticas
- **Importación masiva compleja**: Procesamiento manual de carteras con miles de registros desde sistemas legacy

### Objetivo
Crear una plataforma unificada que centralice todas las operaciones de cobranza, automatice flujos de trabajo repetitivos y proporcione visibilidad completa del estado de cada cliente en un único sistema.

---

## B) Mi Rol como Full-Stack Developer

Desarrollé el proyecto **de inicio a fin** (end-to-end), abarcando:

### **Desarrollo Backend** (Node.js + Express + TypeScript)
- Diseño e implementación de API RESTful con autenticación JWT
- Arquitectura de microservicios: integración IMAP/SMTP para webmail corporativo
- Sistema de notificaciones en tiempo real con Socket.IO
- Procesamiento masivo de archivos Excel con validación y normalización de datos
- Integración con APIs externas (Twilio WhatsApp Business API, Sirv CDN)

### **Desarrollo Frontend** (Next.js 15 + React + TypeScript)
- Implementación de App Router con Server Components y Server Actions
- Sistema de autenticación con cookies HTTP-only
- Interfaz responsiva con TailwindCSS y componentes reutilizables
- Editor de correos con soporte de imágenes inline y programación de envíos
- Gestión de estado con Context API y optimistic updates

### **Infraestructura de Datos**
- Diseño de esquema PostgreSQL normalizado con 15+ tablas relacionadas
- Optimización de consultas complejas con índices y CTEs
- Sistema de migraciones y versionado de base de datos

### **DevOps y Arquitectura**
- Configuración de monorepo con workspaces de npm
- Estructuración modular con separación de responsabilidades (routes/services/repositories)
- Sistema de logs con Winston y rotación diaria

### **Deployment e Infraestructura Cloud**
- Deploy en producción con Oracle Cloud Infrastructure (OCI Always Free)
- Configuración de Nginx como reverse proxy con TLS
- Hardening de seguridad: VCN, Security Lists, NSGs e iptables
- Estrategia de backups multi-capa con replicación offsite
- Pipeline CI/CD con GitHub Actions para deploys automatizados

---

## C) Funcionalidades Implementadas

### 🔐 **Sistema de Autenticación y Autorización**
- Login con email o nickname, validación JWT con refresh mediante cookies
- Roles granulares: Admin, Supervisor, Operador
- Protección de rutas en frontend con middleware Next.js
- API Keys para integraciones externas

### 📊 **Gestión de Clientes y Facturas**
- CRUD completo con búsqueda avanzada y filtros combinables
- Importación masiva desde Excel con validación de integridad
- Vista detallada con totales por moneda (UYU/USD) y estados (Pendiente, Vencida, A Favor)
- Sistema de notas adhesivas con colores personalizables
- Carga diferencial de carteras de gestión mensuales

### 📝 **Legajo de Seguimiento**
- Registro cronológico de interacciones: llamadas, visitas, acuerdos de pago, notas
- Compromisos de pago con recordatorios y estado de cumplimiento
- Vinculación de facturas específicas a cada entrada del legajo
- Exportación automática de informes en PDF con marca de agua

### 📧 **Webmail Integrado** (IMAP/SMTP)
- Cliente de correo completo dentro de la aplicación
- Filtros avanzados: remitente, asunto, fecha, banderas (visto/marcado)
- Descarga y visualización de adjuntos con paginación
- Borradores con autoguardado
- **Editor WYSIWYG** con soporte de imágenes inline (paste & upload a Sirv CDN)
- **Programación de envíos** con cron jobs y gestión de cola en base de datos

### 💬 **Comunicaciones Multicanal**
- Envío de estados de cuenta por WhatsApp (Twilio Business API)
- Templates reutilizables para emails de cobranza
- Registro automático de comunicaciones en el legajo del cliente

### 🔔 **Notificaciones en Tiempo Real**
- Sistema pub/sub con Socket.IO autenticado
- Notificaciones por usuario, rol o broadcast
- Panel lateral con estado leído/no leído y acciones rápidas
- Persistencia en PostgreSQL con timestamps

### 📈 **Reportes y Exportaciones**
- Generación de PDFs dinámicos con Puppeteer (facturas pendientes, estados de cuenta)
- Exportación masiva a Excel con formato corporativo
- Descarga de carteras de gestión mensuales filtradas

---

## D) Decisiones Técnicas Clave

### 1. **Monorepo con npm Workspaces**
**Decisión**: Estructurar el proyecto como monorepo con `frontend/` y `backend/` en lugar de repositorios separados.

**Razones**:
- Compartir tipos TypeScript entre frontend y backend (ej: `Cliente`, `Notification`)
- Versionado atómico de features que afectan ambas capas
- Scripts unificados (`npm run dev` levanta ambos servicios simultáneamente)
- Simplifica deploys coordinados

### 2. **Next.js 15 App Router con Server Actions**
**Decisión**: Migrar de Pages Router a App Router y usar Server Actions en lugar de API Routes tradicionales.

**Razones**:
- Reducción drástica de código boilerplate (acciones marcadas con `'use server'`)
- Eliminación de llamadas `fetch()` manuales desde componentes cliente
- Mejor integración con cookies HTTP-only para tokens JWT
- Streaming y Suspense nativo para mejorar TTFB (Time To First Byte)
- Server Components reducen el bundle de JavaScript enviado al cliente

### 3. **PostgreSQL con Consultas Parametrizadas y Transacciones**
**Decisión**: Usar pool de conexiones con transacciones explícitas (`BEGIN/COMMIT/ROLLBACK`) para operaciones complejas.

**Razones**:
- Prevención de SQL injection mediante consultas parametrizadas
- Garantía de integridad en importaciones masivas (rollback si falla una inserción)
- Optimización con CTEs (Common Table Expressions) para consultas agregadas
- Índices compuestos para filtros combinables en listados

**Ejemplo crítico**: Importación de cartera de gestión con 5000+ registros en lotes de 500:
```typescript
await client.query('BEGIN');
for (const batch of processBatch(data, 500)) {
  await insertBatch(batch);
}
await client.query('COMMIT');
```

### 4. **Socket.IO con Autenticación JWT en Handshake**
**Decisión**: Validar token JWT durante el handshake de WebSocket en lugar de después de conectar.

**Razones**:
- Prevenir conexiones no autorizadas antes de establecer el socket
- Asociar `userId` al socket desde el inicio para enrutamiento de mensajes
- Mantener coherencia con el resto del sistema (mismo JWT para REST y WS)
- Tracking de usuarios activos con Map<userId, socketIds[]> para múltiples sesiones

### 5. **Procesamiento de Emails con IMAP + SMTP (sin mail server propio)**
**Decisión**: Conectar directamente a servidores IMAP/SMTP del cliente en lugar de configurar un mail server completo (Postfix/Dovecot).

**Razones**:
- Reducción de infraestructura: no requiere servidor de correo dedicado
- Evita problemas de reputación de IP (spam lists)
- Sincronización bidireccional con la bandeja corporativa existente
- Migración transparente: el cliente conserva su proveedor actual
- Implementación con `imapflow` y `nodemailer` (librerías battle-tested)

### 6. **Oracle Cloud Infrastructure (OCI) Always Free Tier**
**Decisión**: Desplegar en VM Ampere A1.Flex de OCI en lugar de servicios gestionados (AWS Elastic Beanstalk, Heroku, etc.).

**Razones**:
- **Costo $0**: OCI Always Free ofrece 4 OCPUs + 24GB RAM de arquitectura ARM gratuitamente
- Control total sobre el stack: base de datos PostgreSQL co-ubicada en la misma VM para baja latencia
- Performance excepcional: Ampere Altra (ARM64) con rendimiento comparable a instancias pagas
- Escalabilidad vertical disponible: posibilidad de migrar a instancias pagas sin cambiar infraestructura
- Networking robusto: VCN, Security Lists y NSGs con configuración granular incluida

**Trade-off aceptado**: Mayor responsabilidad operativa (actualizaciones, monitoreo, backups) a cambio de ahorro de costos y flexibilidad.

---

## E) Desafíos Superados

### 1. **Importación Masiva sin Timeouts ni Memory Leaks**
**Problema**: Al importar archivos Excel con +10,000 facturas, el servidor respondía con `504 Gateway Timeout` o `ENOMEM` (out of memory).

**Causa raíz**: Procesamiento síncrono de todos los registros en un único commit, acumulación de objetos en memoria.

**Solución implementada**:
- Procesamiento por lotes (`BATCH_SIZE = 500`) con commits parciales
- Stream processing de archivos Excel en lugar de cargar todo el workbook en RAM
- Timeout aumentado solo para rutas de importación (`req.setTimeout(300000)`)
- Normalización de encabezados con regex para soportar múltiples variantes de nombres de columnas
- Logging progresivo para tracking de métricas (filas procesadas, errores, tiempo transcurrido)

```typescript
// Helper genérico para cualquier importación masiva
const processBatch = async (items: any[], batchSize: number, processor: (batch: any[]) => Promise<void>) => {
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await processor(batch);
    logger.info(`📊 Procesados ${Math.min(i + batchSize, items.length)}/${items.length} registros`);
  }
};
```

### 2. **Race Conditions en Notificaciones en Tiempo Real**
**Problema**: Usuarios con múltiples sesiones (ej: desktop + mobile) recibían notificaciones duplicadas o perdían estado de "leído" al marcar en un dispositivo.

**Causa raíz**: Tracking simple de 1 socket por usuario, sin sincronización entre sockets del mismo usuario.

**Solución implementada**:
- Cambio de arquitectura: `Map<userId, socketIds[]>` en lugar de `Map<userId, socketId>`
- Broadcast a todos los sockets del mismo usuario al marcar como leída
- Validación de ownership en eventos: solo el dueño puede marcar/eliminar sus notificaciones
- Persistencia inmediata en PostgreSQL antes de emitir evento Socket.IO (source of truth)

```typescript
private userSockets: Map<number, string[]> = new Map();

sendNotificationToUser(userId: number, notification: Notification) {
  const socketIds = this.userSockets.get(userId) || [];
  socketIds.forEach(socketId => {
    this.io.to(socketId).emit('new_notification', notification);
  });
}
```

### 3. **Manejo de Imágenes Inline en Emails sin Violar Límites de Tamaño**
**Problema**: Usuarios pegaban capturas de pantalla (5-10 MB) en el editor de correos, generando emails que rebotaban por exceder límites de SMTP (25 MB típicamente con base64).

**Solución implementada**:
- Intercepción del evento `paste` en editor ContentEditable
- Detección automática de imágenes en clipboard
- Subida asíncrona a Sirv CDN (servicio externo) con feedback visual
- Reemplazo del blob local por URL pública (`<img src="https://cdn.sirv.com/...">`)
- Validaciones server-side: tamaño máximo 5 MB, formatos permitidos (PNG/JPEG/WEBP/GIF)
- Organización por usuario y fecha: `/inline/user-{id}/{YYYY-MM}/`

**Beneficio adicional**: Emails ligeros, imágenes cacheadas en CDN, mejor deliverability.

### 4. **Sincronización de Estado entre Server Actions y UI**
**Problema**: Después de crear/editar un cliente con Server Actions, la lista no se actualizaba automáticamente sin recargar la página.

**Solución implementada**:
- `revalidatePath()` en Server Actions después de mutaciones exitosas
- `redirect()` a la misma ruta con nuevos searchParams para forzar re-fetch
- Optimistic updates en componentes cliente para operaciones rápidas (toggle de flags)
- Cache tags de Next.js para invalidaciones granulares

```typescript
'use server';
export async function createClienteAction(data: ClienteFormData) {
  // ... lógica de creación
  revalidatePath('/clientes');
  redirect('/clientes?created=true');
}
```

---

## F) Deployment e Infraestructura en Producción

### **Plataforma Cloud**
Desplegué la aplicación en **Oracle Cloud Infrastructure** utilizando el tier Always Free, aprovechando una VM Ampere A1.Flex con arquitectura ARM64 (4 núcleos + 24GB RAM). Esta decisión permitió costo cero de infraestructura sin sacrificar performance, ejecutando backend, frontend y base de datos PostgreSQL en la misma instancia para minimizar latencia.

### **Arquitectura de Red y Seguridad**
Implementé una arquitectura de seguridad en capas múltiples:

- **Reverse Proxy**: Configuré Nginx para exponer servicios de forma segura, manejando TLS/SSL con certificados Let's Encrypt con renovación automática, y agregando headers de seguridad estándar (HSTS, CSP).

- **Firewall Multinivel**: Establecí controles de seguridad redundantes usando Virtual Cloud Network (VCN), Security Lists, Network Security Groups (NSGs) e iptables local, siguiendo el principio de defensa en profundidad.

- **Acceso Restringido**: Solo HTTP/HTTPS expuestos públicamente, SSH con autenticación por llaves y restringido por IP de origen, todo el resto del tráfico bloqueado por defecto.

### **Estrategia de Backups y Recuperación ante Desastres**
Diseñé e implementé una estrategia de backups en tres niveles para garantizar disponibilidad del servicio:

**Nivel 1 - Base de Datos**: Backups lógicos diarios automatizados con retención de 7 días, ejecutados durante horarios de bajo tráfico. Compresión aplicada para optimizar almacenamiento.

**Nivel 2 - Replicación Offsite**: Sincronización automática cada 6 horas hacia Google Drive usando rclone con encriptación, protegiendo contra pérdida total del servidor o fallo del datacenter.

**Nivel 3 - Infraestructura Completa**: Snapshots automáticos de volúmenes con política de retención de 30 días en OCI, permitiendo restauración completa del servidor en menos de 15 minutos ante escenarios catastróficos.

### **Pipeline CI/CD Automatizado**
Configuré GitHub Actions para automatizar el ciclo completo de deployment:

Cada push a la rama principal desencadena compilación automática de TypeScript, ejecución de tests, y despliegue remoto por SSH. El proceso incluye actualización atómica de archivos, reinstalación de dependencias si es necesario, y validación post-deploy mediante health checks. Si algo falla, el sistema revierte automáticamente a la versión anterior usando tags de Git, con tiempo de rollback inferior a 2 minutos.

### **Monitoreo y Operación Continua**
Establecí sistemas de logging centralizado con rotación automática para todos los componentes (aplicación, Nginx, sistema operativo), permitiendo diagnóstico rápido de problemas. Configuré alertas automáticas por email ante anomalías en CPU, RAM o disco.

El stack de proceso incluye PM2 con reinicio automático ante crashes, actualización desatendida de parches de seguridad del OS, y renovación automática de certificados SSL. Auditorías de seguridad trimestrales complementan el mantenimiento preventivo mensual.

---

## 🛠️ Stack Tecnológico Completo

**Frontend**: Next.js 15, React 19, TypeScript, TailwindCSS 4, Framer Motion, Socket.IO Client, Lucide Icons

**Backend**: Node.js, Express, TypeScript, PostgreSQL (node-pg), Socket.IO, JWT, bcryptjs, Winston

**Comunicaciones**: Nodemailer (SMTP), IMAPFlow (IMAP), Twilio SDK (WhatsApp), Sirv API (CDN)

**Procesamiento**: xlsx (SheetJS), Puppeteer (PDF generation), Multer (file uploads)

**DevTools**: npm Workspaces, ts-node-dev, Concurrently, ESLint

**Infraestructura**: OCI (Ampere A1.Flex), Ubuntu 22.04, Nginx, PM2, rclone, certbot, iptables, fail2ban

**CI/CD**: GitHub Actions, rsync y SSH

---

## 📦 Arquitectura del Proyecto

```
sistema-collecting/
├── backend/                    # API REST + WebSocket Server
│   ├── src/
│   │   ├── routes/            # Endpoints agrupados por dominio
│   │   ├── services/          # Lógica de negocio reutilizable
│   │   ├── middleware/        # Auth, logging, error handling
│   │   ├── mail/              # IMAP, SMTP, scheduler (cron)
│   │   ├── config/            # DB pool, logger, env vars
│   │   └── types/             # Interfaces compartidas
│   └── database/
│       └── init.sql           # Schema completo con triggers
│
├── frontend/                   # Next.js App Router
│   ├── src/
│   │   ├── app/               # Rutas (file-based routing)
│   │   ├── components/        # Componentes reutilizables
│   │   ├── lib/               # Server Actions (data fetching)
│   │   ├── contexts/          # React Context (Auth, Notifications)
│   │   └── hooks/             # Custom hooks
│   └── types/                 # Type definitions globales
│
└── package.json               # Workspace root (scripts coordinados)
```

---

## 🚀 Impacto y Resultados

- **Reducción del 70% en tiempo de seguimiento manual**: Todas las interacciones se registran automáticamente en el legajo
- **Procesamiento de carteras 10x más rápido**: Importación de 5,000 registros en < 30 segundos
- **Centralización completa**: Email, WhatsApp, gestión documental y cobranza en un único sistema
- **Notificaciones en tiempo real**: Coordinación instantánea entre operadores sobre actualizaciones críticas
- **Trazabilidad 100%**: Cada acción queda registrada con timestamp y usuario responsable

---

**Desarrollador**: Federico González  
**Período**: 2024-2025  
**Estado**: En producción activa  
**Repositorio**: Sistema privado (confidencialidad corporativa)
