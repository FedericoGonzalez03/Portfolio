# E-commerce con Motor de Promociones Inteligente

## A) Contexto

Proyecto de e-commerce desarrollado para un vendedor independiente que maneja un negocio de productos con entrega y pick-up. Antes del sistema, el vendedor publicaba manualmente imágenes de sus ofertas/productos en stories de redes sociales diariamente, lo que dificultaba la gestión de inventario, el seguimiento de pedidos y la aplicación correcta de promociones.

El problema principal era escalar el negocio sin una plataforma que permitiera manejar múltiples tipos de ofertas simultáneas (combos, descuentos por volumen, packs, ofertas temporales) que debían aplicarse automáticamente al carrito de forma óptima, maximizando el ahorro del cliente sin duplicar descuentos sobre el mismo producto. El sistema tradicional solo permitía promociones simples publicadas en imágenes estáticas, resultando en confusión para los clientes y trabajo manual excesivo para el vendedor.

## B) Mi rol

**Full-Stack Developer End-to-End** — Responsable del diseño, arquitectura, implementación y despliegue completo de la solución.

**Áreas desarrolladas:**
- Diseño e implementación del motor de cálculo de precios con algoritmos de optimización
- Arquitectura de base de datos PostgreSQL con sistema de ofertas multi-tier
- Backend y Frontend con Next.js 16 (App Router, Server Actions, Route Handlers), TypeScript y TailwindCSS
- Panel de administración con gestión CRUD de productos, categorías y ofertas
- Sistema de autenticación con cookies HTTP-only
- Integración con Sirv CDN para gestión de imágenes
- Testing con Vitest y cobertura de tests unitarios
- Configuración de despliegue con variables de entorno seguras

## C) Qué construí

### Features principales:

- **Motor de pricing inteligente** con 4 tipos de promociones: bundles (combos), tiered_total (precio por volumen), threshold_unit (descuento por umbral), y percent_off (descuento porcentual)
- **Optimizador de ofertas** con estrategia greedy y programación dinámica que selecciona la combinación de promociones que maximiza el ahorro del cliente
- **Sistema de carrito en tiempo real** con cálculo instantáneo de precios y descuentos aplicados, persistido en sessionStorage
- **Panel de administración completo** con gestión visual de productos, categorías y ofertas complejas, incluyendo configuración de múltiples tiers por promoción
- **Búsqueda y filtrado avanzado** por categorías, nombre de producto y ofertas activas con resultados instantáneos
- **Exportación de catálogos a PDF** con imágenes incrustadas, categorización automática y diseño profesional para impresión
- **Sistema de upload de imágenes** integrado con Sirv CDN, incluyendo validación, optimización y caché de tokens de autenticación
- **Gestión de ofertas temporales** con validación automática de vigencia por fechas de inicio/fin

## D) Decisiones técnicas

### 1. Motor de pricing como función pura (lib/cart-pricing/engine.ts)
**Por qué:** Separar la lógica de cálculo de precios del acceso a datos permite testing exhaustivo sin dependencias externas. La función `priceCart()` es determinista y puede ejecutarse tanto en servidor como cliente. Implementé un algoritmo greedy O(n*m) con programación dinámica para casos tiered_total, balanceando optimalidad con performance (~50-100ms para carritos de 50 items).

### 2. PostgreSQL con Neon Serverless + esquema normalizado de offers
**Por qué:** El modelo de datos requería flexibilidad extrema para soportar promociones complejas sin conocer futuros tipos de ofertas. Diseñé un esquema con 3 tablas relacionadas: `deals` (metadatos), `deal_tiers` (pricing por escalas), y `deal_products` (productos participantes). Esto permite desde "2x1" hasta "Combo Mayo+Atún $240" o "3+ unidades a $650 c/u" sin cambios de schema. Neon Serverless elimina cold starts y se adapta automáticamente al tráfico.

### 3. Autenticación con HTTP-only cookies en lugar de JWT en localStorage
**Por qué:** Las cookies HTTP-only son inmunes a ataques XSS, a diferencia de localStorage. Implementé un sistema simple pero seguro con cookies de 7 días, validación server-side en Server Actions y middleware. Para un MVP no requería OAuth2/NextAuth completo, pero la arquitectura permite escalar fácilmente agregando providers externos.

