"use strict";

/* 
NavigatorIDDappCodeName
NavigatorID.appName;
NavigatorID.appVersion;
Navigator.conection;
NavigationGeolocalitation.geolocaclitation;
NAviigatorCourrentHArdware.hardwareCorrenncy;
*/

console.log("AppCodeName: ", navigator.appCodeName);
console.log("AppName: ", navigator.appName);
console.log("AppVersion: ", navigator.appVersion);
console.log("Conection: ", navigator.connection);
console.log("Geolocalitaiton: ", navigator.geolocation);
console.log("HardwareConcurrency: ", navigator.hardwareConcurrency);
console.log("Language: ", navigator.language);
console.log("Languages: ", navigator.languages);
console.log("MimeTypes: ", navigator.mimeTypes);
console.log("OnLine: ", navigator.onLine);
console.log("UserAgent: ", navigator.userAgent);
console.log("CookieEnabled: ", navigator.cookieEnabled);
console.log("Permissions: ", navigator.permissions);
console.log("Platform: ", navigator.platform);
console.log("Plugins: ", navigator.plugins);
console.log("Product: ", navigator.product);
console.log("ServiceWorker: ", navigator.serviceWorker);

/*
Métodos mas usados.
navigator.getUserMedia() => Acceder al audio y video de nuestro dispositivo local.
navigator.registerContentHandler() => Permite a la web controladores del tipo MME determinado.
navigator.registerProtocolHeandler() => Permite a los sitios webs registrarse como posibles controladores de un protocolo determinado.
navigator.requestMediaKeySystemAcces() => Devuelbe un objeto MediaKeySystemAccess.
navigator.sendBeacon() => Devuelbe un valor bolean que indica si el navegador tiene o no habilitado Java.
navigator.javaEnabled() => Usado para transferir, de forma asicrona, conjuntos peequeños de datos HTTP^del agente usuario del servidor.
navigator.vibrate() => Causa vibración en el dispotivo que lon soporta. No hace falta hacer nada si el soporte para vibraciones no está disponible.
*/
