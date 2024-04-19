let myName = "Juan";
// validate a simple condition
if ((myName = "Juan")) {
  console.log("hola " + myName);
}

console.groupCollapsed("conditional if else");
let minimumDrinkingAge = 18;
let drinkingAge = 19;

if (drinkingAge < minimumDrinkingAge && drinkingAge > 0) {
  console.log("No eres mayor");
} else {
  console.log("Eres mayor");
}

if (true) {
  console.log("opcion verdadera");
} else {
  console.log("opcion verdadera");
}

// example
let nameAdmin = "admin";
let passAdmin = 1234;
if (nameAdmin == "admin" && passAdmin === 1234) {
  console.log("Welcome master");
} else {
  console.log("nel pastel");
}

// conditional if else-if -
// let number = Math.round(Math.random() * 5);

// if (number === 0) {
//   console.log("Es un numero neutro");
// } else if (number < 0) {
//   console.log("El numero", number, "es un numero negativo");
// } else {
//   console.log("el numero es positivo", number);
// }

// let conveyance = prompt("how do you travel to riwi?");
// let isBike = false
// if (conveyance == "pie" && isBike == true) {
//     console.log(`you travel in ${conveyance}`)
// } else if (conveyance == "bicicleta") {
//     console.log(`you travel in ${conveyance}`)
// } else if (conveyance == "metro") {
//     console.log(`you travel in ${conveyance}`)
// } else {
//     console.log(`you are poor`)
// }

console.groupEnd()

console.groupCollapsed("switch")

// switch (conveyance) {
//   case "pie":
//     console.log(`you travel in ${conveyance}`);
//     break;
//   case "bicicleta":
//     console.log(`you travel in ${conveyance}`);
//     break;
//   case "moto":
//     console.log(`you travel in ${conveyance}`);
//     break;
//   default:
//     console.log(`you travel in ${conveyance} xd`);
//     break;
// }

// console.log("bitan menu")
// let selectMenuOption = prompt("Select menu option:")

// switch (selectMenuOption) {
//     case "pasta":
//         console.log(`Your choose: ${selectMenuOption}, enjoy it!`)
//         break;
//     case "sushi":
//         console.log(`Your choose: ${selectMenuOption}, enjoy it!`)
//         break;
//     default:
//         console.log(`Your choose: ${selectMenuOption}, it's not on the menu`)
//         break;
// }

let saldo=400
// let menu = prompt(`
// Menu
// [1] Carne -> $500
// [2] Pollo -> $600
// [3] Pizza -> $700
// [4] Pezcado -> $400
// `)

// if (menu == 1 && saldo >= 500 ) {
//     console.log("puedes comer carne")
// } else if (menu == 2 && saldo >= 600) {
//     console.log("puedes comer pollo")
// } else {
//     console.log("no money")
// }
console.groupEnd()

console.groupCollapsed("CICLOS")

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

for(let i = 0; i <=10; i++) {
    console.log("hello world")
}

// imprimir la tabal de multiplicar del 12 
for(let i = 1; i <=10; i++) {
    console.log(12*i)
}
console.groupEnd()

console.group("ciclo while") // mientras
let i = 1
while (i<10) {
    console.log("hello world")
    i+=3
}
console.groupEnd()
// mientras
