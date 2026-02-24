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
    age:number,

    biography?:string,
    telephone?:number
}

const user1: profileUser = {
    username : "Daniel",
    email : "algo@gmail.com",
    age : 24,

    biography : "Holaquetal",
    telephone : 635347236
}

const user2: profileUser = {
    username : "Jose",
    email : "algo@gmail.com",
    age : 23
}

console.log(user1)

console.log(user2)

/***/

// Ejemplo de uso:
// const ejemploRespuesta: Respuesta = {
//   _id: {
//     $oid: "5a9427648b0beebeb69579e7"
//   },
//   name: "Mercedes Tyler",
//   email: "mercedes_tyler@fakegmail.com",
//   movie_id: {
//     $oid: "573a1390f29313caabcd4323"
//   },
//   text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.",
//   codes: {
//     number: 123,
//     string: "abc",
//     boolean: true 
//   },
//   date: {
//     $date: "2002-08-18T04:56:07Z"
//   }
// };

interface response {
        name:string,
        emails:string,
        movie_id:{
            $soid:string
        },
        text: string,
        codes:{
            number:number,
            string:string,
            boolean:boolean
        },
        date:{
            $date:string
        }

}

const respuesta : response = {
        name:"Mercedes Tyler",
        emails:"mercedes_tyler@fakegmail.com",
        movie_id:{
            $soid:"573a1390f29313caabcd4323"
        },
        text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.",
        codes:{
            number:123,
            string:"abc",
            boolean:true
        },
        date:{
            $date:"2002-08-18T04:56:07Z"
        }
}

console.log(respuesta)