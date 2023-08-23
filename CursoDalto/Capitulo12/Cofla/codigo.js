const subjetsHTML = document.querySelector(".subjets");

const subjets= [
    {
    name: "AwaitAsync",
    note: 6
    },{
    name: "Bases de Datos",
    note: 9
    },{
    name: "Programacion",
    note: 7
    }
    ,{
    name: "JavaScript",
    note: 10
    }
];

const giveSubjet= (id)=>{
    return new Promise((resolve,reject)=>{
    subjet = subjets[id];
    if (subjet == undefined) reject ("La materia no existe");
    else setTimeout(()=>{resolve(subjet)},Math.random()*1500);
    })
}


const restoreSubjets= async ()=>{
    let subjet= [];
    for (let i= 0; i < subjets.length; i++){
        subjet[i]= await giveSubjet(i);
        let newHTMLCode= `
        <div class="subjet">
            <div class="name">${subjet[i].name}</div>
            <div class="note">${subjet[i].note}</div>
        </div>`;
        subjetsHTML.innerHTML += newHTMLCode;
    }
}


restoreSubjets()


sayHello(); // Esto generaría un error 

const sayHello = function() { 

  console.log('¡Hola!'); 

} 

