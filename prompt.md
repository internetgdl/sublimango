# Prompt para implementar mejoras SEO en sublimango.com

Copia y pega el bloque siguiente, completo, en un asistente de código o desarrollo web. Antes de publicarlo, confirma con Eduardo la dirección exacta de Zapopan, los horarios de ambas sucursales y si el local de Ocampo 340 sigue activo. Donde el prompt dice «CONFIRMAR», no inventes datos.

---

Eres un desarrollador web y especialista SEO. Vas a implementar mejoras en el sitio de **Sublimango** (https://sublimango.com/), un taller de impresión en la Zona Metropolitana de Guadalajara, Jalisco, México, con audiencia en español (`es-MX`).

## Contexto del negocio (no lo contradigas)

Dos sucursales, cada una con una especialidad:

1. **Sublimango DTF Maquila — San Juan Bosco, Guadalajara**
   - Servicios: maquila de DTF por metro (impresión a 58 cm de ancho, sin límite de colores, transfers listos para planchar, sin cortar ni depilar, funciona en cualquier tela y color, entrega el mismo día) y sublimación (tazas, termos, playeras de poliéster y artículos personalizados) y playeras personalizadas desde una pieza.
   - Dirección publicada hoy: Rita Pérez de Moreno 454-A, Col. San Juan Bosco, Guadalajara, Jal.
   - Teléfono / WhatsApp: 33 3302 4044 → https://wa.me/523333024044
   - Facebook: https://www.facebook.com/profile.php?id=100063491794032

2. **Sublimango Zapopan — Material publicitario**
   - Servicios: lonas y banners, vinil y stickers, tarjetas y flyers, artículos promocionales (termos, tazas, regalos con logo).
   - Dirección publicada hoy (incompleta): «Zapopan Centro, Zapopan, Jal.» En directorios de terceros aparece Zaragoza 13, Zapopan, C.P. 45100. **CONFIRMAR con Eduardo la calle, número, colonia y C.P. antes de publicarlos.** No uses Zaragoza 13 si él no lo confirma.
   - Teléfono / WhatsApp: 33 1754 0340 → https://wa.me/523317540340
   - Correo: dtf.zapopan@gmail.com
   - Facebook: https://www.facebook.com/dtf.zapopan

Horarios: **no están en el sitio.** **CONFIRMAR** con Eduardo los de cada sucursal (y si abren sábado) e incluirlos en la ficha, el footer y el schema. No inventes horarios.

También aparecen en fichas públicas un local en C. Ocampo 340, Zona Centro (tel. 33 2033 9909) y un teléfono 33 2787 2287 para DTF Maquila. **CONFIRMAR** si siguen vigentes. Si no, no los publiques y unifica el NAP en Google Business con lo del sitio.

El sitio actual es una sola página (sistema de plantillas SystemsMX / `text/x-dc`), detrás de Cloudflare, canonical en el apex `https://sublimango.com/`. Title actual: «Sublimango | Maquila de DTF y Sublimación en Guadalajara y Zapopan». H1 actual: «Imprimimos tu idea.». El HTML crudo deja tokens `{{ s.title }}`, `{{ b.name }}`, `{{ br.map }}`, etc., sin resolver. Casi cualquier ruta inexistente responde 200 con esa misma home (soft 404). `http://` responde 500 sin redirigir a HTTPS. `www.sublimango.com` no tiene registro DNS (NXDOMAIN). Las 10 imágenes de la home pesan 7,44 MB (varias PNG de 1–1,9 MB). El sitemap solo lista la home. Search Console todavía no tiene datos de consultas.

Palabras clave objetivo (México, intención local/comercial). Prioriza las de mayor intención de compra y la ciudad:

- Primarias: maquila DTF Guadalajara, DTF Guadalajara, impresión DTF Guadalajara, transfers DTF, DTF por metro, sublimación Guadalajara, tazas personalizadas Guadalajara, playeras personalizadas Guadalajara, material publicitario Zapopan, lonas Zapopan.
- Secundarias: sublimación Zapopan, tazas personalizadas Zapopan, vinil y stickers Zapopan, playeras DTF Guadalajara, artículos promocionales Guadalajara, maquila DTF por metro 58 cm.
- Marca: Sublimango, Sublimango DTF.

Los competidores que hoy ocupan esas búsquedas (Globalmerkc/sublimacionydtf.com, Flexus, Grupo Espejo, Grupo Textil Román, Playera Studio, Promos Creativos, etc.) ganan con **una URL y un H1 por servicio**, texto útil, dirección visible y CTA de WhatsApp. Hay que igualar esa estructura, sin copiar su contenido.

Idioma: todo el contenido visible en español de México. No traduzcas el sitio. No inventes precios, descuentos, reseñas ni «+N clientes» si no te los dan.

## Tareas, en este orden de prioridad

### A. Correcciones técnicas (hacer primero)

1. **HTTP → HTTPS:** `http://sublimango.com/*` y `http://www.sublimango.com/*` deben responder **301** a la URL HTTPS equivalente (y luego al apex, ver punto 2). Hoy responden 500 (Pingora) sin `Location`. Añade `Strict-Transport-Security` en HTTPS (por ejemplo `max-age=31536000; includeSubDomains` cuando la redirección esté estable).
2. **www:** crea el registro DNS de `www.sublimango.com` en Cloudflare (CNAME a apex o registro proxied). El certificado ya incluye `*.sublimango.com`. Redirige **301** `https://www.sublimango.com/*` → `https://sublimango.com/*` (el canonical ya es el apex).
3. **404 reales:** cualquier URL que no exista debe responder **HTTP 404** (no 200) con una página útil y propia: title «Página no encontrada | Sublimango», un H1 «No encontramos esta página», un texto breve, enlaces a inicio, servicios y sucursales, y un botón de WhatsApp. **Nunca** sirvas la home con status 200 en rutas inexistentes. Incluye `/favicon.ico`: no debe devolver la home en HTML; sirve un icono real (ICO o PNG 32×32) o un 404, preferible un favicon ligero.
4. Redirecciones que sí están bien y hay que mantener: `/index.html` → `/` (mejor 301 que 307, permanente). Si alguien entra a `/sublimación` o `/sublimacion` cuando ya exista la landing, que lleguen a la URL canónica de esa landing (ver sección B), no a una copia de la home.
5. **Favicon y apple-touch-icon:** no uses `assets/logo-circulo.png` (1800×1800, 387 KB) como icono. Genera PNG 32×32, 180×180 e ICO, de pocos KB.
6. Caché de estáticos: las imágenes, CSS, JS y fuentes versionadas deben llevar `Cache-Control` de larga duración (por ejemplo `public, max-age=31536000, immutable`) con hash o query de versión. El HTML puede seguir con revalidación corta.
7. `robots.txt` puede quedarse así, actualizando solo si hace falta:

```
User-agent: *
Allow: /

Sitemap: https://sublimango.com/sitemap.xml
```

No bloquees `/assets/` ni las landings nuevas.

### B. Arquitectura de contenidos y páginas nuevas

Abandona el modelo de una sola URL. Conserva la home como hub y crea páginas **con HTML propio**, title, meta description, canonical, H1 y texto indexable **ya renderizado en el servidor** (sin tokens `{{ … }}` en el HTML que ve el crawler). Cada página debe enlazar de forma interna a las demás y a las sucursales. Actualiza el menú (ya no solo anclas).

Usa estas URLs, títulos, descriptions y H1 (ajusta solo si te pasas de 60 caracteres en title o ~155 en description, sin cambiar la intención):

#### 1) Home — `https://sublimango.com/`

- Title: `Maquila DTF y sublimación en Guadalajara y Zapopan | Sublimango`
- Meta description: `Maquila de DTF a 58 cm, sublimación y material publicitario en Guadalajara y Zapopan. Transfers el mismo día. Cotiza por WhatsApp al 33 3302 4044.`
- H1: `Maquila de DTF y sublimación en Guadalajara y Zapopan`
- Puedes dejar «Imprimimos tu idea.» como claim debajo del H1, no como único H1.
- H2 sugeridos: `Maquila de DTF en Guadalajara`, `Sublimación de tazas, termos y playeras`, `Material publicitario en Zapopan`, `Dos sucursales en la ZMG`, `Cómo pedir por WhatsApp`, `Trabajos recientes`.
- Texto: 400–700 palabras útiles (qué hacen, para quién —talleres, emprendedores, negocios—, 58 cm, entrega el mismo día, cualquier tela/color en DTF, CTA a WhatsApp de la sucursal correcta). Enlaces visibles a todas las landings de la sección B.
- Canonical, og:url y og:title alineados con el title de esta página. og:locale `es_MX`.

#### 2) `/maquila-dtf`

- Title: `Maquila DTF en Guadalajara | Transfers el mismo día | Sublimango`
- Meta description: `Maquila de DTF por metro en Guadalajara. Impresión a 58 cm, sin límite de colores, transfers listos para planchar. Entrega el mismo día. Cotiza por WhatsApp.`
- H1: `Maquila de DTF en Guadalajara`
- Contenido: qué es la maquila DTF, para quién (talleres, marcas, revendedores), ancho de 58 cm, transfers listos para planchar, no hace falta cortar ni depilar, funciona en algodón, poliéster y colores oscuros, proceso (envía archivo → se imprime → se recoge el mismo día), qué archivo pedir (idealmente PNG/PDF, 300 dpi; si Eduardo tiene requisitos reales, úsalos), FAQ (¿por metro o por pieza?, ¿en qué telas?, ¿mismo día?). CTA WhatsApp San Juan Bosco. Enlace a `/transfers-dtf` y `/playeras-personalizadas`.

#### 3) `/transfers-dtf`

- Title: `Transfers DTF listos para planchar en Guadalajara | Sublimango`
- Meta description: `Transfers DTF a 58 cm, listos para planchar en cualquier tela y color. Sin cortar ni depilar. Maquila en San Juan Bosco, Guadalajara. Cotiza por WhatsApp.`
- H1: `Transfers DTF listos para planchar`
- Contenido enfocado al producto (el transfer), no solo al servicio de maquila. CTA San Juan Bosco.

#### 4) `/sublimacion`

- Title: `Sublimación en Guadalajara: tazas, termos y playeras | Sublimango`
- Meta description: `Sublimación de tazas, termos, playeras de poliéster y artículos personalizados en Guadalajara. Colores permanentes. Cotiza por WhatsApp con Sublimango.`
- H1: `Sublimación de tazas, termos y playeras en Guadalajara`
- Explica brevemente cuándo sí aplica la sublimación (poliéster claro / artículos recubiertos) y cuándo conviene DTF (algodón o telas oscuras), enlazando a `/maquila-dtf`. Lista de productos con enlaces a `/tazas-personalizadas` y `/playeras-personalizadas`. CTA San Juan Bosco.

#### 5) `/tazas-personalizadas`

- Title: `Tazas personalizadas en Guadalajara y Zapopan | Sublimango`
- Meta description: `Tazas personalizadas por sublimación en Guadalajara y Zapopan. Ideales para regalos, negocios y eventos. Envía tu diseño por WhatsApp y cotiza.`
- H1: `Tazas personalizadas por sublimación en Guadalajara`
- Contenido de producto (regalos, empresas, eventos). No inventes precios ni mínimos; si Eduardo te da precio o mínimo, inclúyelos. Foto de `tazas-personalizadas.jpg` optimizada. CTA WhatsApp (San Juan Bosco para sublimación; si también las hacen en Zapopan, dilo solo si es verdad).

#### 6) `/playeras-personalizadas`

- Title: `Playeras personalizadas en Guadalajara | DTF y sublimación`
- Meta description: `Playeras personalizadas en Guadalajara desde una pieza: DTF para cualquier tela y color, sublimación en poliéster. Uniformes, eventos y marcas. Cotiza por WhatsApp.`
- H1: `Playeras personalizadas en Guadalajara, desde una pieza`
- Diferencia DTF vs sublimación. CTA San Juan Bosco.

#### 7) `/material-publicitario`

- Title: `Lonas, vinil y material publicitario en Zapopan | Sublimango`
- Meta description: `Lonas, banners, vinil, stickers, tarjetas y artículos promocionales en Zapopan Centro. Material publicitario para tu negocio. Cotiza por WhatsApp al 33 1754 0340.`
- H1: `Material publicitario en Zapopan: lonas, vinil e impresos`
- Secciones H2: Lonas y banners; Vinil y stickers; Tarjetas y flyers; Artículos promocionales. CTA WhatsApp Zapopan. Dirección completa **cuando esté confirmada**.

#### 8) `/sucursal-san-juan-bosco`

- Title: `Sublimango DTF Maquila | San Juan Bosco, Guadalajara`
- Meta description: `Planta de maquila DTF y sublimación en Rita Pérez de Moreno 454-A, Col. San Juan Bosco, Guadalajara. WhatsApp 33 3302 4044. Entrega el mismo día.`
- H1: `Sucursal San Juan Bosco: maquila DTF y sublimación`
- NAP completo, horarios confirmados, mapa embebido con la dirección exacta (no una búsqueda vaga), enlace a WhatsApp y a Facebook, indicaciones breves, lista de servicios con enlaces a las landings.

#### 9) `/sucursal-zapopan`

- Title: `Sublimango Zapopan | Material publicitario en Zapopan Centro`
- Meta description: escribe una de ~155 caracteres con la **dirección confirmada**, el teléfono 33 1754 0340 y «lonas, vinil e impresos».
- H1: `Sucursal Zapopan Centro: lonas, vinil e impresos`
- Misma ficha local: NAP, horarios, mapa con pin preciso (hoy el embed busca solo «Zapopan Centro Jalisco»; hay que cambiarlo cuando exista la calle), WhatsApp, Facebook, correo.

#### 10) `/preguntas-frecuentes`

- Title: `Preguntas frecuentes sobre DTF y sublimación | Sublimango`
- Meta description: `Resolvemos dudas sobre maquila DTF, transfers, sublimación de tazas y playeras, tiempos de entrega y sucursales en Guadalajara y Zapopan.`
- H1: `Preguntas frecuentes`
- Incluye FAQPage en JSON-LD. Preguntas útiles, en español natural, sin inventar plazos ni precios. Ejemplos: qué es el DTF, en qué telas se plancha, qué es la sublimación y en qué no funciona, cómo enviar el archivo, si se puede recoger el mismo día, en qué sucursal se hace cada cosa, cómo cotizar.

Opcional, si hay tiempo: `/aviso-de-privacidad` (página legal mínima, no copy genérico de otro país).

En todas las páginas: un CTA claro a WhatsApp de la sucursal que corresponde, con el número visible también en texto (no solo en un botón). Footer con ambas sucursales (nombre, dirección confirmada, teléfono, horarios, enlace a su página).

### C. Schema.org / JSON-LD a implementar

Sustituye el bloque actual y pon un `@graph` en la home (y bloques equivalentes, más específicos, en cada landing). Valida el JSON antes de publicar (jsonlite / Rich Results, sin errores de parseo). Usa los teléfonos en E.164 como ya están (`+523333024044`, `+523317540340`). **Deja placeholders claros** en horarios, C.P. de Zapopan, calle de Zapopan y coordenadas hasta que Eduardo los confirme.

Modelo para la home (completa `openingHoursSpecification`, `postalCode`, `geo` y la calle de Zapopan solo con datos confirmados):

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sublimango.com/#organization",
      "name": "Sublimango",
      "url": "https://sublimango.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sublimango.com/assets/logo-sublimango-dtf.webp",
        "width": 512,
        "height": 512
      },
      "image": "https://sublimango.com/assets/og-sublimango.jpg",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100063491794032",
        "https://www.facebook.com/dtf.zapopan"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://sublimango.com/#website",
      "url": "https://sublimango.com/",
      "name": "Sublimango",
      "inLanguage": "es-MX",
      "publisher": { "@id": "https://sublimango.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://sublimango.com/#webpage",
      "url": "https://sublimango.com/",
      "name": "Maquila DTF y sublimación en Guadalajara y Zapopan | Sublimango",
      "isPartOf": { "@id": "https://sublimango.com/#website" },
      "about": { "@id": "https://sublimango.com/#organization" },
      "inLanguage": "es-MX"
    },
    {
      "@type": "PrintShop",
      "@id": "https://sublimango.com/sucursal-san-juan-bosco#local",
      "name": "Sublimango DTF Maquila - San Juan Bosco",
      "description": "Maquila de DTF para talleres y emprendedores, y sublimación sobre artículos personalizados. Impresión a 58 cm de ancho, sin límite de colores, entrega el mismo día.",
      "url": "https://sublimango.com/sucursal-san-juan-bosco",
      "telephone": "+523333024044",
      "parentOrganization": { "@id": "https://sublimango.com/#organization" },
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Rita Pérez de Moreno 454-A, Col. San Juan Bosco",
        "addressLocality": "Guadalajara",
        "addressRegion": "Jalisco",
        "postalCode": "CONFIRMAR",
        "addressCountry": "MX"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "CONFIRMAR",
        "longitude": "CONFIRMAR"
      },
      "areaServed": ["Guadalajara", "Zapopan", "Zona Metropolitana de Guadalajara"],
      "hasMap": "CONFIRMAR URL de Google Maps de esta sucursal",
      "openingHoursSpecification": "CONFIRMAR",
      "sameAs": ["https://www.facebook.com/profile.php?id=100063491794032"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios en San Juan Bosco",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maquila DTF por metro", "url": "https://sublimango.com/maquila-dtf" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Transfers DTF", "url": "https://sublimango.com/transfers-dtf" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sublimación", "url": "https://sublimango.com/sublimacion" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Playeras personalizadas", "url": "https://sublimango.com/playeras-personalizadas" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tazas personalizadas", "url": "https://sublimango.com/tazas-personalizadas" } }
        ]
      }
    },
    {
      "@type": "PrintShop",
      "@id": "https://sublimango.com/sucursal-zapopan#local",
      "name": "Sublimango Zapopan - Material publicitario",
      "description": "Impresos, lonas, rotulación y artículos promocionales para tu negocio.",
      "url": "https://sublimango.com/sucursal-zapopan",
      "telephone": "+523317540340",
      "email": "dtf.zapopan@gmail.com",
      "parentOrganization": { "@id": "https://sublimango.com/#organization" },
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "CONFIRMAR calle y número",
        "addressLocality": "Zapopan",
        "addressRegion": "Jalisco",
        "postalCode": "CONFIRMAR",
        "addressCountry": "MX"
      },
      "geo": { "@type": "GeoCoordinates", "latitude": "CONFIRMAR", "longitude": "CONFIRMAR" },
      "areaServed": ["Zapopan", "Guadalajara", "Zona Metropolitana de Guadalajara"],
      "hasMap": "CONFIRMAR",
      "openingHoursSpecification": "CONFIRMAR",
      "sameAs": ["https://www.facebook.com/dtf.zapopan"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios en Zapopan",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lonas y banners", "url": "https://sublimango.com/material-publicitario" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vinil y stickers", "url": "https://sublimango.com/material-publicitario" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tarjetas y flyers", "url": "https://sublimango.com/material-publicitario" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Artículos promocionales", "url": "https://sublimango.com/material-publicitario" } }
        ]
      }
    }
  ]
}
```

En `/preguntas-frecuentes` añade `FAQPage`. En cada landing de servicio añade un `WebPage` + `Service` con `provider` apuntando a la sucursal que lo presta. El `logo` y `og:image` deben ser los archivos nuevos optimizados, no el PNG de 1 MB.

### D. Sitemap

`https://sublimango.com/sitemap.xml` debe listar, con `lastmod` real, al menos:

