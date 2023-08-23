const getInfo = async ()=>{
let aprobados = document.querySelector(".num-aprobados");
let desaporobados = document.querySelector(".num-desaprobados");
    try{
        resultado = await axios("informacion.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaporobados.innerHTML = resultado.data.desaprobados
    }catch(e){
        aprobados.innerHTML = "La API fallo";
        desaporobados.innerHTML = "La API fallo";
    }
};

document.getElementById("getInfo").addEventListener("click", getInfo);