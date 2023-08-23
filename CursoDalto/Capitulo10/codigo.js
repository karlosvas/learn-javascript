const sendButton = document.getElementById('send-note');

const evento = sendButton.addEventListener("click", () => {
    let resultado, mensaje;
    try {
        resAntes = parseInt(document.getElementById('note').value);
        if (isNaN(resAntes)) {
            throw "Gracioso";
        }
        resultado = verificarAprobacion(8, 5, resAntes);
        mensaje = definirMensaje(resultado[1]);
    } catch (e) {
        resultado = "¿Que intentas?";
        mensaje = "He descubierto que intentaste hackear el sitio";
    }
    abrirModal(resultado[0], mensaje);
});

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 1: resultado = "No podes ser tan HDP";
        break;
        case 2: resultado = "Malo para la materia";
        break;
        case 3: resultado = "No sabes casi nada";
        break;
        case 4: resultado = "Muy mal";
        break;
        case 5: resultado = "Mal";
        break;
        case 6: resultado = "Regular";
        break;
        case 7: resultado = "Bien";
        break;
        case 8: resultado = "Notable";
        break;
        case 9: resultado = "¡Excelente!";
        break;
        case 10: resultado = "Sobresaliente";
        break;
        default: resultado = null;
    }
    return resultado
}

const verificarAprobacion = (nota1,nota2,resAntes)=>{
    promedio = Math.round((nota1 + nota2 + resAntes) / 3);
    if (promedio >= 7){
        return ["<span class= 'green'>Aprobado</span>", promedio];
    }
    return ["<span class= 'red'>Suspendido</span>", promedio];
}

const abrirModal = (res,msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba: " + msg;
    let modal= document.querySelector(".bakground-modal");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}