- https://sublimango.com/
- https://sublimango.com/maquila-dtf
- https://sublimango.com/transfers-dtf
- https://sublimango.com/sublimacion
- https://sublimango.com/tazas-personalizadas
- https://sublimango.com/playeras-personalizadas
- https://sublimango.com/material-publicitario
- https://sublimango.com/sucursal-san-juan-bosco
- https://sublimango.com/sucursal-zapopan
- https://sublimango.com/preguntas-frecuentes

Solo URLs canónicas 200. No incluyas www, HTTP, anclas ni 404.

### E. Optimización de imágenes, fuentes y JS

Estado medido el 13 de noviembre de 2026 (America/Mexico_City): las 10 imágenes de la home suman 7,44 MB. En especial:

- `flyer-dtf.png` 1,83 MB (1063×1832, PNG)
- `mascota-taller.png` 1,58 MB (1408×768, PNG)
- `trabajo-termos.png` 1,45 MB (900×1600, PNG)
- `logo-sublimango-dtf.png` 0,98 MB (2048×2048, PNG) — también es og:image
- `logo-circulo.png` 387 KB (1800×1800) usado a 48 px

Tareas:

1. Reexporta todas a **WebP** (y AVIF si el flujo lo permite), con JPEG/PNG de respaldo en `<picture>`. Objetivo: cada imagen de hero ≤ 150 KB; cada miniatura de galería ≤ 80 KB; logos de cabecera ≤ 15 KB.
2. Añade `width`, `height` (o `aspect-ratio` ya presente) y `srcset`/`sizes` para 1x/2x. `loading="lazy"` y `decoding="async"` en todo lo que no sea LCP. La imagen LCP (probablemente la mascota o el logo del hero) con `fetchpriority="high"` y **sin** lazy.
3. Crea `assets/og-sublimango.jpg` (o WebP) **1200×630**, menos de 200 KB, con logo + texto legible «Maquila DTF y sublimación — Guadalajara y Zapopan». Úsala en `og:image` y `twitter:image`, con `og:image:width` 1200 y `og:image:height` 630. No uses el PNG cuadrado de 2048 px.
4. Fuentes: el CSS actual hace `@import` de Google Fonts con Rubik 300/400/500/700, Quicksand 400/500/600/700 y Rubik Mono One (~202 KB en woff2 + CSS bloqueante). Reduce pesos (por ejemplo Rubik 400/700, Quicksand 600, Rubik Mono One 400), añade `<link rel="preconnect">` a `fonts.googleapis.com` y `fonts.gstatic.com`, o aún mejor **autoalojar woff2** subsetteados y elimina el `@import`. Evita TTF.
5. No cargues el CSS completo de Bootstrap Icons (99 KB) más el woff2 (134 KB) si solo usas unos cuantos iconos. Sustitúyelos por SVG inline o un subset.
6. `support.js` (69 KB) está en el `<head>` sin `defer` ni `async`. `_ds_bundle.js` e `image-slot.js` también van sin defer. Pon `defer` en los JS que no sean estrictamente críticos, o muévelos al final del body. El contenido SEO no debe depender de que se ejecute JS.
7. Prerenderiza las plantillas `text/x-dc`: en el HTML servido al crawler y al usuario con JS desactivado deben verse ya los títulos de servicio, descripciones, direcciones, teléfonos, enlaces `wa.me` y el `src` real de los iframes de mapa. Cero `{{ … }}` en el HTML público.

