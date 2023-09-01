let alumnos= [{
    name: "Carlos Vasquez",
    email: "carlos@gmail.com",
    subject: "Programación",
},{
    name: "Karin",
    email: "karin@gmail.com",
    subject: "Ciberseguridad",
},{
    name: "Robert",
    email: "robert@gmail.com",
    subject: "Redes",
},{
    name: "Cofla Pelotudo",
    email: "cofla@gmail.com",
    subject: "Som",
},{
    name: "Mateo del amo",
    email: "mateo@gmail.com",
    subject: "Aweb",
}];

const button = document.querySelector(".button-confirm");
const container = document.querySelector(".grid-container");

for (alumno in alumnos){
    let datos = alumnos[alumno];
    let name = datos["name"];
    let email = datos["email"];
    let subject = datos["subject"];
    let htmlCode = `
    <div class="grid-item name">${name}</div>
   <div class="grid-item email">${email}</div>
   <div class="grid-item subject">${subject}</div>
   <div class="grid-item week">
       <select class="selected-week">
           <option value="Semana1">Semana1</option>
           <option value="Semana2">Semana2</option>
           <option value="Semana3">Semana3</option>
       </select>
   </div>`;
   container.innerHTML += htmlCode;
}

button.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente quieres confirmas las mesas");
    if (confirmar){
    document.body.removeChild(button);
    let elements = document.querySelectorAll(".week");
    let selectedWeeks = document.querySelectorAll(".selected-week");

    for (element in elements){
        week = elements[element];
        week.innerHTML= selectedWeeks[element].value;
    }
    }
});
