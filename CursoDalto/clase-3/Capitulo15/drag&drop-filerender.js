const divImg = document.querySelector(".div-arrastre");
const resultado = document.querySelector(".resultado");
const divCarga = document.querySelector(".div-carga");

divImg.addEventListener("dragover", (e) => {
  e.preventDefault();
  changeStyle(e.srcElement, "green");
});

divImg.addEventListener("dragleave", (e) => {
  e.preventDefault();
  changeStyle(e.srcElement, "blue");
});

divImg.addEventListener("drop", (e) => {
  e.preventDefault();
  changeStyle(e.srcElement, "purple");
  // renderArch(e.dataTransfer.files[0]);
  // renderImg(e.dataTransfer.files[0]);
  renderMovie(e.dataTransfer.files[0]);
  divImg.style.border = "4px solid #888";
});

const changeStyle = (obj, color) => {
  obj.style.color = color;
  obj.style.border = `4px dashed ${color}`;
};

const renderArch = (ar) => {
  const reader = new FileReader();
  reader.readAsText(ar);
  reader.addEventListener("load", (e) => {
    resultado.textContent = e.currentTarget.result;
  });
};

const renderImg = (ar) => {
  const reader = new FileReader();
  reader.readAsDataURL(ar);
  reader.addEventListener("load", () => {
    let url = URL.createObjectURL(ar);
    let img = document.createElement("IMG");
    img.setAttribute("src", url);
    resultado.appendChild(img);
  });
};

const renderMovie = (ar) => {
  const reader = new FileReader();
  reader.readAsArrayBuffer(ar);
  reader.addEventListener("progress", (e) => {
    // console.log(e.loaded); // => Lo que pesa el archivo.
    // console.log(e.loaded); // => Cuanto cargo del total del peso.
    let carga = Math.round((e.loaded / ar.size) * 100);
    divImg.textContent = `${carga}%`;
    divCarga.style.padding = "75px 20px";
    divCarga.style.width = `${carga}%`;
  });
  reader.addEventListener("loadend", (e) => {
    changeStyle(divImg, "#4f9");
    divImg.style.borderStyle = "solid";
    divCarga.style.background = "#4f9";
    setTimeout(() => {
      divImg.style.color = "#fff";
      divImg.style.animation = "aparecer 1s forwards";
      divImg.textContent = "Carga completada!";
    }, 0.5);
  });
  reader.addEventListener("load", (e) => {
    let video = new Blob([new Uint8Array(e.currentTarget.result)], {
      type: "video/mp4",
    });
    let url = URL.createObjectURL(video);
    let img = document.createElement("VIDEO");
    img.setAttribute("src", url);
    resultado.appendChild(img);
  });
};
