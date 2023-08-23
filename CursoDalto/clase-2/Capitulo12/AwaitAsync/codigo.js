
const objet = {
    propiedad1 : "valor1",
    propiedad2 : "valor2",
    propiedad3 : "valor3"
};

const getInformation= ()=>{
    setTimeout(()=>{ return objet},1000)
};

console.log(getInformation());