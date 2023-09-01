// document.cookie = "user=karlos;expires";
// document.cookie = "id=12121dwsd";
// document.cookie = "nametag=karlosvas";

let cookies = document.cookie; // Mustra todas las cookies
console.log(cookies);

const newFechaUTC = (dias) => {
  let fecha = new Date();
  fecha.setTime(fecha.getTime() + dias * 1000 * 60 * 60 * 24);
  return fecha.toUTCString();
};

const crearCookies = (name, dias) => {
  let expires = newFechaUTC(dias);
  document.cookie = `${name};expires=${expires}`;
};

const obtenerCookie = (cookieName) => {
  let cookies = document.cookie;
  cookies = cookies.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(cookieName)) console.log(cookie.split("=")[1]);
  }
};

crearCookies("usuario=karlos", "2");
crearCookies("apellido=guille", "3");
crearCookies("años=24", "3");
crearCookies("idioma=ingles", "3");

obtenerCookie("años");
// para eliminarala podemos modificarla con el valor de 0.