### F. SEO local (además del schema)

1. Publica en footer y páginas de sucursal el NAP completo y consistente (misma calle, mismo teléfono, mismos horarios que en Google Business).
2. Mapas: iframe o enlace `https://maps.google.com/?q=` con la dirección exacta. El de Zapopan no puede quedarse en `q=Zapopan Centro Jalisco`.
3. Prepara para Eduardo (en un README corto o en comentarios de entrega) esta lista de acciones **manuales** en Perfil de Empresa de Google, que tú no puedes hacer desde el código:
   - Que el sitio web de cada ficha sea `https://sublimango.com/` (o la URL de su sucursal), no el Google Site `sites.google.com/view/dtf-zapopan/inicio`.
   - Unificar nombre, dirección y teléfono con el sitio (resolver 454-A vs 433, el teléfono 33 2787 2287 y el posible local de Ocampo 340).
   - Completar horarios, categoría (imprenta / personalización de productos), fotos y botón de WhatsApp.
   - Pedir la indexación en Search Console de la home y del sitemap cuando las URLs nuevas respondan 200.

### G. Open Graph y detalles menores

- Alinea `og:title` y `twitter:title` con el `<title>` de cada página (hoy el og de la home omite «y Zapopan»).
- `og:url` y canonical = la URL canónica de esa página.
- Puedes quitar `<meta name="keywords">`; no aporta. No es obligatorio.
- Mantén `lang="es-MX"`, viewport, `robots: index, follow` en páginas canónicas. La 404 puede llevar `noindex`.

