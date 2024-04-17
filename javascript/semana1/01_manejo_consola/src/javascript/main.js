let userName = prompt("Enter your name"); // se puede reescribir, es mutable
const lastName = prompt("Enter your last name"); // const variables que no cambian
let age = prompt("Enter your Age"); // var está deprecado
// todas las variables se llaman con camelCase sea let o const

let address = prompt("Enter yout address");
let phone = prompt("Enter your phone"); 
const email = prompt("Enter your email");

//console.log(`Name: ${userName}, Last Name: ${lastName}, Age: ${age}`);
//console.log(`Adress: ${address}, Phone: ${phone}, Email: ${email}`);

// console.error / mostrar un mensaje en consola pero indicado al user y al navegador que es un error
// console.warn / mostrar un mensaje en consola pero indicado al user y al navegador que es una advertencia
// console.debug / veriricar 
// console.info / similar al console.log

console.log("Name" + ": "+ userName + ", " + "Last name"+ ": "+ lastName + ", "+ "Age" + ": "+age + ", "+ "Address"+ ": "+ address + ", "+ "Phone"+": "+phone+", "+"Email"+": "+email)
console.log("Name:", userName, "Last name:", lastName, "Age", age + ", "+ "Address"+ ": "+ address + ", "+ "Phone"+": "+phone+", "+"Email"+": "+email)
console.error(`Name: ${userName}, Last Name: ${lastName}, Age: ${age}, Adress: ${address}, Phone: ${phone}, Email: ${email}`);

console.group("info agrupada") // inicio del grupo
console.info("Data basic") // toda la info que quiero mostrar
console.groupEnd() // fin del grupo

console.group("Data information")
console.log("User name:", userName)
console.log("Last name:", lastName)
console.log("Age:", age)
console.groupEnd()

console.group("Data contact information")
console.log("Address:", address)
console.log("Phone:", phone)
console.log("Email:", email)
console.groupEnd()

listCodersGates = ["Majo", "mojo", "jojo"]
console.table(listCodersGates)
