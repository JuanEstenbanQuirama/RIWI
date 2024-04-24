// ARRAY O VECTOR
// Crear un array
// let arraySimple1 = []
// let arraySimple2 = Array()
// let arraySimple3 = new Array(3) // me crea los espacios vacos y me los va a respetar [ espacio, espacio, espacio, ]

// let arraySimple = [1, "alfa", true, [2,3,4,5,5], {name: "juan", lastName: "quirama"}, false] // de esta forma solo se permite en javascript 
console.groupCollapsed("Create")
let arraySimple = [1, "alfa", true, [2,3,4,5,5], {"name": "juan", "lastName": "quirama"}, false]

let arraySimple3 = Array("uno", "dos", "tres")

console.log(arraySimple)
console.log(arraySimple3)

let isName = arraySimple[4]
let theName = isName.name
console.log(theName)
console.log(theName.split(""))
console.log(Array.from(isName))
console.groupEnd()

console.groupCollapsed("modificar, agregar, crear")
let alphabet = ["a", "b", "c", "d", "e", "f", [1,2,3]]
console.log(alphabet[6][2])
console.log(alphabet.at(-1)) // permite empezar de atrás hacia aldelante / su funcion lo uno que hace es traer elemento, no permite actualizar
alphabet[0] = "Alpha" // sentencia de  [] si se puede cambiar el valor con .at() solo retorna el valor

// agregar al final
alphabet.push("h", "i")
// agregar al comienzo
alphabet.unshift(1,2)
// eliminar
alphabet.pop() // elimina la ultima posición y me trae el elemento eleminado
console.log(alphabet.pop())
// eliminar al comienzo
alphabet.shift() // elimina la primera posición y me trae el elemento eleminado
console.log(alphabet.shift()) 
delete alphabet[2] // elimina pero deja la posición 
console.log(alphabet)
console.log(alphabet.includes("e"))
console.log(alphabet.indexOf("e")) // me retorna la posicion donde se encuentra
console.log(alphabet.indexOf("c"))
console.groupEnd()

console.group("union de arrays")

let clanGates = ["mojo", "eloy", "god"]
let clanGosling = ["marciana", "guille", "kevin"]
console.log(clanGates)
console.log(...clanGates, ...clanGosling)
console.log(clanGates.concat(clanGosling))

console.log(clanGates.join("-/-/-"))
console.log(clanGates.slice(2))

// crea un array con 10 posiciones, este array soo debe contener numeros, usa el metodod .join
let isArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(isArray)

let arrayJoin = isArray.join(",")
let arrayJoinNumber = arrayJoin
console.log(arrayJoinNumber)
let arrayIsArray = arrayJoin.split(",")
console.log(arrayIsArray)

let final = arrayIsArray.map(Number)
console.log(final)

for (const num of arrayIsArray) {
    parseInt(num)
    console.log(num)
}

console.log(Array.from(arrayJoinNumber))

