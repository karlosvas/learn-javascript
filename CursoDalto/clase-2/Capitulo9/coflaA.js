const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");

boton.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = validarCampos();
    if (error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red");
        resultado.classList.remove("green");
    } else {
        resultado.innerHTML = "Solicitud enviada correctamente";
        resultado.classList.add("green");
        resultado.classList.remove("red");
    }
})

const validarCampos = ()=>{
    let error = [];
    if (nombre.value.length < 5){
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if (nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre es invalido";
        return error;
    } else if  (email.value.length < 5 ||
                email.value.length > 40 ||
                email.value.indexOf("@") == -1 ||
                email.value.indexOf(".")== -1 ){
                error[0] = true;
                error[1] = "El mail es invalido";
                return error;
    } else if (materia.value.length < 4 || materia.value.length > 40){
        error[0] = true;
        error[1] = "Añade una materia";
        return error;
    }
    return error;
}