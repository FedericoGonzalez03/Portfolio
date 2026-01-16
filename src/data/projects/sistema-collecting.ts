import { Project } from './types';

export const sistemaCollecting: Project = {
  slug: 'sistema-collecting',
  category: 'corporate',
  client: 'Collecting SRL',
  year: '2024-2025',
  status: 'production',
  techStack: [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Socket.IO',
    'TailwindCSS',
    'Puppeteer',
    'IMAP/SMTP',
    'Oracle Cloud'
  ],
  images: {
    hero: '/projects/sistema-collecting/hero.webp',
    gallery: [
      '/projects/sistema-collecting/dashboard.webp',
      '/projects/sistema-collecting/webmail.webp',
      '/projects/sistema-collecting/reports.webp',
      '/projects/sistema-collecting/clients.webp'
    ]
  },
  links: {
    isPrivate: true
  },
  translations: {
    en: {
      title: 'Collections Management System',
      tagline: 'Full-stack system for enterprise debt collection operations',
      description: 'Enterprise web application for Collecting SRL, a corporate debt collection company in Uruguay. Unified platform centralizing client management, invoicing, multi-channel communications, real-time notifications, and automated reporting.',
      context: 'Developed for Collecting SRL, a corporate debt collection company in Uruguay facing critical operational challenges: inefficient manual management via scattered Excel spreadsheets, no traceability of client communications (calls, visits, payment agreements), fragmented communication requiring multiple apps for email/WhatsApp/documents, no real-time team notifications, and complex manual processing of portfolios with thousands of records from legacy systems.',
      role: 'Full-Stack Developer end-to-end, responsible for the complete solution from database design to production deployment. Developed RESTful API with JWT authentication, integrated IMAP/SMTP microservice for corporate webmail, implemented real-time notifications with Socket.IO, created massive file processing with data validation, and integrated external APIs (Twilio WhatsApp Business API, Sirv CDN). On the frontend, implemented Next.js 15 App Router with Server Components/Actions, authentication with HTTP-only cookies, responsive interface with TailwindCSS, email editor with inline images and scheduled sending. Managed PostgreSQL schema design, query optimization, and database migrations. Configured production deployment on Oracle Cloud Infrastructure with Nginx reverse proxy, multi-layer security (VCN, NSGs, iptables), multi-tier backup strategy, and CI/CD pipeline with GitHub Actions.',
      features: [
        'JWT authentication system with granular roles (Admin, Supervisor, Operator)',
        'Complete CRUD for clients and invoices with advanced search and combined filters',
        'Massive Excel import with integrity validation and differential loading',
        'Chronological tracking log: calls, visits, payment agreements, notes',
        'Integrated webmail (IMAP/SMTP) with WYSIWYG editor and scheduled sending',
        'Multi-channel communications: email and WhatsApp (Twilio Business API)',
        'Real-time notifications with Socket.IO (pub/sub authenticated)',
        'Dynamic PDF generation with Puppeteer (invoices, account statements)',
        'Massive exports to Excel with corporate formatting'
      ],
      techDecisions: [
        {
          title: 'Monorepo with npm Workspaces',
          reason: 'Structure project as monorepo with frontend/ and backend/ instead of separate repositories to share TypeScript types, atomic versioning of features affecting both layers, and unified scripts.',
          benefit: 'Eliminates type duplication, simplifies coordinated deploys, and enables running both services simultaneously with a single command.'
        },
        {
          title: 'Next.js 15 App Router with Server Actions',
          reason: 'Migrate from Pages Router to leverage Server Actions instead of traditional API Routes, enabling drastic reduction of boilerplate code and better integration with HTTP-only cookies.',
          benefit: 'Eliminates manual fetch() calls from client components, improves TTFB with streaming/Suspense, and reduces JavaScript bundle sent to client with Server Components.'
        },
        {
          title: 'PostgreSQL with Parameterized Queries and Transactions',
          reason: 'Use connection pool with explicit transactions (BEGIN/COMMIT/ROLLBACK) for complex operations, particularly massive imports of 5000+ records in batches of 500.',
          benefit: 'Prevents SQL injection, guarantees data integrity with rollback on failure, and optimizes with CTEs and composite indexes for combined filters.'
        },
        {
          title: 'Socket.IO with JWT Authentication in Handshake',
          reason: 'Validate JWT token during WebSocket handshake instead of after connection to prevent unauthorized connections and associate userId to socket from the start.',
          benefit: 'Maintains consistency with REST system (same JWT), enables user tracking with Map<userId, socketIds[]> for multiple sessions, and improves security.'
        },
        {
          title: 'IMAP + SMTP Direct Processing',
          reason: 'Connect directly to client IMAP/SMTP servers instead of configuring a complete mail server (Postfix/Dovecot) to reduce infrastructure, avoid IP reputation issues, and enable bidirectional sync.',
          benefit: 'Zero infrastructure cost, transparent migration preserving current provider, and battle-tested implementation with imapflow and nodemailer libraries.'
        },
        {
          title: 'Oracle Cloud Infrastructure Always Free Tier',
          reason: 'Deploy on OCI Ampere A1.Flex VM instead of managed services (AWS, Heroku) to achieve $0 cost with 4 OCPUs + 24GB ARM RAM, with total control over the stack and co-located PostgreSQL for low latency.',
          benefit: 'Exceptional performance with ARM64 architecture comparable to paid instances, vertical scalability available, and robust networking (VCN, NSGs) included.'
        }
      ],
      challenges: [
        {
          problem: 'Massive imports without timeouts: When importing Excel files with 10,000+ invoices, server responded with 504 Gateway Timeout or ENOMEM (out of memory) due to synchronous processing of all records in a single commit and memory accumulation.',
          solution: 'Implemented batch processing (500 records per batch) with partial commits, Excel file stream processing instead of loading entire workbook into RAM, increased timeout only for import routes (300s), header normalization with regex to support multiple column name variants, and progressive logging for metrics tracking (rows processed, errors, elapsed time).'
        },
        {
          problem: 'Race conditions in real-time notifications: Users with multiple sessions (desktop + mobile) received duplicate notifications or lost "read" state when marking on one device due to simple 1 socket per user tracking without inter-socket synchronization.',
          solution: 'Changed architecture to Map<userId, socketIds[]> instead of Map<userId, socketId>, broadcast to all sockets of the same user when marking as read, ownership validation in events (only owner can mark/delete their notifications), and immediate persistence in PostgreSQL before emitting Socket.IO event (source of truth).'
        },
        {
          problem: 'Inline images in emails exceeding size limits: Users pasted screenshots (5-10 MB) in email editor, generating emails bouncing for exceeding SMTP limits (typically 25 MB with base64), creating deliverability issues.',
          solution: 'Intercepted paste event in ContentEditable editor, automatic clipboard image detection, asynchronous upload to Sirv CDN with visual feedback, replaced local blob with public URL (<img src="https://cdn.sirv.com/...">), server-side validations (5 MB max, allowed formats PNG/JPEG/WEBP/GIF), and organization by user and date (/inline/user-{id}/{YYYY-MM}/). Result: lightweight emails, cached images on CDN, better deliverability.'
        }
      ]
    },
    es: {
      title: 'Sistema de Gestión de Cobranzas',
      tagline: 'Sistema full-stack para operaciones empresariales de cobranza',
      description: 'Aplicación web empresarial para Collecting SRL, empresa de cobranzas corporativas en Uruguay. Plataforma unificada que centraliza gestión de clientes, facturación, comunicaciones multicanal, notificaciones en tiempo real y reportes automatizados.',
      context: 'Desarrollado para Collecting SRL, empresa dedicada a la gestión de cobranzas corporativas en Uruguay que enfrentaba desafíos operativos críticos: gestión manual ineficiente mediante hojas de cálculo Excel dispersas, falta de trazabilidad de comunicaciones con clientes (llamadas, visitas, acuerdos de pago), comunicación fragmentada requiriendo múltiples aplicaciones para email/WhatsApp/documentos, ausencia de notificaciones en tiempo real para coordinar equipos, y procesamiento manual complejo de carteras con miles de registros desde sistemas legacy.',
      role: 'Full-Stack Developer de inicio a fin, responsable de la solución completa desde el diseño de base de datos hasta el despliegue en producción. Desarrollé API RESTful con autenticación JWT, integré microservicio IMAP/SMTP para webmail corporativo, implementé notificaciones en tiempo real con Socket.IO, creé procesamiento masivo de archivos con validación de datos, e integré APIs externas (Twilio WhatsApp Business API, Sirv CDN). En el frontend, implementé Next.js 15 App Router con Server Components/Actions, autenticación con cookies HTTP-only, interfaz responsiva con TailwindCSS, editor de correos con imágenes inline y programación de envíos. Gestioné diseño de esquema PostgreSQL, optimización de consultas y migraciones de base de datos. Configuré despliegue en producción en Oracle Cloud Infrastructure con reverse proxy Nginx, seguridad multicapa (VCN, NSGs, iptables), estrategia de backups multi-tier y pipeline CI/CD con GitHub Actions.',
      features: [
        'Sistema de autenticación JWT con roles granulares (Admin, Supervisor, Operador)',
        'CRUD completo de clientes y facturas con búsqueda avanzada y filtros combinables',
        'Importación masiva desde Excel con validación de integridad y carga diferencial',
        'Legajo de seguimiento cronológico: llamadas, visitas, acuerdos de pago, notas',
        'Webmail integrado (IMAP/SMTP) con editor WYSIWYG y programación de envíos',
        'Comunicaciones multicanal: email y WhatsApp (Twilio Business API)',
        'Notificaciones en tiempo real con Socket.IO (pub/sub autenticado)',
        'Generación dinámica de PDFs con Puppeteer (facturas, estados de cuenta)',
        'Exportaciones masivas a Excel con formato corporativo'
      ],
      techDecisions: [
        {
          title: 'Monorepo con npm Workspaces',
          reason: 'Estructurar el proyecto como monorepo con frontend/ y backend/ en lugar de repositorios separados para compartir tipos TypeScript, versionado atómico de features que afectan ambas capas, y scripts unificados.',
          benefit: 'Elimina duplicación de tipos, simplifica deploys coordinados y permite ejecutar ambos servicios simultáneamente con un solo comando.'
        },
        {
          title: 'Next.js 15 App Router con Server Actions',
          reason: 'Migrar de Pages Router para aprovechar Server Actions en lugar de API Routes tradicionales, permitiendo reducción drástica de código boilerplate y mejor integración con cookies HTTP-only.',
          benefit: 'Elimina llamadas fetch() manuales desde componentes cliente, mejora TTFB con streaming/Suspense, y reduce bundle de JavaScript enviado al cliente con Server Components.'
        },
        {
          title: 'PostgreSQL con Consultas Parametrizadas y Transacciones',
          reason: 'Usar pool de conexiones con transacciones explícitas (BEGIN/COMMIT/ROLLBACK) para operaciones complejas, particularmente importaciones masivas de 5000+ registros en lotes de 500.',
          benefit: 'Previene SQL injection, garantiza integridad de datos con rollback ante fallos, y optimiza con CTEs e índices compuestos para filtros combinables.'
        },
        {
          title: 'Socket.IO con Autenticación JWT en Handshake',
          reason: 'Validar token JWT durante el handshake de WebSocket en lugar de después de conectar para prevenir conexiones no autorizadas y asociar userId al socket desde el inicio.',
          benefit: 'Mantiene coherencia con sistema REST (mismo JWT), permite tracking de usuarios con Map<userId, socketIds[]> para múltiples sesiones, y mejora seguridad.'
        },
        {
          title: 'Procesamiento IMAP + SMTP Directo',
          reason: 'Conectar directamente a servidores IMAP/SMTP del cliente en lugar de configurar un servidor de correo completo (Postfix/Dovecot) para reducir infraestructura, evitar problemas de reputación de IP, y permitir sincronización bidireccional.',
          benefit: 'Costo de infraestructura cero, migración transparente conservando proveedor actual, e implementación battle-tested con librerías imapflow y nodemailer.'
        },
        {
          title: 'Oracle Cloud Infrastructure Always Free Tier',
          reason: 'Desplegar en VM Ampere A1.Flex de OCI en lugar de servicios gestionados (AWS, Heroku) para lograr costo $0 con 4 OCPUs + 24GB RAM ARM, con control total sobre el stack y PostgreSQL co-ubicado para baja latencia.',
          benefit: 'Performance excepcional con arquitectura ARM64 comparable a instancias pagas, escalabilidad vertical disponible, y networking robusto (VCN, NSGs) incluido.'
        }
      ],
      challenges: [
        {
          problem: 'Importaciones masivas sin timeouts: Al importar archivos Excel con 10,000+ facturas, el servidor respondía con 504 Gateway Timeout o ENOMEM (out of memory) debido al procesamiento síncrono de todos los registros en un único commit y acumulación de objetos en memoria.',
          solution: 'Implementé procesamiento por lotes (500 registros por batch) con commits parciales, stream processing de archivos Excel en lugar de cargar todo el workbook en RAM, timeout aumentado solo para rutas de importación (300s), normalización de encabezados con regex para soportar múltiples variantes de nombres de columnas, y logging progresivo para tracking de métricas (filas procesadas, errores, tiempo transcurrido).'
        },
        {
          problem: 'Race conditions en notificaciones en tiempo real: Usuarios con múltiples sesiones (desktop + mobile) recibían notificaciones duplicadas o perdían estado de "leído" al marcar en un dispositivo debido al tracking simple de 1 socket por usuario sin sincronización entre sockets.',
          solution: 'Cambié arquitectura a Map<userId, socketIds[]> en lugar de Map<userId, socketId>, broadcast a todos los sockets del mismo usuario al marcar como leída, validación de ownership en eventos (solo el dueño puede marcar/eliminar sus notificaciones), y persistencia inmediata en PostgreSQL antes de emitir evento Socket.IO (source of truth).'
        },
        {
          problem: 'Imágenes inline en emails excediendo límites de tamaño: Usuarios pegaban capturas de pantalla (5-10 MB) en el editor de correos, generando emails que rebotaban por exceder límites de SMTP (típicamente 25 MB con base64), creando problemas de deliverability.',
          solution: 'Intercepté evento paste en editor ContentEditable, detección automática de imágenes en clipboard, subida asíncrona a Sirv CDN con feedback visual, reemplazo de blob local por URL pública (<img src="https://cdn.sirv.com/...">), validaciones server-side (5 MB máximo, formatos permitidos PNG/JPEG/WEBP/GIF), y organización por usuario y fecha (/inline/user-{id}/{YYYY-MM}/). Resultado: emails ligeros, imágenes cacheadas en CDN, mejor deliverability.'
        }
      ]
    },
    pt: {
      title: 'Sistema de Gestão de Cobranças',
      tagline: 'Sistema full-stack para operações empresariais de cobrança',
      description: 'Aplicação web empresarial para Collecting SRL, empresa de cobranças corporativas no Uruguai. Plataforma unificada que centraliza gestão de clientes, faturamento, comunicações multicanal, notificações em tempo real e relatórios automatizados.',
      context: 'Desenvolvido para Collecting SRL, empresa dedicada à gestão de cobranças corporativas no Uruguai que enfrentava desafios operacionais críticos: gestão manual ineficiente através de planilhas Excel dispersas, falta de rastreabilidade de comunicações com clientes (chamadas, visitas, acordos de pagamento), comunicação fragmentada exigindo múltiplos aplicativos para email/WhatsApp/documentos, ausência de notificações em tempo real para coordenar equipes, e processamento manual complexo de carteiras com milhares de registros de sistemas legados.',
      role: 'Full-Stack Developer de ponta a ponta, responsável pela solução completa desde o design do banco de dados até a implantação em produção. Desenvolvi API RESTful com autenticação JWT, integrei microserviço IMAP/SMTP para webmail corporativo, implementei notificações em tempo real com Socket.IO, criei processamento massivo de arquivos com validação de dados, e integrei APIs externas (Twilio WhatsApp Business API, Sirv CDN). No frontend, implementei Next.js 15 App Router com Server Components/Actions, autenticação com cookies HTTP-only, interface responsiva com TailwindCSS, editor de e-mails com imagens inline e agendamento de envios. Gerenciei design de esquema PostgreSQL, otimização de consultas e migrações de banco de dados. Configurei implantação em produção na Oracle Cloud Infrastructure com reverse proxy Nginx, segurança multicamadas (VCN, NSGs, iptables), estratégia de backups multi-tier e pipeline CI/CD com GitHub Actions.',
      features: [
        'Sistema de autenticação JWT com papéis granulares (Admin, Supervisor, Operador)',
        'CRUD completo de clientes e faturas com busca avançada e filtros combináveis',
        'Importação massiva do Excel com validação de integridade e carga diferencial',
        'Registro de acompanhamento cronológico: chamadas, visitas, acordos de pagamento, notas',
        'Webmail integrado (IMAP/SMTP) com editor WYSIWYG e agendamento de envios',
        'Comunicações multicanal: email e WhatsApp (Twilio Business API)',
        'Notificações em tempo real com Socket.IO (pub/sub autenticado)',
        'Geração dinâmica de PDFs com Puppeteer (faturas, extratos de conta)',
        'Exportações massivas para Excel com formatação corporativa'
      ],
      techDecisions: [
        {
          title: 'Monorepo com npm Workspaces',
          reason: 'Estruturar o projeto como monorepo com frontend/ e backend/ em vez de repositórios separados para compartilhar tipos TypeScript, versionamento atômico de features que afetam ambas as camadas, e scripts unificados.',
          benefit: 'Elimina duplicação de tipos, simplifica implantações coordenadas e permite executar ambos os serviços simultaneamente com um único comando.'
        },
        {
          title: 'Next.js 15 App Router com Server Actions',
          reason: 'Migrar do Pages Router para aproveitar Server Actions em vez de API Routes tradicionais, permitindo redução drástica de código boilerplate e melhor integração com cookies HTTP-only.',
          benefit: 'Elimina chamadas fetch() manuais de componentes cliente, melhora TTFB com streaming/Suspense, e reduz bundle de JavaScript enviado ao cliente com Server Components.'
        },
        {
          title: 'PostgreSQL com Consultas Parametrizadas e Transações',
          reason: 'Usar pool de conexões com transações explícitas (BEGIN/COMMIT/ROLLBACK) para operações complexas, particularmente importações massivas de 5000+ registros em lotes de 500.',
          benefit: 'Previne SQL injection, garante integridade de dados com rollback em caso de falha, e otimiza com CTEs e índices compostos para filtros combináveis.'
        },
        {
          title: 'Socket.IO com Autenticação JWT no Handshake',
          reason: 'Validar token JWT durante o handshake do WebSocket em vez de após conectar para prevenir conexões não autorizadas e associar userId ao socket desde o início.',
          benefit: 'Mantém consistência com sistema REST (mesmo JWT), permite rastreamento de usuários com Map<userId, socketIds[]> para múltiplas sessões, e melhora segurança.'
        },
        {
          title: 'Processamento IMAP + SMTP Direto',
          reason: 'Conectar diretamente aos servidores IMAP/SMTP do cliente em vez de configurar um servidor de e-mail completo (Postfix/Dovecot) para reduzir infraestrutura, evitar problemas de reputação de IP, e permitir sincronização bidirecional.',
          benefit: 'Custo de infraestrutura zero, migração transparente preservando provedor atual, e implementação battle-tested com bibliotecas imapflow e nodemailer.'
        },
        {
          title: 'Oracle Cloud Infrastructure Always Free Tier',
          reason: 'Implantar em VM Ampere A1.Flex da OCI em vez de serviços gerenciados (AWS, Heroku) para alcançar custo $0 com 4 OCPUs + 24GB RAM ARM, com controle total sobre o stack e PostgreSQL co-localizado para baixa latência.',
          benefit: 'Performance excepcional com arquitetura ARM64 comparável a instâncias pagas, escalabilidade vertical disponível, e networking robusto (VCN, NSGs) incluído.'
        }
      ],
      challenges: [
        {
          problem: 'Importações massivas sem timeouts: Ao importar arquivos Excel com 10.000+ faturas, o servidor respondia com 504 Gateway Timeout ou ENOMEM (out of memory) devido ao processamento síncrono de todos os registros em um único commit e acumulação de objetos na memória.',
          solution: 'Implementei processamento em lotes (500 registros por batch) com commits parciais, stream processing de arquivos Excel em vez de carregar todo o workbook na RAM, timeout aumentado apenas para rotas de importação (300s), normalização de cabeçalhos com regex para suportar múltiplas variantes de nomes de colunas, e logging progressivo para rastreamento de métricas (linhas processadas, erros, tempo decorrido).'
        },
        {
          problem: 'Race conditions em notificações em tempo real: Usuários com múltiplas sessões (desktop + mobile) recebiam notificações duplicadas ou perdiam estado de "lido" ao marcar em um dispositivo devido ao rastreamento simples de 1 socket por usuário sem sincronização entre sockets.',
          solution: 'Mudei arquitetura para Map<userId, socketIds[]> em vez de Map<userId, socketId>, broadcast para todos os sockets do mesmo usuário ao marcar como lida, validação de propriedade em eventos (apenas o dono pode marcar/deletar suas notificações), e persistência imediata no PostgreSQL antes de emitir evento Socket.IO (source of truth).'
        },
        {
          problem: 'Imagens inline em e-mails excedendo limites de tamanho: Usuários colavam capturas de tela (5-10 MB) no editor de e-mails, gerando e-mails que retornavam por exceder limites de SMTP (tipicamente 25 MB com base64), criando problemas de deliverability.',
          solution: 'Interceptei evento paste no editor ContentEditable, detecção automática de imagens no clipboard, upload assíncrono para Sirv CDN com feedback visual, substituição de blob local por URL pública (<img src="https://cdn.sirv.com/...">), validações server-side (5 MB máximo, formatos permitidos PNG/JPEG/WEBP/GIF), e organização por usuário e data (/inline/user-{id}/{YYYY-MM}/). Resultado: e-mails leves, imagens em cache no CDN, melhor deliverability.'
        }
      ]
    }
  }
};
