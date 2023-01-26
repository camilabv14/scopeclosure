var firstName; // undefined
firstName = "Camila";
console.log(firstName);

var lastName = "Berrio"; // declarando y asignando
lastName = "Vega"; // reasignando
console.log(lastName);

var secondName = "Andrea"; // declarando y asignando
var secondName = "Ana"; // redeclarando y reasignando
console.log(secondName);

// Let

let fruit = "Apple"; // declarar y asignar
fruit = "Kiwi"; // reasignar
console.log(fruit);

let fruit = "Banana"; // no se puede redeclarar

// Const
const animal = "dog"; // declarar y asignar
animal = "cat"; // no se puede reasignar con const
console.log(animal);

const vehicles = [];
vehicles.push("carrito");
console.log(vehicles);
vehicles.pop();
console.log(vehicles)