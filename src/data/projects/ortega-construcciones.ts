import { Project } from './types';

export const ortegaConstrucciones: Project = {
  slug: 'ortega-construcciones',
  category: 'landing',
  client: 'Ortega Construcciones',
  year: '2026',
  status: 'production',
  techStack: [
    'Next.js 16',
    'React 19',
    'TypeScript 5',
    'Tailwind CSS 4',
    'shadcn/ui',
    'Lucide React',
  ],
  images: {
    hero: '/projects/ortega-construcciones/hero.webp',
    gallery: [
      '/projects/ortega-construcciones/services.webp',
      '/projects/ortega-construcciones/process.webp',
      '/projects/ortega-construcciones/contact.webp'
    ]
  },
  links: {
    liveDemo: 'https://ortegaconstrucciones.com.uy',
    github: 'https://github.com/KodaTekUY/ortega-construcciones'
  },
  translations: {
    en: {
      title: 'Ortega Construcciones Landing Page',
      tagline: 'Construction company landing page for Maldonado and the eastern coast of Uruguay',
      description: 'Responsive landing page for Ortega Construcciones, focused on residential construction, expansions, permits, and architectural planning in Maldonado and the eastern coast of Uruguay, with direct WhatsApp contact, trust-building sections, and a clear path from first inquiry to quote.',
      context: 'Created for Ortega Construcciones to replace generic placeholder content with a trust-first digital presence tailored to residential construction. The site needed to communicate more than 30 years of experience, real geographic coverage from Solís to José Ignacio, and a straightforward process for new builds, expansions, permits, and architectural planning. It also needed to speak clearly to clients in Argentina or abroad, showing that projects can be managed remotely through updates, photos, videos, and consistent communication.',
      role: 'Designed and implemented the full landing page in Next.js 16 with reusable React components, responsive navigation, scroll-triggered interactions, SEO metadata, and JSON-LD structured data for a local construction business. Structured the home page into modular sections for hero, trust badges, services, process, projects, remote clients, testimonials, CTA, and footer, and kept the stack intentionally lean with Tailwind CSS 4, shadcn/ui primitives, lucide-react icons, next/font, and Vercel Analytics.',
      features: [
        'Modern responsive landing page with fixed header, mobile navigation, and direct WhatsApp CTA',
        'Full-screen hero section with residential imagery and a trust-oriented value proposition',
        'Trust badges highlighting 30+ years of experience, 150+ delivered houses, project size range, and east coast coverage',
        'Service section covering new construction, expansions, permit handling, and architectural project support',
        'Six-step process timeline from first conversation to final key handoff',
        'Projects section showcasing real case studies and completed residential developments',
        'Dedicated section for clients in Argentina or abroad who need remote follow-up during construction',
        'Testimonials section featuring real feedback from satisfied clients',
        'Contact CTA section with area selector, project details form, and direct phone, email, and WhatsApp paths',
        'SEO setup with Metadata API, Open Graph, Twitter cards, canonical URL, and HomeAndConstructionBusiness JSON-LD',
        'Subtle scroll-reveal animations and smooth anchor navigation across the one-page experience'
      ],
      techDecisions: [
        {
          title: 'Next.js 16 with App Router and Metadata API',
          reason: 'Use the current Next.js runtime for a simple section-based landing page while handling metadata, canonical URLs, and social previews at the framework level.',
          benefit: 'Keeps the project maintainable and improves SEO/shareability without adding extra page-level complexity or custom head management.'
        },
        {
          title: 'Tailwind CSS 4 with CSS Variable Design Tokens',
          reason: 'The site needed a branded visual system around the Ortega palette while staying easy to iterate on across cards, buttons, typography, and section backgrounds.',
          benefit: 'Color, spacing, and theming stay consistent across the landing page, and visual changes can be made centrally without rewriting component styles.'
        },
        {
          title: 'Componentized React Sections with Lightweight UI Primitives',
          reason: 'The page is organized into clearly separated business sections, so reusable components and minimal shadcn/ui primitives keep the implementation predictable.',
          benefit: 'Each section can be edited independently, content updates are low-risk, and the codebase stays small compared to a heavier page-builder style setup.'
        },
        {
          title: 'Structured Data and Real Portfolio Content',
          reason: 'Local SEO mattered, but so did credibility. Adding real projects and testimonials was crucial to establish immediate credibility and trust.',
          benefit: 'The site gains search-friendly metadata and local business schema while maintaining transparency and showcasing real past work.'
        }
      ],
      challenges: [
        {
          problem: 'Translating a trust-based offline construction business into a concise digital message: Ortega Construcciones sells confidence, follow-through, and predictable execution, not just square meters. A generic landing page would not communicate that clearly enough.',
          solution: 'Built the page around a strong promise in the hero, measurable trust badges, explicit service scope, a transparent six-step process, and direct contact options. This turns intangible trust into concrete proof points and a clearer conversion path.'
        },
        {
          problem: 'Explaining how remote clients can build without being physically present: A relevant share of the audience may be in Argentina or abroad and cannot supervise the job site day to day.',
          solution: 'Added a dedicated remote-clients section and reinforced the message across the copy: progress can be tracked with photos, videos, reports, and proactive communication before decisions are made. This addresses a core objection directly inside the sales flow.'
        },
        {
          problem: 'Improving discoverability across multiple coverage zones without bloating the site: The business serves Maldonado and the eastern coast, so location relevance needed to appear in more than just visible copy.',
          solution: 'Added targeted metadata, keywords, canonical URL, Open Graph/Twitter data, and HomeAndConstructionBusiness JSON-LD with areaServed values such as Solís, Piriápolis, Punta del Este, Punta Ballena, La Barra, José Ignacio, and Maldonado.'
        }
      ]
    },
    es: {
      title: 'Landing Page de Ortega Construcciones',
      tagline: 'Landing page para constructora en Maldonado y toda la costa este',
      description: 'Landing page responsiva para Ortega Construcciones, enfocada en obra residencial, ampliaciones, permisos y proyecto arquitectónico en Maldonado y la costa este de Uruguay, con contacto directo por WhatsApp, secciones de confianza y un camino claro desde la primera consulta hasta el presupuesto.',
      context: 'Creado para Ortega Construcciones con el objetivo de reemplazar contenido genérico por una presencia digital centrada en confianza, claridad comercial y cobertura geográfica real. El sitio debía comunicar más de 30 años de experiencia, el trabajo desde Solís hasta José Ignacio y una forma de trabajo simple para obra nueva, ampliaciones, permisos y proyecto arquitectónico. También tenía que hablarle con claridad a clientes en Argentina o en el exterior, mostrando que la obra puede seguirse a distancia con reportes, fotos, videos y comunicación constante.',
      role: 'Diseñé e implementé la landing completa en Next.js 16 con componentes reutilizables en React, navegación responsiva, interacciones al hacer scroll, metadatos SEO y JSON-LD para un negocio local de construcción. Organicé la home en secciones modulares de hero, badges de confianza, servicios, proceso, proyectos, clientes del exterior, testimonios, CTA y footer, y mantuve el stack liviano con Tailwind CSS 4, primitivas de shadcn/ui, iconos de lucide-react, next/font y Vercel Analytics.',
      features: [
        'Landing page moderna y responsiva con header fijo, navegación móvil y CTA directo a WhatsApp',
        'Hero full screen con imagen residencial y propuesta de valor orientada a confianza',
        'Badges de confianza con más de 30 años de experiencia, más de 150 casas, rango de metros cuadrados y cobertura de la costa este',
        'Sección de servicios para obra nueva, ampliaciones, gestión de permisos y proyecto arquitectónico',
        'Timeline de 6 pasos desde la primera charla hasta la entrega de llaves',
        'Sección de proyectos mostrando casos de estudio reales y desarrollos residenciales completados',
        'Bloque específico para clientes en Argentina o en el exterior que necesitan seguimiento remoto de la obra',
        'Sección de testimonios con citas reales de clientes satisfechos',
        'CTA de contacto con selector de zona, formulario de consulta y vías directas por teléfono, email y WhatsApp',
        'Configuración SEO con Metadata API, Open Graph, Twitter Cards, URL canónica y JSON-LD tipo HomeAndConstructionBusiness',
        'Animaciones sutiles al hacer scroll y navegación suave por anclas en una experiencia de una sola página'
      ],
      techDecisions: [
        {
          title: 'Next.js 16 con App Router y Metadata API',
          reason: 'Usar el runtime actual de Next.js para una landing simple por secciones, resolviendo metadata, URL canónica y previews sociales desde el framework.',
          benefit: 'Mantiene el proyecto ordenado y mejora SEO y compartibilidad sin sumar complejidad extra ni manejo manual del head.'
        },
        {
          title: 'Tailwind CSS 4 con design tokens basados en variables CSS',
          reason: 'El sitio necesitaba un sistema visual propio alrededor de la paleta de Ortega, pero también facilidad para iterar sobre cards, botones, tipografía y fondos.',
          benefit: 'Colores, espaciados y theming quedan consistentes en toda la landing, y los cambios visuales se pueden hacer de forma centralizada.'
        },
        {
          title: 'Secciones componentizadas en React con primitivas UI livianas',
          reason: 'La página está organizada en bloques de negocio bien definidos, así que componentes reutilizables y primitivas mínimas de shadcn/ui mantenían la implementación predecible.',
          benefit: 'Cada sección puede editarse de forma independiente, las actualizaciones de contenido son de bajo riesgo y el código queda mucho más liviano que con una solución más cargada.'
        },
        {
          title: 'Datos estructurados y contenido de portfolio real',
          reason: 'Importaba el SEO local, pero también la credibilidad. Incluir proyectos y testimonios reales fue fundamental para establecer credibilidad y confianza inmediatas.',
          benefit: 'El sitio gana metadata útil para buscadores y schema de negocio local mientras mantiene la transparencia y exhibe el trabajo previo real.'
        }
      ],
      challenges: [
        {
          problem: 'Traducir un negocio de construcción basado en confianza a un mensaje digital claro: Ortega Construcciones vende cumplimiento, seguimiento y previsibilidad, no solo metros cuadrados. Una landing genérica no alcanzaba para comunicar eso.',
          solution: 'Organicé la página alrededor de una promesa fuerte en el hero, badges medibles de confianza, alcance de servicios, un proceso de 6 pasos y vías de contacto directas. Eso convierte una propuesta intangible en señales concretas y un recorrido comercial más claro.'
        },
        {
          problem: 'Explicar cómo puede construir alguien que no está presente en la obra: Parte del público puede estar en Argentina o en el exterior y no supervisar la obra día a día.',
          solution: 'Agregué una sección específica para clientes remotos y reforcé el mensaje en el copy: la obra puede seguirse con fotos, videos, reportes y comunicación antes de tomar decisiones. Así se responde una objeción clave dentro del mismo flujo comercial.'
        },
        {
          problem: 'Mejorar la encontrabilidad en varias zonas de cobertura sin inflar el sitio: La empresa trabaja en Maldonado y toda la costa este, así que la relevancia geográfica debía aparecer también fuera del contenido visible.',
          solution: 'Sumé metadata orientada a búsqueda local, keywords, URL canónica, datos Open Graph/Twitter y JSON-LD HomeAndConstructionBusiness con areaServed para Solís, Piriápolis, Punta del Este, Punta Ballena, La Barra, José Ignacio y Maldonado.'
        }
      ]
    },
    pt: {
      title: 'Landing Page da Ortega Construcciones',
      tagline: 'Landing page para construtora em Maldonado e toda a costa leste',
      description: 'Landing page responsiva para Ortega Construcciones, focada em construção residencial, ampliações, permissões e projeto arquitetônico em Maldonado e na costa leste do Uruguai, com contato direto por WhatsApp, seções de confiança e um caminho claro da primeira consulta até o orçamento.',
      context: 'Criado para Ortega Construcciones com o objetivo de substituir conteúdo genérico por uma presença digital centrada em confiança, clareza comercial e cobertura geográfica real. O site precisava comunicar mais de 30 anos de experiência, atuação de Solís a José Ignacio e uma forma de trabalho simples para obra nova, ampliações, permissões e projeto arquitetônico. Também precisava falar com clareza a clientes na Argentina ou no exterior, mostrando que a obra pode ser acompanhada à distância com relatórios, fotos, vídeos e comunicação constante.',
      role: 'Projetei e implementei a landing page completa em Next.js 16 com componentes reutilizáveis em React, navegação responsiva, interações com scroll, metadados SEO e JSON-LD para um negócio local de construção. Estruturei a home em seções modulares de hero, badges de confiança, serviços, processo, projetos, clientes do exterior, depoimentos, CTA e footer, mantendo o stack enxuto com Tailwind CSS 4, primitivas de shadcn/ui, ícones de lucide-react, next/font e Vercel Analytics.',
      features: [
        'Landing page moderna e responsiva com header fixo, navegação mobile e CTA direto para WhatsApp',
        'Hero em tela cheia com imagem residencial e proposta de valor orientada à confiança',
        'Badges de confiança destacando mais de 30 anos de experiência, mais de 150 casas, faixa de metragem e cobertura da costa leste',
        'Seção de serviços para obra nova, ampliações, gestão de permissões e projeto arquitetônico',
        'Timeline de 6 etapas da primeira conversa até a entrega das chaves',
        'Seção de projetos apresentando casos de estudo reais e empreendimentos residenciais concluídos',
        'Bloco dedicado para clientes na Argentina ou no exterior que precisam acompanhar a obra remotamente',
        'Seção de depoimentos com citações reais de clientes satisfeitos',
        'CTA de contato com seletor de região, formulário de consulta e canais diretos por telefone, email e WhatsApp',
        'Configuração de SEO com Metadata API, Open Graph, Twitter Cards, URL canônica e JSON-LD do tipo HomeAndConstructionBusiness',
        'Animações sutis no scroll e navegação suave por âncoras em uma experiência de página única'
      ],
      techDecisions: [
        {
          title: 'Next.js 16 com App Router e Metadata API',
          reason: 'Usar o runtime atual do Next.js para uma landing simples por seções, resolvendo metadata, URL canônica e previews sociais no próprio framework.',
          benefit: 'Mantém o projeto organizado e melhora SEO e compartilhamento sem adicionar complexidade extra ou gerenciamento manual do head.'
        },
        {
          title: 'Tailwind CSS 4 com design tokens baseados em variáveis CSS',
          reason: 'O site precisava de um sistema visual próprio em torno da paleta da Ortega, mas também precisava ser fácil de ajustar em cards, botões, tipografia e fundos.',
          benefit: 'Cores, espaçamentos e theming ficam consistentes em toda a landing page, e mudanças visuais podem ser feitas de forma centralizada.'
        },
        {
          title: 'Seções componentizadas em React com primitivas UI leves',
          reason: 'A página está organizada em blocos de negócio bem definidos, então componentes reutilizáveis e primitivas mínimas de shadcn/ui mantiveram a implementação previsível.',
          benefit: 'Cada seção pode ser editada de forma independente, atualizações de conteúdo têm baixo risco e o código fica muito mais enxuto do que em uma solução mais pesada.'
        },
        {
          title: 'Dados estruturados e conteúdo real de portfólio',
          reason: 'SEO local era importante, mas credibilidade também. A inclusão de projetos e depoimentos reais foi crucial para estabelecer credibilidade e confiança imediatas.',
          benefit: 'O site ganha metadata útil para busca e schema de negócio local enquanto permanece transparente e exibe o trabalho anterior real.'
        }
      ],
      challenges: [
        {
          problem: 'Traduzir um negócio de construção baseado em confiança para uma mensagem digital clara: Ortega Construcciones vende cumprimento, acompanhamento e previsibilidade, e não apenas metros quadrados. Uma landing page genérica não comunicaria isso bem.',
          solution: 'Estruturei a página em torno de uma promessa forte no hero, badges mensuráveis de confiança, escopo de serviços, um processo de 6 etapas e canais de contato diretos. Isso transforma uma proposta intangível em sinais concretos e um fluxo comercial mais claro.'
        },
        {
          problem: 'Explicar como um cliente pode construir sem estar presente na obra: Parte do público pode estar na Argentina ou em outro país e não acompanhar o canteiro no dia a dia.',
          solution: 'Adicionei uma seção específica para clientes remotos e reforcei a mensagem no copy: a obra pode ser acompanhada com fotos, vídeos, relatórios e comunicação antes de qualquer decisão. Assim a página responde diretamente a uma objeção central.'
        },
        {
          problem: 'Melhorar a descoberta local em várias regiões de cobertura sem inflar o site: A empresa atua em Maldonado e em toda a costa leste, então a relevância geográfica precisava aparecer além do conteúdo visível.',
          solution: 'Incluí metadata voltada para busca local, keywords, URL canônica, dados Open Graph/Twitter e JSON-LD HomeAndConstructionBusiness com areaServed para Solís, Piriápolis, Punta del Este, Punta Ballena, La Barra, José Ignacio e Maldonado.'
        }
      ]
    }
  }
};