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

if (obtenerCookie("acceptedCookies") !== "si") {
  setTimeout(() => {
    const bgModal = document.querySelector(".bg-modal");
    bgModal.style.zIndex = "10";
    bgModal.style.opacity = "1";
    document.getElementById("accept").addEventListener("click", () => {
      crearCookies("acceptedCookies=si", 30);
      bgModal.style.opacity = "0";
      setTimeout(() => {
        bgModal.style.zIndex = "-1";
      }, 1000);
    });
    document.getElementById("deny").addEventListener("click", () => {
      crearCookies("acceptedCookies=no", 30);
      bgModal.style.opacity = "0";
      setTimeout(() => {
        bgModal.style.zIndex = "-1";
      }, 1000);
    });
  }, 200);
}
