const getName= async ()=>{

    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("name");
    div.innerHTML = resultado.data.Nombre
    document.body.appendChild(div);
};

const getAge= async ()=>{

    let resultado = await axios("informacion.txt");
    let div = document.createElement("DIV");
    div.classList.add("age");
    div.innerHTML = resultado.data.Edad;
    document.body.appendChild(div);
};


document.getElementById('getName').addEventListener("click",getName);
document.getElementById('getAge').addEventListener("click",getAge);
