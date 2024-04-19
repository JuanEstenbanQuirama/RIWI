// Number
/**
 * datos primitivos, pueden ser enteros y decimales
 * cuando se usan numeros muy grandes, js permite usar _ y no el . 5_000_000
 */

let myFirstNumber = 5;
let mySecondNumber = "2";


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

console.info(number1 + number2)
console.info(number1 - number2)
console.info(number1 * number2)
console.info(number1 / number2)
console.info(Number.isFinite(number1*number2))
console.log(Number.MAX_VALUE) //el numero maximo que entiende js
console.log(Number.MIN_VALUE) //el numero mas pequeño
console.log(Math.PI)

console.log("exponencial-------->")
let exampleNumber = 848
console.log((exampleNumber).toExponential(50))
console.log((exampleNumber).toString(2)) // binario
console.log((exampleNumber).toString(16)) //hexagesimal
console.log(exampleNumber.toString(8))
console.log(exampleNumber.toString(16))

console.log("decimales---------------------->")
let example =5.12
document.write(example)
// cuantos decimales quiero mostras NO REDONDEA
console.log(example.toFixed()) // quita los decimales
console.log(example.toFixed(5)) // fuerza la cantidad de decimales si se ponen mas, se pone un 0 de mas 
// console.log(example.toFixed(100)) - investigar porque la respuesta es tremendo numero


console.log("redondear")
let numeroRedondear = 3.5
console.log(Math.round(numeroRedondear)) // redondea .5 el numero sigueinte, .4 el numero anterior
console.log(Math.floor(numeroRedondear)) // retrocede al numero anterior
console.log(Math.ceil(numeroRedondear))  // avanza al numero sigueinte 
console.log(Math.trunc(numeroRedondear)) // te deja el numero tal cual está, sin decimales 

let numberRamdom = Math.trunc(Math.random()*10)
console.log(numberRamdom)
let x = Math.ceil(Math.random()*(90 - 92)+92);
console.log(parseInt(x))
// .trunc y .ramdon necesitan el +1 / reound y trunc no necesitan el numero
let numberRamdom2 = Math.floor(Math.random()*(92 - 90+1)+90) // valor superior menos valor inferior +1 +el alor inferior
console.log(numberRamdom2)



console.log(Math.abs(-50)) // Sacar el valor absoluto - pasar de negativo a positiv
console.log(Math.pow(2, 5)) // potencia
console.log(Math.sqrt(25))
console.log(Math.cbrt(25))

let nume = -45

if (nume>0){
    console.log("positivo")
} else {
    console.log("negativo")
}

console.log(Math.sign(nume)) // si es positivo me da 1, de lo contrario retorna un -1

listNumero = [1, 5, 3, 9]
console.log(listNumero.sort()) //metodo de las listas 

// como usar para hacer de menor a mayor SORT

// sacar el numer mayor
console.log(Math.max(...listNumero))