## Criterios de aceptación

Todo esto debe cumplirse al terminar, y debes poder demostrarlo con curl o el DevTools:

1. `curl -sI http://sublimango.com/` y `http://www.sublimango.com/` → **301** a `https://sublimango.com/` (o a la ruta HTTPS equivalente, y de www al apex).
2. `https://www.sublimango.com/` resuelve en DNS y redirige **301** a `https://sublimango.com/`.
3. `https://sublimango.com/` sigue en **200**, con el nuevo title y H1 de la sección B, canonical absoluto al apex, `lang="es-MX"`, viewport, description y OG actualizados.
4. `https://sublimango.com/esta-pagina-no-existe-xyz123` y `/favicon.ico` **no** devuelven la home con 200. La primera es **404** con página propia; favicon es un icono real.
5. Las 9 URLs nuevas de la sección B responden **200**, cada una con title, description, canonical, H1 y contenido únicos (no el HTML de la home). El HTML no contiene `{{` ni `}}`.
6. Una ruta existente (`/maquila-dtf`, etc.) tiene al menos un H1 con la palabra clave de esa página y un enlace interno a la sucursal y a WhatsApp.
7. `sitemap.xml` lista solo esas canónicas 200, y `robots.txt` apunta a ese sitemap.
8. El JSON-LD parsea sin errores; las sucursales son `PrintShop` (o LocalBusiness) con teléfono, dirección y `url` a su página; no queda `streetAddress: "Zapopan Centro"` si ya se confirmó la calle. Si algo sigue en CONFIRMAR, no publiques valores inventados: déjalo fuera del JSON hasta tener el dato.
9. En la home no se sirven las PNG originales de 1–1,9 MB. Hay versión WebP (o equivalente) y `og-image` 1200×630. El logo de cabecera no carga un PNG de 387 KB.
10. Los JS de la home tienen `defer` (o van al final) y no hay `@import` de Google Fonts sin preconnect; idealmente las fuentes están autoalojadas o con preconnect + menos pesos.
11. Con JS desactivado se leen direcciones, teléfonos, servicios y CTA de WhatsApp.
12. El menú y el footer enlazan a las landings y a las dos sucursales. No hay enlaces rotos internos.
13. No se han inventado precios, reseñas, horarios ni la calle de Zapopan.

Entrega: el código o los HTML listos para publicar, la lista de redirecciones/DNS que hay que configurar en Cloudflare, el sitemap, los assets optimizados y un checklist breve de lo que Eduardo debe confirmar (dirección Zapopan, horarios, C.P., coordenadas, fichas de Google, posibles locales/teléfonos antiguos) y de lo que debe hacer a mano en Google Business y Search Console.
