
/**
 OBJETOS
    Sintaxis básica de un ubjeto
        const nameObjeto = {
            clave: valor, 
            clave: valor
        }
 */

console.groupCollapsed("Objetos")

let coderRiwi = {
    name: "juan",
    lastName: "Quirama",
    bithDate: new Date("1996-19-12"),
    rh: "A+",
    location: {
        country: "Colombia",
        state:"Antioquia",
        city: "Medellín",
        street: "kra 87a",
        neighborhood: "la castellana",
        address: "kra 87a",
        postalCode: "05001"
    },
    phone: "3059052091",
    skills: ["python", "html5", "css", "js"],
    email: "jquirama96@gmail.com",
    saludar: function () {
        console.log(`Hello world, i am ${this.name} ${this.lastName}`) 
    }
}
// para usar las propieades del objeto usamos this. de lo contrario tomaria una viarbale de afuera del objeto y si no existe la crearía como 'var' OJO!

// formas de acceder a una clave de un objeto
console.log(coderRiwi.location.address)
console.log(coderRiwi['location']['address'])

// formas de acceder a un arreglo en el objeto
console.log(coderRiwi.skills[2])

coderRiwi.saludar()
console.groupEnd()

console.groupCollapsed("modificar objetos")
// agregar una calve-valor al objeto
console.log(coderRiwi)
coderRiwi.idNumber = "1036670093"
coderRiwi['typeDocument'] = "C.C"
coderRiwi.skills.push("java")
coderRiwi.clan = "Gates"
console.log(coderRiwi)

// modificar el valor de una clave
coderRiwi.name = "Juan Esteban"
coderRiwi['lastName'] = "Quirama Lopez"
coderRiwi.skills[2] = "CSS5"
console.log(coderRiwi)

// caso de uso especial
Object.defineProperty(coderRiwi, "clan", {
    value:"The Gates",
    writable: true, // permite escribir la variable
    enumerable: true, // permite que la propiedad aparezca
    configurable: true // permite que la propiedad sea eliminada

})

Object.defineProperty(coderRiwi, "Hobbies", {
    value:{
        first: "eat fungi",
        seccond: "sleep"
    },
    writable: true, 
    enumerable: true, 
    configurable: true 

})

coderRiwi.emergencyNumber= {
    contact: "Mary lopez",
    phone: "3136265524",
    optionalPhone: "12323436"
}
console.log(coderRiwi)

Object.assign(coderRiwi, {
    sex:"Dios que oiga"

})
// eliminar una propiedad
// delete coderRiwi.Hobbies
// coderRiwi.Hobbies = undefined
// console.log(coderRiwi)
console.groupEnd()

console.groupCollapsed("sum objects")

let obj1 = {
    a: "uno"
}
let obj2 = {
    b: "dos"
}
let obj3 = {
    c: "tres"
}
let obj4 = {
    d: "cuatro"
}
let sumObjetos = Object.assign(obj1, obj2) 
// me crea un objeto 'sumObjetos' con los valores de obj1 y obj2, y ademas al objeto1 le signo los valores del objeto2
console.log(sumObjetos)
console.log(obj1, obj2)
let sumObjetos2 = {...obj3, ...obj4} // de esta manera no se modifica el primer objeto
console.log(obj3, obj4)
console.groupEnd()


console.group("Deetructuring objects")
// Desestructuracón de objetos
// let objeto = {
//     clave: "valor",
//     key: "value"
// }
// let {lave, key} = objeto;

let objectExampleOne = {
    userName: "juan esteban",
    userEmail: "juanes@gmail",
    userRole: "Administrador",
    userPassword: "Colombia15*"
}
//  extraer simplemente
let {userName, userEmail, userPassword} = objectExampleOne
// extraer y cambiar el nombre de la variable
let {userName:dateName, userEmail:dateEmail, userPassword:datwPass} = objectExampleOne 
console.log(userEmail)

// deestructure Anidada
let coderRiwi2 = {
    name: "juan",
    lastName: "Quirama",
    bithDate: new Date("1996-19-12"),
    rh: "A+",
    location: {
        country: "Colombia",
        state:"Antioquia",
        city: "Medellín",
        street: "kra 87a",
        neighborhood: "la castellana",
        address: "kra 87a",
        postalCode: "05001"
    },
    phone: "3059052091",
    skills: ["python", "html5", "css", "js"],
    email: "jquirama96@gmail.com",
    saludar: function () {
        console.log(`Hello world, i am ${this.name} ${this.lastName}`) 
    }
}
let {name:nameCoder, lastName, location: {address}, email} = coderRiwi2
console.log(address)
console.groupEnd()



