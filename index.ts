let message:string = "Hola mundo";
let conteo:number = 3;

console.log(message)
console.log(conteo)

const saludar = (saludo:string)=>{
        return console.log(`Hola ${saludo}`)
}

saludar("Alice")

interface Usuario {
    id: number,
    nombre: string,
    email: string,
    premium?: boolean // El ? significa que es opcional
}

const newUser:Usuario = {id:1,nombre:"Daniel",email:"hdhhs@gmail.com",premium:true} // Usuario

/***/


interface character { // Typa el objeto
    name:string
    age:number
}

const newCharacter:character = { // Asigna valores al objeto
    name: "Jose",
    age: 23
}

console.log(newCharacter)

/***/

const batman: {name:string,artesMarciales:string[]} = {
    name: "Bruce Wayne",
    artesMarciales :["Jiu Jitsu", "Samboo", "Wing Chun", "Aikido", "Karate"]
}

console.log(batman)

/***/

interface profileUser {
    username:string,
    email:string,
    edad:number,

    biografia?:string,
    telefono?:number
}

const user1: profileUser = {
    username : "Daniel",
    email : "algo@gmail.com",
    edad : 24,

    biografia : "Holaquetal",
    telefono : 635347236
}

const user2: profileUser = {
    username : "Jose",
    email : "algo@gmail.com",
    edad : 23
}

console.log(user1)

console.log(user2)