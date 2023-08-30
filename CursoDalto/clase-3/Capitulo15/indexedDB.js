"use srtrict";

// Procedimiento de creación y creación de almacén de objetos.
const IDBRequest = indexedDB.open("database", 1);
/* El primer parámetreo es el nombre que le queremos darle para abrir, o crearla, en el caso de que no
exista. El segundo parámetro es la versión.
IDBFActory fabrica de base de datos
*/
IDBRequest.addEventListener("upgradeneeded", () => {
  //   console.log("Se creó correctamente la base de datos");
  const db = IDBRequest.result;
  db.createObjectStore("nombres", {
    autoIncrement: true, // => Tambien es muy utilizado KeyPath, como por ejemplo para el DNI.
  });
});

IDBRequest.addEventListener("success", () => {
  console.log("All is successfully");
});

IDBRequest.addEventListener("error", (e) => {
  console.log(`Ocurrió un el error ${e} en la base de datos`);
});

// Crear objetos
const addObject = (object) => {
  const IDBData = transactionOperation("readwrite");
  // Quiero abrir una transaccion en nombres, y en que modo ,"readwrite", o "readonly".
  // Dandole permiso para decirle desde donde se podre realizar la traansación.
  IDBData.add(object);
};

const readObject = () => {
  const IDBData = transactionOperation("readonly");
  const cursor = IDBData.openCursor();
  const fragment = document.createDocumentFragment();
  document.querySelector(".div-names").innerHTML = "";
  cursor.addEventListener("success", () => {
    if (cursor.result) {
      let elemento = nombresHTML(cursor.result.key, cursor.result.value);
      fragment.appendChild(elemento);
      cursor.result.continue();
    } else {
      document.querySelector(".div-names").appendChild(fragment);
    }
  });
};

const modifyObject = (key, object) => {
  const IDBData = transactionOperation("readwrite");
  IDBData.put(object, key);
  // put() put lo que hace es que si no existe lo agrega y si ya existe lo modifica.
};

const deleteObject = (key) => {
  const IDBData = transactionOperation("readwrite");
  IDBData.delete(key);
};

const transactionOperation = (mode) => {
  const db = IDBRequest.result;
  const IDBTransaction = db.transaction("nombres", mode);
  const objectStore = IDBTransaction.objectStore("nombres");
  return objectStore;
};

const nombresHTML = (id, name) => {
  const container = document.createElement("DIV");
  const h2 = document.createElement("h2");
  const options = document.createElement("DIV");
  const saveButton = document.createElement("button");
  const delateButton = document.createElement("button");

  container.classList.add("div-name");
  options.classList.add("div-options");
  saveButton.classList.add("button-modify");
  delateButton.classList.add("button-delete");

  saveButton.textContent = "Save";
  delateButton.textContent = "Delate";

  h2.textContent = name.nombre;
  h2.setAttribute("contenteditable", true);
  h2.setAttribute("spellcheck", false);

  options.appendChild(saveButton);
  options.appendChild(delateButton);

  container.appendChild(h2);
  container.appendChild(options);

  h2.addEventListener("keyup", () => {
    saveButton.classList.replace("button-modify", "button-save");
  });

  saveButton.addEventListener("click", () => {
    if (saveButton.className == "button-save") {
      modifyObject(id, { nombre: h2.textContent });
      saveButton.classList.replace("button-save", "button-modify");
    }
  });

  delateButton.addEventListener("click", () => {
    deleteObject(id);
    document.querySelector(".div-names").removeChild(container);
  });
  return container;
};

const btnAdd = document.getElementById("button-add");
btnAdd.addEventListener("click", () => {
  let nombre = document.getElementById("input-add").value;
  if (nombre.length > 0) {
    if (document.querySelector(".button-save") !== null) {
      if (confirm("Hay elementos sin guardar: ¿Quieres continuar?")) {
        addObject({ nombre });
        // Si la variable es igual al valor no hace falta que lo utilizemos dos veces nombre: nombre es igual a nombre
        readObject();
      }
    }
    addObject({ nombre });
    readObject();
  }
});
