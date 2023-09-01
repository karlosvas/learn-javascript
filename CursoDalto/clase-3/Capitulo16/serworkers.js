"use strict";
let version = "version final";
// self es igual a .this pero se suele utilizar mas self para los service workerrs.

self.addEventListener("install", (e) => {
  console.log("Instalando service workers");
  caches.open(version).then((cache) => {
    cache
      .add("html/serviceworkers.html")
      .then((res) => {
        console.log("Informacion cacheada");
      })
      .catch((e) => {
        console.log(e);
      });
  });
});

self.addEventListener("activate", () => {
  caches.keys().then((key) => {
    return Promise.all(
      key.map((cache) => {
        if (cache !== version) {
          console.log("Borrando cache antiguo:", cache);
          return caches.delete(cache);
        }
      })
    );
  });
});

self.addEventListener("error", () => {
  console.log("En caso de que haya un error");
});

self.addEventListener("fetch", (e) => {
  e.respondWith(async () => {
    const respuestaCache = await caches.match(e.request);
    if (respuestaCache) return respuestaCache;
    return e.request;
  });
});

self.addEventListener("message", (e) => {
  console.log("Mensaje recivido del Navegador: ", e.data);
  e.source.postMessage("Muy bien"); // Mensaje para el navegador
});
