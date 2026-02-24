var message = "Hola mundo";
var conteo = 3;
console.log(message);
console.log(conteo);
var saludar = function (saludo) {
    return console.log("Hola ".concat(saludo));
};
saludar("Alice");
var newUser = { id: 1, nombre: "Daniel", email: "hdhhs@gmail.com", premium: true }; // Usuario
var newCharacter = {
    name: "Jose",
    age: 23
};
console.log(newCharacter);
/***/
var batman = {
    name: "Bruce Wayne",
    artesMarciales: ["Jiu Jitsu", "Samboo", "Wing Chun", "Aikido", "Karate"]
};
console.log(batman);
var user1 = {
    username: "Daniel",
    email: "algo@gmail.com",
    age: 24,
    biography: "Holaquetal",
    telephone: 635347236
};
var user2 = {
    username: "Jose",
    email: "algo@gmail.com",
    age: 23
};
console.log(user1);
console.log(user2);
var respuesta = {
    name: "Mercedes Tyler",
    emails: "mercedes_tyler@fakegmail.com",
    movie_id: {
        $soid: "573a1390f29313caabcd4323"
    },
    text: "Eius veritatis vero facilis quaerat fuga temporibus. Praesentium expedita sequi repellat id. Corporis minima enim ex. Provident fugit nisi dignissimos nulla nam ipsum aliquam.",
    codes: {
        number: 123,
        string: "abc",
        boolean: true
    },
    date: {
        $date: "2002-08-18T04:56:07Z"
    }
};
console.log(respuesta);
