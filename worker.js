// Worker delante de los assets estáticos:
// - Redirige http->https, www->apex, /index.html->/ con 301
// - Añade HSTS, nosniff y caché larga a estáticos versionados
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // http -> https (301)
    if (url.protocol === "http:") {
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    // www.sublimango.com -> sublimango.com (301)
    if (url.hostname === "www.sublimango.com") {
      url.hostname = "sublimango.com";
      return Response.redirect(url.toString(), 301);
    }

    // /index.html -> / (301, permanente)
    if (url.pathname === "/index.html") {
      url.pathname = "/";
      return Response.redirect(url.toString(), 301);
    }

    // Servir asset estático (respeta not_found_handling=404-page y html_handling)
    const assetRes = await env.ASSETS.fetch(request);
    const res = new Response(assetRes.body, assetRes);

    res.headers.set("X-Content-Type-Options", "nosniff");
    res.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

    const p = url.pathname;
    if (p.startsWith("/assets/") || p.startsWith("/_ds/")) {
      res.headers.set("Cache-Control", "public, max-age=31536000");
    }
    return res;
  }
};
