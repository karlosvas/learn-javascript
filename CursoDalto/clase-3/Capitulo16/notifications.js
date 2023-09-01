"use strict";

if (!("Notification" in window)) {
  console.log("No estan sdisponibles");
}
// Gracias a este código podreemos verificar si estan disponibles en nuestro navegador.

Notification.requestPermission();
if (Notification.permission == "granted") {
  new Notification("ok");
  console.log("permiso concedido");
}
