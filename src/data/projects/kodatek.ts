import { Project } from './types';

export const kodatek: Project = {
  slug: 'kodatek',
  category: 'landing',
  client: 'KodaTek (Own Company)',
  year: '2024-2026',
  status: 'production',
  techStack: [
    'Next.js 15',
    'React 19',
    'TypeScript',
    'TailwindCSS 4',
    'Pollinations AI',
    'Cal.com API v2',
    'Nodemailer',
    'Zoho Mail SMTP',
    'Framer Motion',
    'Google Ads / PayPal Hosted Buttons'
  ],
  images: {
    hero: '/projects/kodatek/hero.webp',
    gallery: [
      '/projects/kodatek/chatbot.webp',
      '/projects/kodatek/solutions.webp',
      '/projects/kodatek/restaurants.webp',
      '/projects/kodatek/contact.webp'
    ]
  },
  links: {
    liveDemo: 'https://kodatekuy.com',
  },
  translations: {
    en: {
      title: 'KodaTek Website',
      tagline: 'SEO-focused multi-page website with AI scheduling assistant, industry solution pages and resource hub',
      description: 'Production website for KodaTek that evolved from a single landing page into a broader acquisition and discovery platform for Uruguayan businesses. It combines a persuasive homepage, service pages, industry-specific solution pages, educational resources, contact flows, a paid maintenance offer, and an AI assistant that can answer questions and schedule discovery calls.',
      context: 'Built for KodaTek, my own software company. What started as a landing page became a much larger marketing and acquisition system after expanding the information architecture around services, industries and search intent. The goal shifted from simply presenting the company to creating a site that could attract qualified traffic, educate prospects, route them to the right offer, capture inquiries, and still let interested visitors book a conversation with minimal friction.',
      role: 'Founder & Full-Stack Developer end-to-end. I designed and implemented the full App Router codebase, built reusable SEO and content systems, created the service/solution/resource page architecture, implemented the homepage AI chat assistant with Pollinations tool calling and Cal.com scheduling, integrated contact email delivery, Google Ads, Klaviyo, Vercel analytics, and PayPal hosted subscriptions for the maintenance offer, and added automated tests for pages, metadata, sitemap and shared components.',
      features: [
        '39-page production website spanning homepage, services, contact, about, legal, thank-you, maintenance, industry solutions and resource guides',
        'Service hub plus 10 commercial service landing pages tailored to Uruguayan search intent',
        'Solutions hub with a filterable explorer and 18 solution entries combining static pages with dynamic /soluciones/[servicio]/[industria] generation',
        'Resource hub with 8 long-form playbooks, FAQ sections, internal linking and diagnosis CTAs',
        'Shared SEO layer with canonical metadata, Open Graph/Twitter cards, Organization, LocalBusiness, Breadcrumb, FAQ and Service JSON-LD, plus generated sitemap support',
        'Homepage-only floating Koda chat widget powered by Pollinations using the claude-fast model with function calling',
        'Tool-based scheduling flow that gets current date, queries Cal.com availability, normalizes meeting durations and books meetings with timezone-aware slots',
        'Reusable contact system with integrated homepage contact/footer block, dedicated contact page, form validation and redirect to a thank-you page',
        'Transactional email delivery through Nodemailer and Zoho SMTP for contact form submissions',
        'Dedicated monthly landing-page maintenance sales page with PayPal Hosted Buttons subscription checkout',
        'Global conversion and performance instrumentation through Google Ads, Klaviyo, Vercel Analytics, Speed Insights, plus 48 automated tests across pages, components and helpers'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 App Router with shared SEO builders',
          reason: 'The site grew from a single landing page into 39 routes, so I needed a structure that kept metadata, schema, routing and layout logic consistent across both static and generated pages.',
          benefit: 'Reusable helpers generate canonical metadata, Open Graph/Twitter tags, breadcrumb/FAQ/service JSON-LD and shared layout behavior, which reduced duplication and made new pages faster to publish safely.'
        },
        {
          title: 'Structured content model for industry and SEO pages',
          reason: 'Service and industry combinations were multiplying, so hand-authoring each page independently would create content drift and slow future expansion.',
          benefit: 'A shared content model in pseo.ts, plus generateStaticParams, solutionsCatalog.ts and sitemap.ts, lets the site scale dynamic solution routes while keeping copy, links, filters and indexing aligned.'
        },
        {
          title: 'Pollinations AI with tool calling and Cal.com booking helpers',
          reason: 'The assistant still needed to answer questions and convert qualified interest into scheduled calls without building a full agent platform from scratch.',
          benefit: 'The homepage chat uses Pollinations with the claude-fast model, tool calls for current date, availability lookup and meeting booking, and a round-based API loop so Koda can handle multi-step scheduling inside one conversation.'
        },
        {
          title: 'Reusable commercial sections plus centralized layout integrations',
          reason: 'The site now includes service pages, resource pages, a contact flow, a maintenance offer and conversion scripts, so repeating these concerns page by page would be brittle.',
          benefit: 'Shared components such as ServicesOverview, InternalLinkSection, FaqAccordion, HomeContactFooter and Footer, together with layout-level Google Ads, Klaviyo, Vercel Analytics and Speed Insights, keep UX and tracking consistent across the site.'
        }
      ],
      challenges: [
        {
          problem: 'Scaling the site from a single landing page into a 39-page acquisition website created a duplication risk across metadata, schemas, CTAs, FAQs and internal linking. Manually repeating that structure on every new page would make the codebase harder to maintain and easier to break.',
          solution: 'I extracted shared SEO builders, reusable page sections and common layout concerns, then backed them with tests for metadata, sitemap and shared UI. That let new pages reuse the same primitives instead of copying page-specific implementations.'
        },
        {
          problem: 'Industry pages needed to grow in both breadth and consistency: the site now combines service pages, static solution pages and dynamic /soluciones/[servicio]/[industria] routes. Without a shared content model, messaging, filtering and indexing would drift quickly.',
          solution: 'I modeled the programmatic content in pseo.ts, derived explorer data from solutionsCatalog.ts, generated static params for build-time rendering, and generated sitemap entries from the same data source. This kept solution discovery, interlinking and SEO aligned as new industries were added.'
        },
        {
          problem: 'The AI assistant still has to manage multi-step scheduling flows: get the current date, query availability, present timezone-aware slots and book the meeting, all while avoiding repeated tool calls or infinite loops.',
          solution: 'The chat API uses a capped multi-round execution loop (MAX_ROUNDS = 5), explicit tool handlers, duration normalization for Cal.com accepted values, and strict knowledge-base rules that stop the model from repeating schedule_meeting after success. The UI also surfaces tool activity separately so the conversation remains understandable.'
        }
      ]
    },
    es: {
      title: 'Sitio Web de KodaTek',
      tagline: 'Sitio multi-página orientado a SEO con asistente de IA para agendamiento, páginas por industria y hub de recursos',
      description: 'Sitio en producción para KodaTek que evolucionó de una landing page única a una plataforma más amplia de captación y descubrimiento para empresas uruguayas. Combina homepage comercial, páginas de servicios, páginas de soluciones por industria, recursos educativos, flujos de contacto, una oferta paga de mantenimiento y un asistente de IA que responde preguntas y agenda llamadas de descubrimiento.',
      context: 'Creado para KodaTek, mi propia empresa de software. Lo que comenzó como una landing page terminó convirtiéndose en un sistema mucho más amplio de marketing y adquisición al expandir la arquitectura de información alrededor de servicios, industrias e intención de búsqueda. El objetivo dejó de ser solo presentar la empresa y pasó a ser atraer tráfico calificado, educar prospectos, dirigirlos a la oferta correcta, captar consultas y seguir permitiendo que los visitantes interesados agenden una conversación con la menor fricción posible.',
      role: 'Fundador & Full-Stack Developer de punta a punta. Diseñé e implementé todo el codebase con App Router, construí sistemas reutilizables de SEO y contenido, armé la arquitectura de páginas de servicios/soluciones/recursos, implementé el asistente de IA de la homepage con tool calling sobre Pollinations y agendamiento con Cal.com, integré envío de correos de contacto, Google Ads, Klaviyo, analytics de Vercel y suscripciones con PayPal para la oferta de mantenimiento, y agregué tests automáticos para páginas, metadata, sitemap y componentes compartidos.',
      features: [
        'Sitio en producción de 39 páginas que incluye homepage, servicios, contacto, nosotros, legales, gracias, mantenimiento, soluciones por industria y guías de recursos',
        'Hub de servicios más 10 landing pages comerciales orientadas a intención de búsqueda en Uruguay',
        'Hub de soluciones con explorador filtrable y 18 entradas de solución que combinan páginas estáticas con generación dinámica en /soluciones/[servicio]/[industria]',
        'Hub de recursos con 8 playbooks extensos, secciones de FAQ, enlazado interno y CTAs de diagnóstico',
        'Capa SEO compartida con metadata canónica, Open Graph/Twitter cards, JSON-LD de Organization, LocalBusiness, Breadcrumb, FAQ y Service, más soporte de sitemap generado',
        'Widget flotante de chat Koda en la homepage, impulsado por Pollinations con el modelo claude-fast y function calling',
        'Flujo de agendamiento por tools que obtiene la fecha actual, consulta disponibilidad en Cal.com, normaliza duraciones y crea reuniones con horarios adaptados a la zona horaria del usuario',
        'Sistema reutilizable de contacto con bloque integrado de contacto/footer en la homepage, página de contacto dedicada, validación de formulario y redirección a página de gracias',
        'Envío de emails transaccionales mediante Nodemailer y Zoho SMTP para formularios de contacto',
        'Landing page dedicada para mantenimiento mensual de landings con checkout de suscripción vía PayPal Hosted Buttons',
        'Instrumentación global de conversión y performance con Google Ads, Klaviyo, Vercel Analytics, Speed Insights y 48 tests automáticos sobre páginas, componentes y helpers'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 con App Router y builders SEO compartidos',
          reason: 'El sitio creció de una sola landing a 39 rutas, así que necesitaba una estructura que mantuviera consistentes la metadata, los schemas, el routing y la lógica de layout entre páginas estáticas y generadas.',
          benefit: 'Helpers reutilizables generan metadata canónica, Open Graph/Twitter tags, JSON-LD de breadcrumb/FAQ/service y comportamiento compartido de layout, lo que redujo duplicación y permitió publicar nuevas páginas más rápido y con menos riesgo.'
        },
        {
          title: 'Modelo de contenido estructurado para páginas por industria y SEO',
          reason: 'Las combinaciones entre servicios e industrias crecieron rápido, y escribir cada página de forma aislada iba a generar drift de contenido y frenar la expansión.',
          benefit: 'Un modelo centralizado en pseo.ts, junto con generateStaticParams, solutionsCatalog.ts y sitemap.ts, permite escalar rutas dinámicas de soluciones manteniendo alineados copy, enlaces, filtros e indexación.'
        },
        {
          title: 'Pollinations AI con tool calling y helpers de reserva sobre Cal.com',
          reason: 'El asistente debía seguir respondiendo preguntas y convertir interés calificado en reuniones agendadas sin construir desde cero una plataforma agentic completa.',
          benefit: 'El chat de la homepage usa Pollinations con el modelo claude-fast, tool calls para fecha actual, consulta de disponibilidad y booking de reuniones, y un loop por rounds en la API para que Koda pueda resolver agendamientos de varios pasos dentro de una sola conversación.'
        },
        {
          title: 'Secciones comerciales reutilizables e integraciones centralizadas en layout',
          reason: 'Ahora el sitio incluye páginas de servicios, páginas de recursos, flujo de contacto, oferta de mantenimiento y scripts de conversión, así que repetir esas responsabilidades página por página sería frágil.',
          benefit: 'Componentes compartidos como ServicesOverview, InternalLinkSection, FaqAccordion, HomeContactFooter y Footer, junto con Google Ads, Klaviyo, Vercel Analytics y Speed Insights cargados desde layout, mantienen consistente la UX y el tracking en todo el sitio.'
        }
      ],
      challenges: [
        {
          problem: 'Escalar el sitio desde una landing page única a un sitio de captación de 39 páginas generó riesgo de duplicación en metadata, schemas, CTAs, FAQs y enlazado interno. Repetir manualmente esa estructura en cada página nueva hubiera hecho el codebase más difícil de mantener y más fácil de romper.',
          solution: 'Extraje builders SEO compartidos, secciones reutilizables y responsabilidades comunes de layout, y luego las respaldé con tests para metadata, sitemap y UI compartida. Así, las nuevas páginas reutilizan primitivas estables en lugar de copiar implementaciones específicas.'
        },
        {
          problem: 'Las páginas por industria tenían que crecer en volumen y consistencia: el sitio ahora combina páginas de servicio, páginas de solución estáticas y rutas dinámicas en /soluciones/[servicio]/[industria]. Sin un modelo de contenido compartido, el mensaje, los filtros y la indexación iban a desviarse rápido.',
          solution: 'Modelé el contenido programático en pseo.ts, derivé los datos del explorador desde solutionsCatalog.ts, generé static params para el render de build y generé entradas del sitemap desde la misma fuente de datos. Eso mantuvo alineados descubrimiento, interlinking y SEO a medida que se sumaron nuevas industrias.'
        },
        {
          problem: 'El asistente de IA todavía tiene que manejar flujos de agendamiento de varios pasos: obtener fecha actual, consultar disponibilidad, presentar slots con zona horaria y crear la reunión, todo evitando tool calls repetidos o loops infinitos.',
          solution: 'La API de chat usa un loop multi-round con tope (MAX_ROUNDS = 5), handlers explícitos para cada tool, normalización de duraciones compatibles con Cal.com y reglas estrictas en la base de conocimiento para impedir repetir schedule_meeting después de un éxito. La UI además muestra la actividad de tools por separado para que la conversación siga siendo entendible.'
        }
      ]
    },
    pt: {
      title: 'Site da KodaTek',
      tagline: 'Site multi-página focado em SEO com assistente de IA para agendamento, páginas por indústria e hub de recursos',
      description: 'Site em produção da KodaTek que evoluiu de uma landing page única para uma plataforma mais ampla de aquisição e descoberta para empresas uruguaias. Combina homepage comercial, páginas de serviços, páginas de soluções por indústria, recursos educativos, fluxos de contato, uma oferta paga de manutenção e um assistente de IA que responde perguntas e agenda chamadas de descoberta.',
      context: 'Criado para a KodaTek, minha própria empresa de software. O que começou como uma landing page virou um sistema bem mais amplo de marketing e aquisição depois da expansão da arquitetura de informação em torno de serviços, indústrias e intenção de busca. O objetivo deixou de ser apenas apresentar a empresa e passou a ser atrair tráfego qualificado, educar prospects, direcioná-los para a oferta certa, capturar consultas e ainda permitir que visitantes interessados agendem uma conversa com o mínimo de atrito.',
      role: 'Fundador & Full-Stack Developer de ponta a ponta. Desenhei e implementei todo o codebase com App Router, construí sistemas reutilizáveis de SEO e conteúdo, criei a arquitetura de páginas de serviços/soluções/recursos, implementei o assistente de IA da homepage com tool calling via Pollinations e agendamento com Cal.com, integrei envio de emails de contato, Google Ads, Klaviyo, analytics da Vercel e assinaturas com PayPal para a oferta de manutenção, e adicionei testes automatizados para páginas, metadata, sitemap e componentes compartilhados.',
      features: [
        'Site em produção com 39 páginas cobrindo homepage, serviços, contato, sobre, páginas legais, obrigado, manutenção, soluções por indústria e guias de recursos',
        'Hub de serviços mais 10 landing pages comerciais orientadas à intenção de busca no Uruguai',
        'Hub de soluções com explorador filtrável e 18 entradas de solução combinando páginas estáticas com geração dinâmica em /soluciones/[servicio]/[industria]',
        'Hub de recursos com 8 playbooks longos, seções de FAQ, links internos e CTAs de diagnóstico',
        'Camada de SEO compartilhada com metadata canônica, Open Graph/Twitter cards, JSON-LD de Organization, LocalBusiness, Breadcrumb, FAQ e Service, além de sitemap gerado',
        'Widget flutuante de chat Koda na homepage, impulsionado por Pollinations com o modelo claude-fast e function calling',
        'Fluxo de agendamento por tools que obtém a data atual, consulta disponibilidade no Cal.com, normaliza durações e cria reuniões com horários adaptados ao fuso horário do usuário',
        'Sistema reutilizável de contato com bloco integrado de contato/footer na homepage, página dedicada de contato, validação de formulário e redirecionamento para página de agradecimento',
        'Envio de emails transacionais com Nodemailer e Zoho SMTP para submissões do formulário de contato',
        'Landing page dedicada para manutenção mensal de landings com checkout de assinatura via PayPal Hosted Buttons',
        'Instrumentação global de conversão e performance com Google Ads, Klaviyo, Vercel Analytics, Speed Insights e 48 testes automatizados sobre páginas, componentes e helpers'
      ],
      techDecisions: [
        {
          title: 'Next.js 15 com App Router e builders de SEO compartilhados',
          reason: 'O site cresceu de uma única landing para 39 rotas, então eu precisava de uma estrutura que mantivesse metadata, schemas, routing e lógica de layout consistentes entre páginas estáticas e geradas.',
          benefit: 'Helpers reutilizáveis geram metadata canônica, Open Graph/Twitter tags, JSON-LD de breadcrumb/FAQ/service e comportamento compartilhado de layout, reduzindo duplicação e acelerando a publicação segura de novas páginas.'
        },
        {
          title: 'Modelo de conteúdo estruturado para páginas por indústria e SEO',
          reason: 'As combinações entre serviços e indústrias cresceram rápido, e escrever cada página de forma isolada geraria drift de conteúdo e lentidão para expandir.',
          benefit: 'Um modelo central em pseo.ts, junto com generateStaticParams, solutionsCatalog.ts e sitemap.ts, permite escalar rotas dinâmicas de soluções mantendo alinhados copy, links, filtros e indexação.'
        },
        {
          title: 'Pollinations AI com tool calling e helpers de booking sobre Cal.com',
          reason: 'O assistente ainda precisava responder perguntas e converter interesse qualificado em reuniões marcadas sem construir do zero uma plataforma agentic completa.',
          benefit: 'O chat da homepage usa Pollinations com o modelo claude-fast, tool calls para data atual, consulta de disponibilidade e criação de reunião, além de um loop por rounds na API para que o Koda resolva agendamentos de múltiplas etapas dentro de uma única conversa.'
        },
        {
          title: 'Seções comerciais reutilizáveis e integrações centralizadas no layout',
          reason: 'O site agora inclui páginas de serviços, páginas de recursos, fluxo de contato, oferta de manutenção e scripts de conversão, então repetir essas responsabilidades página por página seria frágil.',
          benefit: 'Componentes compartilhados como ServicesOverview, InternalLinkSection, FaqAccordion, HomeContactFooter e Footer, junto com Google Ads, Klaviyo, Vercel Analytics e Speed Insights carregados no layout, mantêm UX e tracking consistentes em todo o site.'
        }
      ],
      challenges: [
        {
          problem: 'Escalar o site de uma landing page única para um site de aquisição com 39 páginas criou risco de duplicação em metadata, schemas, CTAs, FAQs e links internos. Repetir manualmente essa estrutura em cada nova página deixaria o codebase mais difícil de manter e mais fácil de quebrar.',
          solution: 'Extraí builders de SEO compartilhados, seções reutilizáveis e responsabilidades comuns de layout, e depois cobri isso com testes de metadata, sitemap e UI compartilhada. Assim, novas páginas reutilizam primitivas estáveis em vez de copiar implementações específicas.'
        },
        {
          problem: 'As páginas por indústria precisavam crescer em volume e consistência: o site agora combina páginas de serviço, páginas de solução estáticas e rotas dinâmicas em /soluciones/[servicio]/[industria]. Sem um modelo de conteúdo compartilhado, mensagem, filtros e indexação se desalinham rapidamente.',
          solution: 'Modelei o conteúdo programático em pseo.ts, derivei os dados do explorador a partir de solutionsCatalog.ts, gerei static params para render em build e gerei entradas do sitemap a partir da mesma fonte de dados. Isso manteve alinhados discovery, interlinking e SEO à medida que novas indústrias foram adicionadas.'
        },
        {
          problem: 'O assistente de IA ainda precisa lidar com fluxos de agendamento em várias etapas: obter a data atual, consultar disponibilidade, mostrar slots com fuso horário e criar a reunião, tudo isso evitando tool calls repetidos ou loops infinitos.',
          solution: 'A API de chat usa um loop multi-round com limite (MAX_ROUNDS = 5), handlers explícitos para cada tool, normalização de durações compatíveis com os valores aceitos pelo Cal.com e regras rígidas na base de conhecimento para impedir repetir schedule_meeting depois de um sucesso. A UI também mostra a atividade das tools separadamente para que a conversa continue clara.'
        }
      ]
    }
  }
};
