import { Project } from './types';

export const kodatek: Project = {
  slug: 'kodatek',
  category: 'landing',
  client: 'KodaTek (Own Company)',
  year: '2024',
  status: 'production',
  techStack: [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'TailwindCSS 4',
    'Claude AI',
    'Pollinations AI',
    'Cal.com API',
    'Nodemailer',
    'Framer Motion',
    'Zoho Mail'
  ],
  images: {
    hero: '/projects/kodatek/hero.webp',
    gallery: [
      '/projects/kodatek/chatbot.webp',
      '/projects/kodatek/services.webp',
      '/projects/kodatek/contact.webp'
    ]
  },
  links: {
    liveDemo: 'https://kodatekuy.com',
    isPrivate: false,
    github: '#'
  },
  translations: {
    en: {
      title: 'KodaTek Landing Page',
      tagline: 'AI-powered landing page with conversational chatbot and automated scheduling',
      description: 'Modern landing page for KodaTek, my custom software development company, featuring an AI conversational assistant that automates lead capture and qualification, answers questions about services, and schedules discovery meetings directly to my calendar without manual intervention.',
      context: 'Created for KodaTek, my own software development company. Needed a modern digital presence that not only presented company services but automated lead capture and qualification through an AI conversational assistant. The goal was reducing friction in the initial consultation process and enabling meeting scheduling without manual intervention, transforming interested visitors into qualified leads automatically through an interactive experience.',
      role: 'Founder & Full-Stack Developer end-to-end. As founder of KodaTek, developed complete solution from start to finish: designed and implemented interface with Next.js 15, developed APIs for AI chat, transactional email sending and external service integration, implemented conversational chatbot with Claude (via Pollinations AI) including function calling for meeting scheduling, configured project deployment and environment variable management for Vercel deployment, and connected with Cal.com API v2 for calendar management and availability, and Zoho Mail for email notifications.',
      features: [
        'Modern responsive landing page with visual effects (grid, gradients) and interactive service cards with glow effect',
        'Conversational AI Chatbot (Koda AI) integrated with Claude via Pollinations AI',
        'Function calling system for executing actions (query availability, schedule meetings)',
        'Customized knowledge base about KodaTek services and processes',
        'Floating chat widget interface with animations and loading states',
        'Automatic scheduling system: real-time availability query from Cal.com API v2, slots presentation grouped by day and user timezone, automatic calendar event creation',
        'Flexible duration management (15, 30, 45, 60, 75, 90 minutes)',
        'Transactional email sending from contact form with Zoho Mail SMTP integration',
        'Toast notifications for instant user action feedback',
        'Interactive components with advanced effects: GlowCard with orange hover glow, DelayedAnimationContainer with staggered animations',
        'Dynamic legal pages with Markdown rendering (terms and privacy policy)'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 with App Router and React Server Components',
          reason: 'Leverage latest Next.js features for automatic optimization (Code Splitting, Image Optimization), improved SEO, and strategic mixing of server/client components.',
          benefit: 'Static sections render on server while interactive components (chat, forms) are client-side, achieving optimal balance between performance and interactivity. Results in better Core Web Vitals and reduced initial JavaScript bundle.'
        },
        {
          title: 'Pollinations AI as Proxy for Claude',
          reason: 'Access to advanced AI models (Claude) without needing to manage API keys from multiple providers, with native support for function calling and flexible system prompts.',
          benefit: 'Fast and economical implementation of conversational AI capabilities with full control over tools and system prompts. Simplified integration compared to direct provider APIs, though with trade-off of third-party dependency mitigated by optional API key configuration and exhaustive logging.'
        },
        {
          title: 'Cal.com API v2 for Calendar Management',
          reason: 'Cal.com provides robust API for programmatically querying availability and creating bookings, with support for multiple timezones and flexible durations.',
          benefit: 'Complete automation of scheduling flow without building calendar logic from scratch. Native handling of complex scenarios like timezone conversions, availability conflicts, and duration rounding to allowed values (15, 30, 45, 60, 75, 90 min).'
        },
        {
          title: 'Function Calling with AI for User Actions',
          reason: 'Allows chatbot to execute real actions (query availability, schedule meetings) instead of just answering questions, providing natural conversational experience.',
          benefit: 'User describes their need in natural language and AI coordinates necessary API calls. Implemented loop system with round limit (MAX_ROUNDS = 5) to handle multiple sequential function calls and prevent infinite loops. Enables complex multi-step workflows in single conversation.'
        }
      ],
      challenges: [
        {
          problem: 'Managing multiple sequential tool calls: Chatbot needed to execute multiple functions in sequence (get current date → query availability → schedule meeting). Pollinations response could include tool calls that generated new tool calls, creating potential for infinite loops.',
          solution: 'Implemented round-based system with loop allowing model to execute multiple sequential actions, evaluate intermediate results, and make informed decisions. Round limit (MAX_ROUNDS = 5) prevents infinite loops while allowing necessary multi-step workflows. Each round processes tool results and feeds them back to model for next decision.'
        },
        {
          problem: 'Converting natural language to API parameters: Users express meeting duration in natural language ("hour and a half", "1 hour", "45 minutes"), but Cal.com API only accepts specific values (15, 30, 45, 60, 75, 90). Mismatched values caused API errors.',
          solution: 'Implemented rounding logic to nearest allowed value, configured chatbot system prompt to interpret common expressions and convert them correctly, and added validation layer that catches invalid durations before API calls. Result: users can request meetings naturally without knowing technical constraints.'
        },
        {
          problem: 'Timezone handling in scheduling: Cal.com API requires dates in ISO 8601 with UTC, but needed to show times to user in their local timezone to avoid confusion and booking errors. Mixed timezone representations caused frequent user mistakes.',
          solution: 'API returns timeISO in UTC for each available slot, used toLocaleTimeString with user timezone (required by model via chat) to display local times in UI, and always send UTC back to API for booking confirmation. This eliminates ambiguity and common errors in multi-timezone systems while maintaining user-friendly display.'
        }
      ]
    },
    es: {
      title: 'Landing Page de KodaTek',
      tagline: 'Landing page con IA y chatbot conversacional con agendamiento automatizado',
      description: 'Landing page moderna para KodaTek, mi empresa de desarrollo de software personalizado, con asistente de IA conversacional que automatiza la captación y calificación de leads, responde preguntas sobre servicios y agenda reuniones de descubrimiento directamente en mi calendario sin intervención manual.',
      context: 'Creado para KodaTek, mi propia empresa de desarrollo de software. Necesitaba una presencia digital moderna que no solo presentara los servicios de la empresa, sino que automatizara la captación y calificación de leads mediante un asistente de IA conversacional. El objetivo era reducir la fricción en el proceso de consulta inicial y permitir el agendamiento de reuniones sin intervención manual, transformando visitantes interesados en leads calificados de forma automatizada mediante una experiencia interactiva.',
      role: 'Fundador & Full-Stack Developer de inicio a fin. Como fundador de KodaTek, desarrollé la solución completa de principio a fin: diseñé e implementé la interfaz con Next.js 15, desarrollé APIs para chat con IA, envío de emails transaccionales e integración con servicios externos, implementé chatbot conversacional con Claude (vía Pollinations AI) incluyendo function calling para agendamiento de reuniones, configuré deployment del proyecto y gestión de variables de entorno para deployment en Vercel, y conecté con Cal.com API v2 para gestión de calendario y disponibilidad, y Zoho Mail para notificaciones por correo.',
      features: [
        'Landing page moderna y responsiva con efectos visuales (grid, gradientes) y cards de servicios interactivas con efecto glow',
        'Chatbot de IA Conversacional (Koda AI) integrado con Claude vía Pollinations AI',
        'Sistema de function calling para ejecutar acciones (consultar disponibilidad, agendar reuniones)',
        'Base de conocimientos personalizada sobre servicios y procesos de KodaTek',
        'Interfaz de chat flotante tipo widget con animaciones y estados de carga',
        'Sistema de agendamiento automático: consulta de disponibilidad en tiempo real desde Cal.com API v2, presentación de slots agrupados por día y zona horaria del usuario, creación automática de eventos de calendario',
        'Gestión de duraciones flexibles (15, 30, 45, 60, 75, 90 minutos)',
        'Envío de emails transaccionales desde formulario de contacto con integración Zoho Mail SMTP',
        'Toast notifications para feedback instantáneo de acciones del usuario',
        'Componentes interactivos con efectos avanzados: GlowCard con brillo naranja en hover, DelayedAnimationContainer con animaciones escalonadas',
        'Páginas legales dinámicas con renderizado de Markdown (términos y política de privacidad)'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 con App Router y React Server Components',
          reason: 'Aprovechar las últimas features de Next.js para optimización automática (Code Splitting, Image Optimization), mejorar SEO y permitir mezclar server/client components estratégicamente.',
          benefit: 'Las secciones estáticas se renderizan en el servidor, mientras que componentes interactivos (chat, formularios) son client-side, logrando el balance óptimo entre performance e interactividad. Resulta en mejores Core Web Vitals y bundle inicial de JavaScript reducido.'
        },
        {
          title: 'Pollinations AI como Proxy para Claude',
          reason: 'Acceso a modelos de IA avanzados (Claude) sin necesidad de gestionar API keys de múltiples proveedores, con soporte nativo para function calling y system prompts flexibles.',
          benefit: 'Implementación rápida y económica de capacidades de IA conversacional, con control total sobre tools y system prompts. Integración simplificada comparada con APIs directas de proveedores, aunque con trade-off de dependencia third-party mitigado con configuración de API key opcional y logging exhaustivo.'
        },
        {
          title: 'Cal.com API v2 para Gestión de Calendario',
          reason: 'Cal.com proporciona una API robusta para consultar disponibilidad y crear bookings programáticamente, con soporte de múltiples zonas horarias y duraciones flexibles.',
          benefit: 'Automatización completa del flujo de agendamiento sin construir lógica de calendario desde cero. Manejo nativo de escenarios complejos como conversiones de zona horaria, conflictos de disponibilidad, y redondeo de duraciones a valores permitidos (15, 30, 45, 60, 75, 90 min).'
        },
        {
          title: 'Function Calling con IA para Acciones del Usuario',
          reason: 'Permite que el chatbot ejecute acciones reales (consultar disponibilidad, agendar reuniones) en lugar de solo responder preguntas, proporcionando experiencia conversacional natural.',
          benefit: 'El usuario describe su necesidad en lenguaje natural y la IA coordina las llamadas a APIs necesarias. Implementé un sistema de loops con límite de rounds (MAX_ROUNDS = 5) para manejar múltiples function calls secuenciales y prevenir loops infinitos. Permite workflows complejos de múltiples pasos en una sola conversación.'
        }
      ],
      challenges: [
        {
          problem: 'Gestión de múltiples tool calls secuenciales: El chatbot necesitaba ejecutar múltiples funciones en secuencia (obtener fecha actual → consultar disponibilidad → agendar reunión). La respuesta de Pollinations podía incluir tool calls que generaban nuevos tool calls, creando potencial para loops infinitos.',
          solution: 'Implementé un sistema de rounds con loop que permite que el modelo ejecute múltiples acciones secuenciales, evalúe resultados intermedios y tome decisiones informadas. El límite de rounds (MAX_ROUNDS = 5) previene loops infinitos mientras permite workflows multi-paso necesarios. Cada round procesa resultados de tools y los retroalimenta al modelo para la siguiente decisión.'
        },
        {
          problem: 'Conversión de lenguaje natural a parámetros de API: Los usuarios expresan duración de reuniones en lenguaje natural ("hora y media", "1 hora", "45 minutos"), pero Cal.com API solo acepta valores específicos (15, 30, 45, 60, 75, 90). Valores no coincidentes causaban errores de API.',
          solution: 'Implementé lógica de redondeo al valor permitido más cercano, configuré el system prompt del chatbot para interpretar expresiones comunes y convertirlas correctamente, y agregué capa de validación que captura duraciones inválidas antes de llamadas a API. Resultado: usuarios pueden solicitar reuniones naturalmente sin conocer restricciones técnicas.'
        },
        {
          problem: 'Manejo de zonas horarias en agendamiento: Cal.com API requiere fechas en ISO 8601 con UTC, pero necesitaba mostrar horarios al usuario en su zona horaria local para evitar confusión y errores de reserva. Representaciones mixtas de zona horaria causaban errores frecuentes del usuario.',
          solution: 'La API devuelve timeISO en UTC para cada slot disponible, usé toLocaleTimeString con timezone del usuario (lo requiere el modelo por chat) para mostrar horarios locales en la UI, y siempre envío UTC de vuelta a la API para confirmación de reserva. Esto elimina la ambigüedad y errores comunes en sistemas multi-zona horaria mientras mantiene visualización amigable para el usuario.'
        }
      ]
    },
    pt: {
      title: 'Landing Page da KodaTek',
      tagline: 'Landing page com IA e chatbot conversacional com agendamento automatizado',
      description: 'Landing page moderna para KodaTek, minha empresa de desenvolvimento de software personalizado, com assistente de IA conversacional que automatiza a captura e qualificação de leads, responde perguntas sobre serviços e agenda reuniões de descoberta diretamente no meu calendário sem intervenção manual.',
      context: 'Criado para KodaTek, minha própria empresa de desenvolvimento de software. Precisava de uma presença digital moderna que não apenas apresentasse os serviços da empresa, mas automatizasse a captura e qualificação de leads através de um assistente de IA conversacional. O objetivo era reduzir o atrito no processo de consulta inicial e permitir o agendamento de reuniões sem intervenção manual, transformando visitantes interessados em leads qualificados de forma automatizada através de uma experiência interativa.',
      role: 'Fundador & Full-Stack Developer de ponta a ponta. Como fundador da KodaTek, desenvolvi a solução completa do início ao fim: projetei e implementei a interface com Next.js 15, desenvolvi APIs para chat com IA, envio de emails transacionais e integração com serviços externos, implementei chatbot conversacional com Claude (via Pollinations AI) incluindo function calling para agendamento de reuniões, configurei deployment do projeto e gestão de variáveis de ambiente para deployment no Vercel, e conectei com Cal.com API v2 para gestão de calendário e disponibilidade, e Zoho Mail para notificações por e-mail.',
      features: [
        'Landing page moderna e responsiva com efeitos visuais (grid, gradientes) e cards de serviços interativos com efeito glow',
        'Chatbot de IA Conversacional (Koda AI) integrado com Claude via Pollinations AI',
        'Sistema de function calling para executar ações (consultar disponibilidade, agendar reuniões)',
        'Base de conhecimentos personalizada sobre serviços e processos da KodaTek',
        'Interface de chat flutuante tipo widget com animações e estados de carregamento',
        'Sistema de agendamento automático: consulta de disponibilidade em tempo real da Cal.com API v2, apresentação de slots agrupados por dia e fuso horário do usuário, criação automática de eventos de calendário',
        'Gestão de durações flexíveis (15, 30, 45, 60, 75, 90 minutos)',
        'Envio de emails transacionais do formulário de contato com integração Zoho Mail SMTP',
        'Toast notifications para feedback instantâneo de ações do usuário',
        'Componentes interativos com efeitos avançados: GlowCard com brilho laranja no hover, DelayedAnimationContainer com animações escalonadas',
        'Páginas legais dinâmicas com renderização de Markdown (termos e política de privacidade)'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 com App Router e React Server Components',
          reason: 'Aproveitar as últimas features do Next.js para otimização automática (Code Splitting, Image Optimization), melhorar SEO e permitir misturar server/client components estrategicamente.',
          benefit: 'As seções estáticas renderizam no servidor enquanto componentes interativos (chat, formulários) são client-side, alcançando o equilíbrio ideal entre performance e interatividade. Resulta em melhores Core Web Vitals e bundle inicial de JavaScript reduzido.'
        },
        {
          title: 'Pollinations AI como Proxy para Claude',
          reason: 'Acesso a modelos de IA avançados (Claude) sem necessidade de gerenciar API keys de múltiplos provedores, com suporte nativo para function calling e system prompts flexíveis.',
          benefit: 'Implementação rápida e econômica de capacidades de IA conversacional, com controle total sobre tools e system prompts. Integração simplificada comparada com APIs diretas de provedores, embora com trade-off de dependência third-party mitigada com configuração de API key opcional e logging exaustivo.'
        },
        {
          title: 'Cal.com API v2 para Gestão de Calendário',
          reason: 'Cal.com fornece uma API robusta para consultar disponibilidade e criar bookings programaticamente, com suporte de múltiplos fusos horários e durações flexíveis.',
          benefit: 'Automação completa do fluxo de agendamento sem construir lógica de calendário do zero. Tratamento nativo de cenários complexos como conversões de fuso horário, conflitos de disponibilidade, e arredondamento de durações para valores permitidos (15, 30, 45, 60, 75, 90 min).'
        },
        {
          title: 'Function Calling com IA para Ações do Usuário',
          reason: 'Permite que o chatbot execute ações reais (consultar disponibilidade, agendar reuniões) em vez de apenas responder perguntas, proporcionando experiência conversacional natural.',
          benefit: 'O usuário descreve sua necessidade em linguagem natural e a IA coordena as chamadas a APIs necessárias. Implementei um sistema de loops com limite de rounds (MAX_ROUNDS = 5) para lidar com múltiplos function calls sequenciais e prevenir loops infinitos. Permite workflows complexos de múltiplas etapas em uma única conversa.'
        }
      ],
      challenges: [
        {
          problem: 'Gestão de múltiplos tool calls sequenciais: O chatbot precisava executar múltiplas funções em sequência (obter data atual → consultar disponibilidade → agendar reunião). A resposta do Pollinations podia incluir tool calls que geravam novos tool calls, criando potencial para loops infinitos.',
          solution: 'Implementei um sistema de rounds com loop que permite que o modelo execute múltiplas ações sequenciais, avalie resultados intermediários e tome decisões informadas. O limite de rounds (MAX_ROUNDS = 5) previne loops infinitos enquanto permite workflows multi-passo necessários. Cada round processa resultados de tools e os retroalimenta ao modelo para a próxima decisão.'
        },
        {
          problem: 'Conversão de linguagem natural para parâmetros de API: Os usuários expressam duração de reuniões em linguagem natural ("hora e meia", "1 hora", "45 minutos"), mas Cal.com API só aceita valores específicos (15, 30, 45, 60, 75, 90). Valores não coincidentes causavam erros de API.',
          solution: 'Implementei lógica de arredondamento para o valor permitido mais próximo, configurei o system prompt do chatbot para interpretar expressões comuns e convertê-las corretamente, e adicionei camada de validação que captura durações inválidas antes de chamadas à API. Resultado: usuários podem solicitar reuniões naturalmente sem conhecer restrições técnicas.'
        },
        {
          problem: 'Tratamento de fusos horários no agendamento: Cal.com API requer datas em ISO 8601 com UTC, mas precisava mostrar horários ao usuário em seu fuso horário local para evitar confusão e erros de reserva. Representações mistas de fuso horário causavam erros frequentes do usuário.',
          solution: 'A API retorna timeISO em UTC para cada slot disponível, usei toLocaleTimeString com timezone do usuário (requerido pelo modelo via chat) para mostrar horários locais na UI, e sempre envio UTC de volta para a API para confirmação de reserva. Isso elimina a ambiguidade e erros comuns em sistemas multi-fuso horário enquanto mantém visualização amigável para o usuário.'
        }
      ]
    }
  }
};
