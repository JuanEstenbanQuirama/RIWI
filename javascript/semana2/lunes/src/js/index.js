// manejo structuras de control part 2.

// for eachf
let listFruits = [
  "apple",
  "orange",
  "banana",
  "grape",
  "strawberry",
  "kiwi",
  "pineapple",
  "watermelon",
  "mango",
  "pear",
  "peach",
  "plum",
  "cherry",
  "blueberry",
  "raspberry",
  "blackberry",
  "lemon",
  "lime",
  "coconut",
  "pomegranate",
];
// recorrer la lista con un ciclo for
console.groupCollapsed("recorriendo un array con for")
for (let i = 0; i < listFruits.length; i++) {
    console.log(listFruits[i])
    
}
console.groupEnd()

// for each
console.groupCollapsed("recorriendo un array con forEach")
listFruits.forEach(fruit => {
    console.log(fruit)
});
listFruits.forEach(function(fruit) {
    console.log(fruit)
});

let listEmployees = [
    "Ian",
    "Juan",
    "Ana",
    "Pedro",
    "Laura",
    "Carlos",
    "María",
    "José",
    "Sofía",
  ];

listEmployees.forEach(empleado => {
    console.log(empleado.toUpperCase())
});

listEmployees.forEach(function(empleado) {
    console.log(empleado)
});


// listEmployees.forEach(employee => {
//     let name = employee.split(" ")
//     let firstLetter = name[0].charAt(0) // se usa charAt para sacar solo la primera letra
//     let nameConcat = firstLetter.concat(name[0])
//     console.log(nameConcat) //JJUAN
// })

// let employees = [
//     "ian martínez",
//     "juan pérez",
//     "ana garcía",
//     "pedro sánchez",
//     "laura lópez",
//     "carlos gonzález",
//     "maría fernández",
// ];
// employees.forEach(employe => {
//     let fullName = employe.split(" ")
//     let firstLetter = fullName[0].charAt(0).toUpperCase()
//     let secondtLetter = fullName[1].charAt(0).toUpperCase()
//     // unir el nombre

//     console.log(firstLetter)
//     console.log(secondtLetter)
// })


// for each con indice (posicion)
listFruits.forEach((fruit,index) => {
    console.log(fruit, index)
})
console.groupEnd()

console.groupCollapsed("for each en objetos")
let coderRiwi = {
    name:"juan",
    lastName:"Quirama",
    height: 180,
    height: 76,
    gender: "w40",
    date: new Date("1996-19-12"),
    id: "1036670093",
    country: "Colombia",
    email: "jquirama96@gmail.com"
}

Object.keys(coderRiwi).forEach(key => {
    console.log(coderRiwi[key])
})

// for in : recorre todo un objeto para no usar Object.leys / for in me trae las llaves
for (let key in coderRiwi) {
    console.log(coderRiwi[key])
}
// for of funciona mejor en listas // con un objeto me dice "TypeError: is nos iterable"
// for (const i of coderRiwi) {
//     console.log(i)
    
// }
console.groupEnd()

console.groupCollapsed("objetos for in of")

listaEmpleados = [
    {
        nombre: "Juan Pérez",
        edad: 30,
        puesto: "Desarrollador de Software",
        salario: 50000
    },
    {
        nombre: "María García",
        edad: 28,
        puesto: "Diseñadora Gráfica",
        salario: 45000
    },
    {
        nombre: "Luis Ramírez",
        edad: 35,
        puesto: "Gerente de Proyectos",
        salario: 60000
    },
    {
        nombre: "Ana Martínez",
        edad: 32,
        puesto: "Analista de Negocios",
        salario: 55000
    }
];
listaEmpleados.forEach(empleado => {
    console.log(empleado)
    
});

for (const empleado of listaEmpleados) { // valor
    console.log(empleado.nombre)
}

for (const key in listaEmpleados) {// claves
    console.log(key)
}
console.groupEnd()

console.group(".Map")
// Map: metodo dispoble en los arrays / map retorna un nuevo array
let listNumbers = [2,5,7,4,7,4]
let ListNumbersMulti = listNumbers.map(number => {
    console.log(`${number} x 2 = ${number *2}`)
    return number*2
})
console.log(ListNumbersMulti)

console.groupEnd()

// numeros del 0 al 100
// solo guardar los numeros pares

let numbers = [];
for (let i = 0; i <=100; i++) {
    numbers.push(i);
}
numbers.forEach(number => {
    console.log(number)
});

let numbersPar = numbers.map(number => { // me retorna una cadena del mismo tamaña, se ua .filter en vz de map 
    if(number %2 ==0){
        return number
    } 
})

console.log(numbersPar)
