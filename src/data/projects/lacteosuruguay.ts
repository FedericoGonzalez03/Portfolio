import { Project } from './types';

export const lacteosUruguay: Project = {
  slug: 'lacteos-uruguay-ecommerce',
  category: 'ecommerce',
  client: 'LácteosUruguay',
  year: '2026',
  status: 'production',
  techStack: [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'PostgreSQL',
    'Neon Serverless',
    'Tailwind CSS 4',
    'Vitest',
    'Sirv CDN',
    'Zod',
    'jsPDF',
    'Radix UI',
    'Vercel Analytics'
  ],
  images: {
    hero: '/projects/lacteosuruguay/hero.webp',
    gallery: [
      '/projects/lacteosuruguay/cart.webp',
      '/projects/lacteosuruguay/admin.webp',
      '/projects/lacteosuruguay/products.webp',
      '/projects/lacteosuruguay/offers.webp'
    ]
  },
  links: {
    liveDemo: 'https://lacteosuruguay.uy',
    github: 'https://github.com/KodaTekUY/lacteosuruguay'
  },
  translations: {
    en: {
      title: 'Dairy E-commerce with WhatsApp Checkout',
      tagline: 'Promotion-aware catalog, server-priced cart, and admin backoffice',
      description:
        'Production-ready e-commerce for a Uruguayan dairy business with active deals, server-side cart pricing, checkout through WhatsApp, and an authenticated admin panel for day-to-day catalog management.',
      context:
        'Built for a local dairy and supplies business operating in Ecilda Paullier, San José, Uruguay. The repository implements the operational core needed to run the store online: public catalog browsing, offer visibility, price-safe cart calculations, order registration, image handling, and management for categories, products, and promotions.',
      role:
        'End-to-end full-stack development across architecture, database design, storefront, backoffice, API routes, authentication, and deployment-oriented configuration. Implemented the public catalog and detail pages with Next.js App Router, created the normalized promotions schema and cart pricing flow, built authenticated Server Actions for admin CRUD, integrated Sirv for uploads, added PDF export, structured SEO metadata, and test coverage around pricing, admin flows, uploads, SEO, and UI logic.',
      features: [
        'Public catalog with server-side search, category filtering, pagination, and infinite scroll',
        'Deal system supporting 4 promotion types: bundle, tiered_total, threshold_unit, and percent_off',
        'Server-priced cart that recalculates totals from fresh database prices and active deals through /api/cart/price',
        'WhatsApp checkout flow with phone confirmation, optional phone persistence, and order registration in PostgreSQL before redirect',
        'Authenticated admin panel with CRUD for categories, products, and multi-tier deals, plus credential rotation',
        'Product detail and deal detail pages, including support for multiple product images and gallery/carousel display',
        'Catalog PDF export grouped by category with embedded product images for download or printing',
        'Image upload pipeline with file validation, Sirv token caching, and remote image optimization support',
        'Technical SEO base with canonical metadata, JSON-LD, robots.txt and sitemap.xml'
      ],
      techDecisions: [
        {
          title: 'Server-Side Cart Pricing with Separate Engine and Service Layers',
          reason:
            'The repo explicitly avoids trusting client prices. The cart only persists product IDs and quantities, while the API recomputes pricing from PostgreSQL using active deals.',
          benefit:
            'Prevents price tampering, fixes stale-client pricing issues, and keeps the core pricing logic testable while the service layer handles database reads and active-deal resolution.'
        },
        {
          title: 'Normalized Promotions Schema in PostgreSQL',
          reason:
            'Deals are modeled with deals, deal_products, and deal_tiers, plus deal_type and apply_mode fields to support bundles, quantity tiers, threshold pricing, and percentage discounts.',
          benefit:
            'Allows complex promotions without schema rewrites, keeps the admin flexible, and makes pricing rules extensible as the business adds new offer combinations.'
        },
        {
          title: 'Signed HTTP-only Cookie Authentication for Admin',
          reason:
            'The admin uses signed cookies, PBKDF2 password hashing, and server-side auth guards in Server Actions and API routes instead of exposing auth state to the client.',
          benefit:
            'Keeps the backoffice simple for a small commerce operation while still providing solid protection for catalog and promotion management workflows.'
        },
        {
          title: 'Hybrid App Router Architecture',
          reason:
            'Home and detail pages fetch data on the server, while search, cart, export, and admin interactions stay client-side where immediate feedback matters.',
          benefit:
            'Reduces initial client work for public pages while preserving responsive interactions for the operational parts of the store.'
        },
        {
          title: 'Sirv CDN Integration with Token Caching',
          reason:
            'Uploads go through a protected API route that validates files and caches the Sirv access token before pushing media to the CDN.',
          benefit:
            'Improves upload efficiency, centralizes media validation, and keeps product imagery ready for optimized remote delivery through next/image.'
        }
      ],
      challenges: [
        {
          problem:
            'Catalog scalability: the original approach of loading and filtering everything on the client does not scale as the catalog grows.',
          solution:
            'Search, category filtering, and pagination were moved to the database, exposed through a catalog API, and paired with infinite scroll on the storefront plus paginated tables in admin.'
        },
        {
          problem:
            'Keeping cart totals correct while users change quantities quickly can create stale responses and race conditions, especially when discounts depend on live database prices and active date windows.',
          solution:
            'The cart now sends only { productId, qty } to the pricing API, debounces requests, cancels outdated ones through a pricing request manager, and merges only the latest server response into UI state.'
        },
      ]
    },
    es: {
      title: 'E-commerce de Lácteos con Checkout por WhatsApp',
      tagline: 'Catálogo con promociones, carrito con pricing server-side y panel admin',
      description:
        'E-commerce productivo para un negocio uruguayo de lácteos con ofertas activas, pricing de carrito calculado en servidor, checkout por WhatsApp y panel de administración autenticado para la gestión diaria del catálogo.',
      context:
        'Desarrollado para un negocio local de lácteos e insumos que opera en Ecilda Paullier, San José, Uruguay. El repositorio implementa el núcleo operativo necesario para vender online: navegación pública del catálogo, visibilidad de ofertas, cálculos seguros de precios en carrito, registro de pedidos, gestión de imágenes y administración de categorías, productos y promociones.',
      role:
        'Desarrollo full-stack end-to-end sobre arquitectura, diseño de base de datos, storefront, backoffice, API routes, autenticación y configuración orientada a despliegue. Implementé el catálogo público y las páginas de detalle con Next.js App Router, diseñé el esquema normalizado de promociones y el flujo de pricing del carrito, construí Server Actions autenticadas para el CRUD admin, integré Sirv para uploads, agregué exportación PDF, metadata SEO estructurada y cobertura de tests sobre pricing, admin, uploads, SEO y lógica de UI.',
      features: [
        'Catálogo público con búsqueda server-side, filtro por categorías, paginación e infinite scroll',
        'Sistema de ofertas con 4 tipos de promoción: bundle, tiered_total, threshold_unit y percent_off',
        'Carrito con pricing en servidor que recalcula totales con precios frescos de base de datos y ofertas activas vía /api/cart/price',
        'Checkout por WhatsApp con confirmación de teléfono, persistencia opcional del número y registro del pedido en PostgreSQL antes de redirigir',
        'Panel de administración autenticado con CRUD de categorías, productos y ofertas multi-tier, además de cambio de credenciales',
        'Páginas de detalle de producto y oferta, incluyendo soporte para múltiples imágenes por producto y galería/carrusel',
        'Exportación de catálogo a PDF agrupado por categoría con imágenes embebidas para descarga o impresión',
        'Pipeline de upload de imágenes con validación de archivos, caché de token de Sirv y soporte para optimización remota',
        'Base de SEO técnico con metadata canonical, JSON-LD, robots.txt y sitemap.xml'
      ],
      techDecisions: [
        {
          title: 'Pricing del Carrito en Servidor con Engine y Service Separados',
          reason:
            'El repositorio evita confiar en precios enviados por el cliente. El carrito solo persiste IDs de producto y cantidades, mientras la API recalcula pricing desde PostgreSQL usando ofertas activas.',
          benefit:
            'Previene manipulación de precios, corrige problemas de totales desactualizados en cliente y mantiene la lógica central de pricing testeable mientras la capa de servicio resuelve lecturas de base y promociones activas.'
        },
        {
          title: 'Esquema Normalizado de Promociones en PostgreSQL',
          reason:
            'Las promociones se modelan con deals, deal_products y deal_tiers, además de deal_type y apply_mode para soportar combos, escalas por cantidad, precios por umbral y descuentos porcentuales.',
          benefit:
            'Permite promociones complejas sin rehacer el schema, mantiene flexibilidad en el admin y deja el sistema listo para agregar nuevas combinaciones comerciales.'
        },
        {
          title: 'Autenticación Admin con Cookies HTTP-only Firmadas',
          reason:
            'El admin usa cookies firmadas, hashing PBKDF2 y guards server-side en Server Actions y API routes en lugar de exponer el estado de auth al cliente.',
          benefit:
            'Mantiene el backoffice simple para una operación comercial chica, pero con una protección razonable para la gestión de catálogo y promociones.'
        },
        {
          title: 'Arquitectura Híbrida con App Router',
          reason:
            'Home y páginas de detalle cargan datos en servidor, mientras búsqueda, carrito, exportación y administración quedan en cliente donde importa la respuesta inmediata.',
          benefit:
            'Reduce trabajo inicial del cliente en páginas públicas y conserva interacciones ágiles en las partes operativas de la tienda.'
        },
        {
          title: 'Integración con Sirv CDN y Caché de Token',
          reason:
            'Los uploads pasan por una API protegida que valida archivos y reutiliza el token de Sirv antes de enviar media al CDN.',
          benefit:
            'Mejora la eficiencia de subida, centraliza la validación de archivos y deja las imágenes listas para entrega remota optimizada con next/image.'
        }
      ],
      challenges: [
        {
          problem:
            'Escalabilidad del catálogo: cargar y filtrar todo en cliente no escala bien cuando el catálogo crece.',
          solution:
            'La búsqueda, el filtro por categoría y la paginación se movieron a base de datos, se expusieron vía API de catálogo y se complementaron con infinite scroll en la tienda y tablas paginadas en admin.'
        },
        {
          problem:
            'Mantener los totales del carrito correctos mientras el usuario cambia cantidades rápido puede generar respuestas viejas y condiciones de carrera, sobre todo cuando los descuentos dependen de precios vigentes y ventanas activas.',
          solution:
            'El carrito ahora envía solo { productId, qty } a la API de pricing, hace debounce de requests, cancela las obsoletas con un pricing request manager y solo fusiona en UI la última respuesta válida.'
        },
      ]
    },
    pt: {
      title: 'E-commerce de Laticínios com Checkout via WhatsApp',
      tagline: 'Catálogo com promoções, carrinho precificado no servidor e painel admin',
      description:
        'E-commerce pronto para produção para um negócio uruguaio de laticínios, com ofertas ativas, precificação do carrinho no servidor, checkout via WhatsApp e painel administrativo autenticado para a gestão diária do catálogo.',
      context:
        'Desenvolvido para um negócio local de laticínios e insumos que opera em Ecilda Paullier, San José, Uruguai. O repositório implementa o núcleo operacional necessário para vender online: navegação pública do catálogo, visibilidade de ofertas, cálculo seguro de preços no carrinho, registro de pedidos, gestão de imagens e administração de categorias, produtos e promoções.',
      role:
        'Desenvolvimento full-stack de ponta a ponta em arquitetura, modelagem de banco de dados, storefront, backoffice, rotas de API, autenticação e configuração voltada para deploy. Implementei o catálogo público e as páginas de detalhe com Next.js App Router, desenhei o schema normalizado de promoções e o fluxo de pricing do carrinho, construí Server Actions autenticadas para o CRUD admin, integrei Sirv para uploads, adicionei exportação em PDF, metadata SEO estruturada e cobertura de testes sobre pricing, admin, uploads, SEO e lógica de UI.',
      features: [
        'Catálogo público com busca server-side, filtro por categorias, paginação e infinite scroll',
        'Sistema de ofertas com 4 tipos de promoção: bundle, tiered_total, threshold_unit e percent_off',
        'Carrinho com pricing no servidor que recalcula totais com preços atualizados do banco e ofertas ativas via /api/cart/price',
        'Checkout via WhatsApp com confirmação de telefone, persistência opcional do número e registro do pedido em PostgreSQL antes do redirecionamento',
        'Painel administrativo autenticado com CRUD de categorias, produtos e ofertas multi-tier, além de troca de credenciais',
        'Páginas de detalhe de produto e oferta, incluindo suporte a múltiplas imagens por produto e galeria/carrossel',
        'Exportação do catálogo em PDF agrupado por categoria com imagens embutidas para download ou impressão',
        'Pipeline de upload de imagens com validação de arquivos, cache de token do Sirv e suporte para otimização remota',
        'Base de SEO técnico com metadata canonical, JSON-LD, robots.txt e sitemap.xml'
      ],
      techDecisions: [
        {
          title: 'Pricing do Carrinho no Servidor com Engine e Service Separados',
          reason:
            'O repositório evita confiar em preços enviados pelo cliente. O carrinho persiste apenas IDs de produto e quantidades, enquanto a API recalcula o pricing a partir do PostgreSQL usando promoções ativas.',
          benefit:
            'Evita manipulação de preço, corrige totais desatualizados no cliente e mantém a lógica central de pricing testável, enquanto a camada de serviço resolve leituras de banco e promoções ativas.'
        },
        {
          title: 'Schema Normalizado de Promoções em PostgreSQL',
          reason:
            'As promoções são modeladas com deals, deal_products e deal_tiers, além de deal_type e apply_mode para suportar combos, faixas por quantidade, preço por limite e descontos percentuais.',
          benefit:
            'Permite promoções complexas sem refazer o schema, mantém flexibilidade no admin e deixa o sistema preparado para novas combinações comerciais.'
        },
        {
          title: 'Autenticação Admin com Cookies HTTP-only Assinados',
          reason:
            'O admin usa cookies assinados, hash de senha com PBKDF2 e guards server-side em Server Actions e rotas de API em vez de expor o estado de autenticação ao cliente.',
          benefit:
            'Mantém o backoffice simples para uma operação comercial enxuta, mas com proteção suficiente para o gerenciamento de catálogo e promoções.'
        },
        {
          title: 'Arquitetura Híbrida com App Router',
          reason:
            'Home e páginas de detalhe carregam dados no servidor, enquanto busca, carrinho, exportação e administração permanecem no cliente onde a resposta imediata importa mais.',
          benefit:
            'Reduz trabalho inicial no cliente nas páginas públicas e preserva interações rápidas nas partes operacionais da loja.'
        },
        {
          title: 'Integração com Sirv CDN e Cache de Token',
          reason:
            'Os uploads passam por uma rota protegida de API que valida os arquivos e reutiliza o token do Sirv antes de enviar a mídia para o CDN.',
          benefit:
            'Melhora a eficiência do upload, centraliza a validação de arquivos e deixa as imagens prontas para entrega remota otimizada com next/image.'
        }
      ],
      challenges: [
        {
          problem:
            'Escalabilidade do catálogo: carregar e filtrar tudo no cliente não escala bem conforme o catálogo cresce.',
          solution:
            'Busca, filtro por categoria e paginação foram movidos para o banco, expostos por uma API de catálogo e complementados com infinite scroll na loja e tabelas paginadas no admin.'
        },
        {
          problem:
            'Manter os totais do carrinho corretos enquanto o usuário altera quantidades rapidamente pode gerar respostas antigas e condições de corrida, principalmente quando os descontos dependem de preços atuais e janelas ativas.',
          solution:
            'O carrinho agora envia apenas { productId, qty } para a API de pricing, aplica debounce nas requisições, cancela as obsoletas com um pricing request manager e só incorpora na UI a resposta mais recente.'
        },
      ]
    }
  }
};
