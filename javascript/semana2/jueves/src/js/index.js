let array1 = [1,2,3,4,5,6,7,8,9,10]

// let array2 = array1.map((numero => numero*2))
// console.log(array2);
console.groupCollapsed("reversar una lists")
console.log(array1);
let array2 = array1.reverse(function(item){ //me crea uno nuevo pero me modifica el original
    return item
})
console.log("Por usar .reverse se modifica el array origianl:", array1);
console.log("usnado .toReversed, no se modifica el array original",array2)

let array3 = array1.toReversed() // me crea uno nuevo sin modificar el original
console.log(array3);

// crea una lista de 10 frutas 
let arrayFrutis = ["Apple", "Banana", "Kiwi", "Lemon", "Pear"]
// let arrayFrutis2 = arrayFrutis.toReversed().toUpperCase()
console.log(arrayFrutis);

let arrayFrutisReversed = arrayFrutis.toReversed() // Invertir el array
let arrayFrutis2 = arrayFrutisReversed.map(fruit => fruit.toUpperCase()); // Convertir cada elemento a mayúsculas
console.log(arrayFrutis2); 
console.groupEnd();

console.groupCollapsed("ordenar lista")
// ORDENAR UNA LISTA .sort tipo de numero, string, tipo de dato
let listaDesordenada = ["lucas", "maria", "ana", "pablo"]
console.log(listaDesordenada);
listaDesordenada.sort()
console.log(listaDesordenada);

let listaNumericaDesordenada = [1,-56,12,6.1,9,88]
// let new1 = listaNumericaDesordenada.slice().sort() //con el slice se evita modificar el array original
// let new1 = listaNumericaDesordenada.ToSorted()
// console.log(new1)

console.groupEnd()

console.group("for each")

// for in para los claves, indice
// for each para los dos 
let listaCoders = ["Maria", "Pablo", "Lucas"]
let listacoderOb = {
    estudiante1:"maria",
    estudiante2:"pablo",
    estudiante3:"lucas"
}

listaCoders.forEach(function(coder, i) {
    console.log(`El coder ${coder} esta en la posicion ${i}`);
})
// for in para los claves, indece
for (const key in listacoderOb) {
    console.log(key)
}
// for of para los valores 
for (const iterator of listaCoders) {
    console.log(iterator)
}
console.groupEnd()

console.groupCollapsed("every")
// a condificon se valida con cada uno de ellos, se tiene que cumplir en todos
let numeros = [55,88,111,66,99,7,4,5]

// dos formas de hacer lo mismo
let respuesta1 = numeros.every(function (numero){
    let i = numero > 0
    return i
})
console.log(respuesta1)
let respuesta2 = numeros.every(numero => numero > 0)
console.log(respuesta2)

let parNumber = [2,4,3,6,9,12]
let onlyPar = [2,4,6,8,10]
let isParNumber = onlyPar.every(n => n%2==0)
console.log(isParNumber)
console.groupEnd()

console.group("Some")
// si almenos uno cumple la condicion

let nombres = ["luas", "maria", "pablo"]

let checkNombres = nombres.some(nombe => nombe === "pedro")
console.log(checkNombres);

// let inputUser = prompt("inresa tu nombre: ")
// let checkNombres2 = nombres.some(nombe => nombe === inputUser)
// console.log(checkNombres2);


// crea una lits in 10 N y con el met filter primero saca los numeros pares de la lista y guardalos en una nueva y luego con otro filter saca los n impares


let allNumbers = [1,2,3,4,5,6,7,8,9,10]
let allNumbersPar = allNumbers.filter(n => { 
    if(n %2 ==0){
        return n
    } 
})
console.log(allNumbersPar)
let allNumbersInPar = allNumbers.filter(n => { 
    if(n %2 !==0){
        return n
    } 
})
console.log(allNumbersInPar)
let allNumbersParOp2 = allNumbers.filter(nombe => (nombe%2==0))
console.log(allNumbersParOp2);