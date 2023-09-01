class Person{
    constructor(name,instagram){
        this.name= name;
        this.instagram= instagram;
    }
};

const data= [
    ["Carlos Vasquez","@akrlos_vas"],
    ["Rodrigo Ramirez","@roidri_ram"],
    ["Guillermo Ruiz","@guillermo_ruiz"],
    ["Veronica Perez","@veroo_34"],
    ["Sandra Lozano"]
];

const users= [];
for (let i= 0; i < data.length; i++){
    users[i] = new Person(data[i][0],data[i][1]);
};

const givePerson= (id,cb)=>{
    if (users[id] == undefined){
        cb("No se a encontrado la persona")
    } else{
        cb(null, users[id] ,id)
    }
};

const giveInstagram= (id,cb) =>{
    if (users[id] == undefined){
        cb("No se a encontrado el instagram");
    } else{
        cb(null, users[id].instagram);
    }
};

const subsUsers= [
    ["1000","@akrlos_vas"],
    ["4000","@roidri_ram"],
    ["300","@guillermo_ruiz"],
    ["82635468","@veroo_34"],
    ["0"]
];

function showSubscribers(sub){
    sub = subsUsers[show][0];
    return sub;
}

// function showSubscribers(sub){
//     data[show].push(subsUsers[show][0]);
//     sub = data[show][2];
//     return sub;
// }

givePerson(show=3,(err,users,id)=>{
    if(err){
        console.log(err);
    }   else{
        console.log(users.name);
        giveInstagram(id, (err, instagram)=>{
            if (err){
                console.log(err);
            }  else{
                console.log(instagram);
                console.log(showSubscribers());
            }
        })
    }
});

// let nombre ="Antonio";

// const promesa = new Promise((resolve,regect)=>{
//     if (nombre !== "pedro") regect ("Losiento, el nombre no es pedro");
//     else{
//         resolve(nombre);
//     }
// });

// promesa.then(resultado=>{
//     console.log(resultado)
// }).catch(e=>{
//     console.log(e)
// });