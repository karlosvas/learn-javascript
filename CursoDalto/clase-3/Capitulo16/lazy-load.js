"use strict";

const main = document.querySelector(".publicaciones");
let contador = 0;

document.addEventListener("DOMContentLoaded", () => {
  observer.observe(main);
});

const createPublications = (name, content) => {
  const comentarios = document.createElement("DIV");
  const publicacion = document.createElement("DIV");
  const contentH3 = document.createElement("H3");
  const contentP = document.createElement("p");
  const inComentario = document.createElement("INPUT");
  const btnEnviar = document.createElement("INPUT");

  publicacion.classList.add("publicacion");
  comentarios.classList.add("comentarios");
  btnEnviar.classList.add("enviar");
  inComentario.classList.add("comentario");

  inComentario.placeholder = "Introduce tu comentario";
  btnEnviar.type = "submit";

  contentH3.textContent = name;
  contentP.textContent = content;

  publicacion.appendChild(contentH3);
  publicacion.appendChild(contentP);
  publicacion.appendChild(comentarios);

  comentarios.appendChild(inComentario);
  comentarios.appendChild(btnEnviar);

  return publicacion;
};

const verifyVisibility = (entry) => {
  if (entry[0].isIntersecting) {
    chargePublications(4);
  }
};

const observer = new IntersectionObserver(verifyVisibility);

const chargePublications = async (num) => {
  const s = await fetch("../informacion.txt");
  const arr = await s.json();
  const docuemtFragment = document.createDocumentFragment();

  for (let i = 0; i < num; i++) {
    if (arr[contador] != undefined) {
      const newPublication = createPublications(
        arr[contador].name,
        arr[contador].contenido
      );
      docuemtFragment.appendChild(newPublication);
      contador++;
      if (i == num - 1) observer.observe(newPublication);
    } else {
      let noMore = document.createElement("h3");
      noMore.textContent = "No hay mas publicaciones";
      noMore.classList.add("cargado");
      docuemtFragment.appendChild(noMore);
      main.appendChild(docuemtFragment);
      observer.disconnect();
      break;
    }
  }
  main.appendChild(docuemtFragment);
};