### 4. Sirv CDN para imágenes con caché de tokens
**Por qué:** Comparado con S3 o Cloudinary, Sirv ofrece CDN global, transformación automática de imágenes (WebP, lazy-loading) y pricing predecible. Implementé un sistema de caché de tokens (refreshed automáticamente 1 min antes de expirar) que reduce las llamadas de autenticación de 100+ a ~2-3 por día, mejorando la latencia de uploads un 40%.

### 5. Arquitectura de Server Components + Client Components híbrida
**Por qué:** Next.js 16 permite optimizar el bundle inicial al máximo. Páginas como `/` y `/producto/[id]` son Server Components que hacen fetch en el servidor (reduciendo waterfalls), mientras que interacciones como carrito, búsqueda y admin son Client Components. Esto resultó en un FCP de ~800ms y TTI de ~1.2s en 3G Fast.

## E) Desafíos y cómo los resolví

### 1. Optimización del algoritmo de aplicación de múltiples ofertas
**Problema:** Inicialmente el motor probaba todas las combinaciones posibles de ofertas (fuerza bruta), resultando en O(2^n) para n deals activos. Con 10+ ofertas concurrentes, el cálculo tomaba >5 segundos, bloqueando el carrito.

**Solución:** Implementé una estrategia greedy: ordeno los deals por descuento/unidad y aplico el más rentable primero, trackeando unidades disponibles por producto para evitar "doble descuento". Para casos `tiered_total` con `apply_mode: best_price`, agregué un solver de programación dinámica que encuentra la combinación óptima de tiers en O(n*q²) donde q = cantidad. Tiempo reducido a <100ms promedio.

### 2. Sincronización de precios entre cliente y servidor
**Problema:** El carrito calculaba precios en el cliente usando precios cacheados, pero si un administrador actualizaba precios en DB, el usuario veía totales incorrectos hasta refresh. Además, era un vector de ataque (manipular localStorage para cambiar precios).

**Solución:** Convertí el carrito a un sistema híbrido: el cliente solo trackea `{productId, qty}` en sessionStorage. Al abrir el drawer o modificar items, llamo a `/api/cart/price` que recalcula todo en el servidor con precios frescos de DB y deals activos. Implementé debouncing (300ms) para evitar spam de requests. Resultado: precios siempre correctos, seguridad garantizada, y UX fluida con spinners durante cálculo.

### 3. Generación de PDFs con imágenes sin CORS errors
**Problema:** jsPDF necesita imágenes en base64 para incrustarlas, pero `fetch()` de URLs cross-origin (Sirv CDN) fallaba por CORS. Los catálogos exportados mostraban placeholders en lugar de fotos de productos.

**Solución:** Configuré los headers CORS en Sirv para permitir `Access-Control-Allow-Origin: *` en las imágenes. Implementé una función `loadImageAsBase64()` que hace fetch + FileReader + Promise y convierte las imágenes a base64 en el navegador. Agregué fallbacks: si una imagen falla (timeout, 404), continúa la generación del PDF con un placeholder genérico, evitando errores totales. Time to generate: ~3-5s para catálogos de 100 productos.

### 4. Testing de lógica compleja de ofertas sin flakiness
**Problema:** El motor de pricing tiene >500 líneas de lógica con casos edge (ofertas vencidas, combos incompletos, tiers overlapping). Tests iniciales eran flaky porque dependían de fechas reales y datos mock inconsistentes.

**Solución:** Diseñé el motor como función pura que acepta `now: Date` como parámetro, permitiendo inyectar timestamps fijos en tests. Creé fixtures reutilizables con todos los casos edge documentados. Implementé 45 tests unitarios con Vitest cubriendo cada tipo de deal y modo de aplicación. Configuré coverage threshold al 85%. Los tests son deterministas, rápidos (<2s total) y sirven como documentación viva de la lógica de negocio.

---

**Stack técnico:** Next.js 16 (App Router), React 19, TypeScript, PostgreSQL (Neon), TailwindCSS 4, Radix UI, Vitest, Sirv CDN, Zod, React Hook Form

