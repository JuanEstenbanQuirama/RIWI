// Number
/**
 * datos primitivos, pueden ser enteros y decimales
 * cuando se usan numeros muy grandes, js permite usar _ y no el . 5_000_000
 */

let myFirstNumber = 5;
let mySecondNumber = "2";
document.write(myFirstNumber);

console.log(myFirstNumber * mySecondNumber);
console.log(myFirstNumber - mySecondNumber);
console.log(myFirstNumber / mySecondNumber);

console.log(myFirstNumber + mySecondNumber); // concatena porque es un string
console.log(myFirstNumber + Number(mySecondNumber));
console.log(myFirstNumber + Number.parseInt(mySecondNumber));
console.log(myFirstNumber + parseInt(mySecondNumber));
// js es tupado debil y es permisivo, permite realizar operaciones menos la suma, un numero y un string que contenga únicamente numeros


let typeNumber = 5.145
console.info(typeof(typeNumber)) // solo me dice que es tipo numero pero no me dice si es decimal o no
// Saber si un numero e entero o no
console.info(Number.isInteger(typeNumber)) // false
let typeNumberCase = 5.0 //o 5.00000000
console.info(Number.isInteger(typeNumberCase)) // true / solo funcona cuanto el decimal es unicamente .0

console.log("numeros grandes-------------------->")
let number1 = 5000000000000000
let number2 = 5_000_000_000_000_000
let number3 = 85

console.info(number1 + number2)
console.info(number1 - number2)
console.info(number1 * number2)
console.info(number1 / number2)
console.info(Number.isFinite(number1*number2))
console.log(Number.MAX_VALUE) //el numero maximo que entiende js
console.log(Number.MIN_VALUE) //el numero mas pequeño
console.log(Math.PI)