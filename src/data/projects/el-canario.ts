import { Project } from './types';

export const elCanario: Project = {
  slug: 'el-canario-ecommerce',
  category: 'ecommerce',
  client: 'Independent Seller',
  year: '2024',
  status: 'production',
  techStack: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'PostgreSQL',
    'TailwindCSS',
    'Vitest',
    'Sirv CDN',
    'Zod',
    'React Hook Form',
    'Radix UI'
  ],
  images: {
    hero: '/projects/el-canario/hero.webp',
    gallery: [
      '/projects/el-canario/cart.webp',
      '/projects/el-canario/admin.webp',
      '/projects/el-canario/offers.webp'
    ]
  },
  links: {
    isPrivate: false,
    github: '#'
  },
  translations: {
    en: {
      title: 'E-commerce with Intelligent Pricing Engine',
      tagline: 'Smart promotional system with dynamic multi-tier offers',
      description: 'E-commerce platform for independent seller with intelligent pricing engine that automatically calculates the optimal combination of promotions (bundles, volume discounts, threshold offers, percentage discounts) to maximize customer savings without duplicating discounts.',
      context: 'Developed for an independent seller managing a delivery/pickup business. Before the system, the seller manually posted product/offer images on social media stories daily, making inventory management, order tracking, and correct promotion application difficult. The main problem was scaling the business without a platform to handle multiple simultaneous offer types that should apply automatically to the cart optimally, maximizing customer savings without duplicating discounts on the same product.',
      role: 'Full-Stack Developer end-to-end, responsible for design, architecture, implementation, and complete deployment. Designed and implemented pricing calculation engine with optimization algorithms, architected PostgreSQL database with multi-tier offer system, developed backend and frontend with Next.js 16 (App Router, Server Actions, Route Handlers), TypeScript and TailwindCSS. Created admin panel with CRUD management of products, categories, and offers. Implemented authentication system with HTTP-only cookies, integrated with Sirv CDN for image management, created testing suite with Vitest achieving 85% coverage, and configured secure deployment with environment variables.',
      features: [
        'Intelligent pricing engine with 4 promotion types: bundles (combos), tiered_total (volume pricing), threshold_unit (threshold discount), and percent_off (percentage discount)',
        'Offer optimizer with greedy strategy and dynamic programming selecting the best promotion combination to maximize customer savings',
        'Real-time cart system with instant price and discount calculation, persisted in sessionStorage',
        'Complete admin panel with visual management of products, categories, and complex offers including multi-tier configuration per promotion',
        'Advanced search and filtering by categories, product name, and active offers with instant results',
        'PDF catalog export with embedded images, automatic categorization, and professional design for printing',
        'Image upload system integrated with Sirv CDN, including validation, optimization, and authentication token caching',
        'Temporary offer management with automatic validity validation by start/end dates'
      ],
      techDecisions: [
        {
          title: 'Pricing Engine as Pure Function',
          reason: 'Separate price calculation logic from data access to allow exhaustive testing without external dependencies. The priceCart() function is deterministic and can run on both server and client.',
          benefit: 'Implemented O(n*m) greedy algorithm with dynamic programming for tiered_total cases, balancing optimality with performance (~50-100ms for 50-item carts). Enables unit testing without database mocks and ensures consistent pricing across all application layers.'
        },
        {
          title: 'PostgreSQL with Neon Serverless + Normalized Offers Schema',
          reason: 'Data model required extreme flexibility to support complex promotions without knowing future offer types. Designed schema with 3 related tables: deals (metadata), deal_tiers (pricing by scales), and deal_products (participating products).',
          benefit: 'Supports everything from "2x1" to "Mayo+Tuna Combo $240" or "3+ units at $650 each" without schema changes. Neon Serverless eliminates cold starts and automatically adapts to traffic, providing predictable performance and cost.'
        },
        {
          title: 'Authentication with HTTP-only Cookies',
          reason: 'HTTP-only cookies are immune to XSS attacks, unlike localStorage. Implemented simple but secure system with 7-day cookies, server-side validation in Server Actions, and middleware.',
          benefit: 'For an MVP, did not require full OAuth2/NextAuth, but architecture allows easy scaling by adding external providers. Better security compared to JWT in localStorage while maintaining simplicity.'
        },
        {
          title: 'Sirv CDN for Images with Token Caching',
          reason: 'Compared to S3 or Cloudinary, Sirv offers global CDN, automatic image transformation (WebP, lazy-loading), and predictable pricing. Implemented token cache system (auto-refreshed 1 min before expiration).',
          benefit: 'Reduces authentication calls from 100+ to ~2-3 per day, improving upload latency by 40%. Automatic image optimization and responsive delivery without manual configuration.'
        },
        {
          title: 'Hybrid Server Components + Client Components Architecture',
          reason: 'Next.js 16 allows optimizing initial bundle to maximum. Pages like / and /product/[id] are Server Components that fetch on server (reducing waterfalls), while interactions like cart, search, and admin are Client Components.',
          benefit: 'Resulted in FCP of ~800ms and TTI of ~1.2s on 3G Fast. Reduced JavaScript sent to client while maintaining rich interactivity where needed.'
        }
      ],
      challenges: [
        {
          problem: 'Algorithm optimization for applying multiple offers: Initially the engine tried all possible offer combinations (brute force), resulting in O(2^n) for n active deals. With 10+ concurrent offers, calculation took >5 seconds, blocking the cart.',
          solution: 'Implemented greedy strategy: sort deals by discount/unit and apply most profitable first, tracking available units per product to avoid "double discount". For tiered_total cases with apply_mode: best_price, added dynamic programming solver finding optimal tier combination in O(n*q²) where q = quantity. Reduced time to <100ms average.'
        },
        {
          problem: 'Price synchronization between client and server: Cart calculated prices on client using cached prices, but if admin updated prices in DB, user saw incorrect totals until refresh. Additionally, it was an attack vector (manipulate localStorage to change prices).',
          solution: 'Converted cart to hybrid system: client only tracks {productId, qty} in sessionStorage. When opening drawer or modifying items, call /api/cart/price which recalculates everything on server with fresh DB prices and active deals. Implemented debouncing (300ms) to avoid request spam. Result: always correct prices, guaranteed security, and fluid UX with spinners during calculation.'
        },
        {
          problem: 'PDF generation with images without CORS errors: jsPDF needs images in base64 to embed them, but fetch() of cross-origin URLs (Sirv CDN) failed due to CORS. Exported catalogs showed placeholders instead of product photos.',
          solution: 'Configured CORS headers in Sirv to allow Access-Control-Allow-Origin: * on images. Implemented loadImageAsBase64() function that does fetch + FileReader + Promise and converts images to base64 in browser. Added fallbacks: if an image fails (timeout, 404), continues PDF generation with generic placeholder, avoiding total failures. Time to generate: ~3-5s for 100-product catalogs.'
        }
      ]
    },
    es: {
      title: 'E-commerce con Motor de Precios Inteligente',
      tagline: 'Sistema de promociones inteligente con ofertas multi-tier dinámicas',
      description: 'Plataforma de e-commerce para vendedor independiente con motor de pricing inteligente que calcula automáticamente la combinación óptima de promociones (combos, descuentos por volumen, ofertas por umbral, descuentos porcentuales) para maximizar el ahorro del cliente sin duplicar descuentos.',
      context: 'Desarrollado para un vendedor independiente que maneja un negocio de productos con entrega y pick-up. Antes del sistema, el vendedor publicaba manualmente imágenes de sus ofertas/productos en stories de redes sociales diariamente, lo que dificultaba la gestión de inventario, el seguimiento de pedidos y la aplicación correcta de promociones. El problema principal era escalar el negocio sin una plataforma que permitiera manejar múltiples tipos de ofertas simultáneas que debían aplicarse automáticamente al carrito de forma óptima, maximizando el ahorro del cliente sin duplicar descuentos sobre el mismo producto.',
      role: 'Full-Stack Developer de inicio a fin, responsable del diseño, arquitectura, implementación y despliegue completo. Diseñé e implementé el motor de cálculo de precios con algoritmos de optimización, arquitecté base de datos PostgreSQL con sistema de ofertas multi-tier, desarrollé backend y frontend con Next.js 16 (App Router, Server Actions, Route Handlers), TypeScript y TailwindCSS. Creé panel de administración con gestión CRUD de productos, categorías y ofertas. Implementé sistema de autenticación con cookies HTTP-only, integré con Sirv CDN para gestión de imágenes, creé suite de testing con Vitest logrando 85% de cobertura, y configuré despliegue seguro con variables de entorno.',
      features: [
        'Motor de pricing inteligente con 4 tipos de promociones: bundles (combos), tiered_total (precio por volumen), threshold_unit (descuento por umbral), y percent_off (descuento porcentual)',
        'Optimizador de ofertas con estrategia greedy y programación dinámica que selecciona la combinación de promociones que maximiza el ahorro del cliente',
        'Sistema de carrito en tiempo real con cálculo instantáneo de precios y descuentos aplicados, persistido en sessionStorage',
        'Panel de administración completo con gestión visual de productos, categorías y ofertas complejas, incluyendo configuración de múltiples tiers por promoción',
        'Búsqueda y filtrado avanzado por categorías, nombre de producto y ofertas activas con resultados instantáneos',
        'Exportación de catálogos a PDF con imágenes incrustadas, categorización automática y diseño profesional para impresión',
        'Sistema de upload de imágenes integrado con Sirv CDN, incluyendo validación, optimización y caché de tokens de autenticación',
        'Gestión de ofertas temporales con validación automática de vigencia por fechas de inicio/fin'
      ],
      techDecisions: [
        {
          title: 'Motor de Pricing como Función Pura',
          reason: 'Separar la lógica de cálculo de precios del acceso a datos permite testing exhaustivo sin dependencias externas. La función priceCart() es determinista y puede ejecutarse tanto en servidor como cliente.',
          benefit: 'Implementé algoritmo greedy O(n*m) con programación dinámica para casos tiered_total, balanceando optimalidad con performance (~50-100ms para carritos de 50 items). Permite unit testing sin mocks de base de datos y garantiza pricing consistente en todas las capas de la aplicación.'
        },
        {
          title: 'PostgreSQL con Neon Serverless + Esquema Normalizado de Ofertas',
          reason: 'El modelo de datos requería flexibilidad extrema para soportar promociones complejas sin conocer futuros tipos de ofertas. Diseñé un esquema con 3 tablas relacionadas: deals (metadatos), deal_tiers (pricing por escalas), y deal_products (productos participantes).',
          benefit: 'Permite desde "2x1" hasta "Combo Mayo+Atún $240" o "3+ unidades a $650 c/u" sin cambios de schema. Neon Serverless elimina cold starts y se adapta automáticamente al tráfico, proporcionando performance y costo predecibles.'
        },
        {
          title: 'Autenticación con Cookies HTTP-only',
          reason: 'Las cookies HTTP-only son inmunes a ataques XSS, a diferencia de localStorage. Implementé un sistema simple pero seguro con cookies de 7 días, validación server-side en Server Actions y middleware.',
          benefit: 'Para un MVP no requería OAuth2/NextAuth completo, pero la arquitectura permite escalar fácilmente agregando providers externos. Mejor seguridad comparado con JWT en localStorage manteniendo simplicidad.'
        },
        {
          title: 'Sirv CDN para Imágenes con Caché de Tokens',
          reason: 'Comparado con S3 o Cloudinary, Sirv ofrece CDN global, transformación automática de imágenes (WebP, lazy-loading) y pricing predecible. Implementé sistema de caché de tokens (refreshed automáticamente 1 min antes de expirar).',
          benefit: 'Reduce las llamadas de autenticación de 100+ a ~2-3 por día, mejorando la latencia de uploads un 40%. Optimización automática de imágenes y entrega responsive sin configuración manual.'
        },
        {
          title: 'Arquitectura Híbrida Server Components + Client Components',
          reason: 'Next.js 16 permite optimizar el bundle inicial al máximo. Páginas como / y /producto/[id] son Server Components que hacen fetch en el servidor (reduciendo waterfalls), mientras que interacciones como carrito, búsqueda y admin son Client Components.',
          benefit: 'Resultó en un FCP de ~800ms y TTI de ~1.2s en 3G Fast. Reducción de JavaScript enviado al cliente mientras mantiene interactividad rica donde se necesita.'
        }
      ],
      challenges: [
        {
          problem: 'Optimización del algoritmo de aplicación de múltiples ofertas: Inicialmente el motor probaba todas las combinaciones posibles de ofertas (fuerza bruta), resultando en O(2^n) para n deals activos. Con 10+ ofertas concurrentes, el cálculo tomaba >5 segundos, bloqueando el carrito.',
          solution: 'Implementé una estrategia greedy: ordeno los deals por descuento/unidad y aplico el más rentable primero, trackeando unidades disponibles por producto para evitar "doble descuento". Para casos tiered_total con apply_mode: best_price, agregué un solver de programación dinámica que encuentra la combinación óptima de tiers en O(n*q²) donde q = cantidad. Tiempo reducido a <100ms promedio.'
        },
        {
          problem: 'Sincronización de precios entre cliente y servidor: El carrito calculaba precios en el cliente usando precios cacheados, pero si un administrador actualizaba precios en DB, el usuario veía totales incorrectos hasta refresh. Además, era un vector de ataque (manipular localStorage para cambiar precios).',
          solution: 'Convertí el carrito a un sistema híbrido: el cliente solo trackea {productId, qty} en sessionStorage. Al abrir el drawer o modificar items, llamo a /api/cart/price que recalcula todo en el servidor con precios frescos de DB y deals activos. Implementé debouncing (300ms) para evitar spam de requests. Resultado: precios siempre correctos, seguridad garantizada, y UX fluida con spinners durante cálculo.'
        },
        {
          problem: 'Generación de PDFs con imágenes sin errores CORS: jsPDF necesita imágenes en base64 para incrustarlas, pero fetch() de URLs cross-origin (Sirv CDN) fallaba por CORS. Los catálogos exportados mostraban placeholders en lugar de fotos de productos.',
          solution: 'Configuré los headers CORS en Sirv para permitir Access-Control-Allow-Origin: * en las imágenes. Implementé una función loadImageAsBase64() que hace fetch + FileReader + Promise y convierte las imágenes a base64 en el navegador. Agregué fallbacks: si una imagen falla (timeout, 404), continúa la generación del PDF con un placeholder genérico, evitando errores totales. Time to generate: ~3-5s para catálogos de 100 productos.'
        }
      ]
    },
    pt: {
      title: 'E-commerce com Motor de Preços Inteligente',
      tagline: 'Sistema de promoções inteligente com ofertas multi-tier dinâmicas',
      description: 'Plataforma de e-commerce para vendedor independente com motor de pricing inteligente que calcula automaticamente a combinação ótima de promoções (combos, descontos por volume, ofertas por limite, descontos percentuais) para maximizar a economia do cliente sem duplicar descontos.',
      context: 'Desenvolvido para um vendedor independente que gerencia um negócio de produtos com entrega e retirada. Antes do sistema, o vendedor publicava manualmente imagens de suas ofertas/produtos em stories de redes sociais diariamente, dificultando a gestão de inventário, rastreamento de pedidos e aplicação correta de promoções. O problema principal era escalar o negócio sem uma plataforma que permitisse gerenciar múltiplos tipos de ofertas simultâneas que deviam se aplicar automaticamente ao carrinho de forma ótima, maximizando a economia do cliente sem duplicar descontos no mesmo produto.',
      role: 'Full-Stack Developer de ponta a ponta, responsável pelo design, arquitetura, implementação e implantação completa. Projetei e implementei o motor de cálculo de preços com algoritmos de otimização, arquitetei banco de dados PostgreSQL com sistema de ofertas multi-tier, desenvolvi backend e frontend com Next.js 16 (App Router, Server Actions, Route Handlers), TypeScript e TailwindCSS. Criei painel de administração com gestão CRUD de produtos, categorias e ofertas. Implementei sistema de autenticação com cookies HTTP-only, integrei com Sirv CDN para gestão de imagens, criei suite de testes com Vitest alcançando 85% de cobertura, e configurei implantação segura com variáveis de ambiente.',
      features: [
        'Motor de pricing inteligente com 4 tipos de promoções: bundles (combos), tiered_total (preço por volume), threshold_unit (desconto por limite), e percent_off (desconto percentual)',
        'Otimizador de ofertas com estratégia greedy e programação dinâmica que seleciona a combinação de promoções que maximiza a economia do cliente',
        'Sistema de carrinho em tempo real com cálculo instantâneo de preços e descontos aplicados, persistido em sessionStorage',
        'Painel de administração completo com gestão visual de produtos, categorias e ofertas complexas, incluindo configuração de múltiplos tiers por promoção',
        'Busca e filtragem avançada por categorias, nome de produto e ofertas ativas com resultados instantâneos',
        'Exportação de catálogos para PDF com imagens incorporadas, categorização automática e design profissional para impressão',
        'Sistema de upload de imagens integrado com Sirv CDN, incluindo validação, otimização e cache de tokens de autenticação',
        'Gestão de ofertas temporárias com validação automática de vigência por datas de início/fim'
      ],
      techDecisions: [
        {
          title: 'Motor de Pricing como Função Pura',
          reason: 'Separar a lógica de cálculo de preços do acesso a dados permite testes exaustivos sem dependências externas. A função priceCart() é determinística e pode ser executada tanto no servidor quanto no cliente.',
          benefit: 'Implementei algoritmo greedy O(n*m) com programação dinâmica para casos tiered_total, balanceando otimalidade com performance (~50-100ms para carrinhos de 50 itens). Permite testes unitários sem mocks de banco de dados e garante pricing consistente em todas as camadas da aplicação.'
        },
        {
          title: 'PostgreSQL com Neon Serverless + Esquema Normalizado de Ofertas',
          reason: 'O modelo de dados exigia flexibilidade extrema para suportar promoções complexas sem conhecer futuros tipos de ofertas. Projetei um esquema com 3 tabelas relacionadas: deals (metadados), deal_tiers (pricing por escalas), e deal_products (produtos participantes).',
          benefit: 'Permite desde "2x1" até "Combo Maionese+Atum $240" ou "3+ unidades a $650 cada" sem mudanças de schema. Neon Serverless elimina cold starts e se adapta automaticamente ao tráfego, proporcionando performance e custo previsíveis.'
        },
        {
          title: 'Autenticação com Cookies HTTP-only',
          reason: 'Cookies HTTP-only são imunes a ataques XSS, ao contrário de localStorage. Implementei um sistema simples mas seguro com cookies de 7 dias, validação server-side em Server Actions e middleware.',
          benefit: 'Para um MVP não requeria OAuth2/NextAuth completo, mas a arquitetura permite escalar facilmente adicionando providers externos. Melhor segurança comparado com JWT em localStorage mantendo simplicidade.'
        },
        {
          title: 'Sirv CDN para Imagens com Cache de Tokens',
          reason: 'Comparado com S3 ou Cloudinary, Sirv oferece CDN global, transformação automática de imagens (WebP, lazy-loading) e pricing previsível. Implementei sistema de cache de tokens (atualizado automaticamente 1 min antes de expirar).',
          benefit: 'Reduz as chamadas de autenticação de 100+ para ~2-3 por dia, melhorando a latência de uploads em 40%. Otimização automática de imagens e entrega responsiva sem configuração manual.'
        },
        {
          title: 'Arquitetura Híbrida Server Components + Client Components',
          reason: 'Next.js 16 permite otimizar o bundle inicial ao máximo. Páginas como / e /produto/[id] são Server Components que fazem fetch no servidor (reduzindo waterfalls), enquanto interações como carrinho, busca e admin são Client Components.',
          benefit: 'Resultou em um FCP de ~800ms e TTI de ~1.2s em 3G Fast. Redução de JavaScript enviado ao cliente enquanto mantém interatividade rica onde necessária.'
        }
      ],
      challenges: [
        {
          problem: 'Otimização do algoritmo de aplicação de múltiplas ofertas: Inicialmente o motor tentava todas as combinações possíveis de ofertas (força bruta), resultando em O(2^n) para n deals ativos. Com 10+ ofertas concorrentes, o cálculo levava >5 segundos, bloqueando o carrinho.',
          solution: 'Implementei uma estratégia greedy: ordeno os deals por desconto/unidade e aplico o mais lucrativo primeiro, rastreando unidades disponíveis por produto para evitar "desconto duplo". Para casos tiered_total com apply_mode: best_price, adicionei um solver de programação dinâmica que encontra a combinação ótima de tiers em O(n*q²) onde q = quantidade. Tempo reduzido para <100ms em média.'
        },
        {
          problem: 'Sincronização de preços entre cliente e servidor: O carrinho calculava preços no cliente usando preços em cache, mas se um administrador atualizasse preços no DB, o usuário via totais incorretos até o refresh. Além disso, era um vetor de ataque (manipular localStorage para mudar preços).',
          solution: 'Converti o carrinho para um sistema híbrido: o cliente apenas rastreia {productId, qty} em sessionStorage. Ao abrir a gaveta ou modificar itens, chamo /api/cart/price que recalcula tudo no servidor com preços frescos do DB e deals ativos. Implementei debouncing (300ms) para evitar spam de requests. Resultado: preços sempre corretos, segurança garantida, e UX fluida com spinners durante cálculo.'
        },
        {
          problem: 'Geração de PDFs com imagens sem erros CORS: jsPDF precisa de imagens em base64 para incorporá-las, mas fetch() de URLs cross-origin (Sirv CDN) falhava por CORS. Os catálogos exportados mostravam placeholders em vez de fotos de produtos.',
          solution: 'Configurei os headers CORS no Sirv para permitir Access-Control-Allow-Origin: * nas imagens. Implementei uma função loadImageAsBase64() que faz fetch + FileReader + Promise e converte as imagens para base64 no navegador. Adicionei fallbacks: se uma imagem falhar (timeout, 404), continua a geração do PDF com um placeholder genérico, evitando falhas totais. Tempo para gerar: ~3-5s para catálogos de 100 produtos.'
        }
      ]
    }
  }
};
