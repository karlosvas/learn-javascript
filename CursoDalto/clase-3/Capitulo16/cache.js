"use strict";

// El caché trabaja con promesas
caches.open("archivos-estaticos").then((cache) => {
  // => Con caches.oppen() creamos un nuevo objeto cache.
  cache.add("cache.html"); //  Envaimos un request, si existe lo almacena en caché. utiliza put y fetch.
  cache.match("cache.html").then((res) => {
    console.log(res);
  });
  // match devuelbe una promesa que se resuelve con la primera solicitudes coincidentyes a el objeto alamcenado.

  // De esta forma hacemos lo mismo, pero el put se suele utilizar para actualizar y el add para añadir, se utiliza mas add.
  fetch("cache.html").then((res) => {
    cache.put("cache.html", res);
  });
  cache.add("cache.html");
  // Cache.put("cache.html"); Cuando ya existe y lo queremos modificar, podremos utilizarlo con las modiificaciones.

  cache.delete("cache.html").then(console.log("Se elimino correectamente"));
});

caches.open("archivos-estaticos2").then((cache) => {
  cache.addAll(["cache.html", "../cache.js"]); // => Enviamos un request, para guardar una secuencia de archuivos en cachce.
  cache.matchAll("cache.html").then((res) => {
    console.log(res);
  });
  // matchAll devuelbe una promesa que se resuelve en la matriz de todas las soolicitudes coincidentyes a el objeto alamcenado.
  cache.keys().then((res) => {
    console.log(res);
  });
  // cache.keys nos da una promesa que devuelbe una matriz de keys de los objetos almacenados.
});
