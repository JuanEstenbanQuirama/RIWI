// String------------------------

let mensaje1 = "soy un string";
let mensaje2 = String("soy un string");
let mensaje3 = new String("soy un string");

//  cantidad de caracteres .length (metodo)
let fullName = "Juan Esteban Quirama Lopez"
//  los espacioes en blanco tm se toman como caracteres
let cantidad= fullName.length
console.log("la cantidad de carasteres:", cantidad)
//  extranccion de caracteres 
let extranccionLetra=fullName[fullName.length-1] // let extranccionLetra=fullName[7]

console.log("La letre es", extranccionLetra)
// charAt (metodo)
let extranccionLetra2= fullName.charAt(7) //buscar charAt - como funciona este metodo xd
console.log("La letre es", extranccionLetra2)

// bactips : sirve para interpolar variables  `${}`
let myName="Juan"
let lastName="Quirama"
let email="jquirama96@gmail.com"

console.log(`hola mundo, mi nombre es  ${myName} ${lastName} y mi coreo eso ${email}`)
// tambine se usan las bactip para agregar contenido html en función a variables en js vanilla
const header = `
<header>
    <h1>bitan</h1>
    <p>hola mundo, mi nombre es  ${myName} ${lastName} y mi coreo eso ${email}</p>
</header>
`

// let myUserName = prompt("Enter your name"); 
// const myLastName = prompt("Enter your last name"); 
// let myAge = prompt("Enter your Age"); 
// let myAddress = prompt("Enter yout address");
// let myPhone = prompt("Enter your phone"); 
// const myEmail = prompt("Enter your email");

// const miInfo = `
// <section>
// <h1>my info</h1>
// <p>${myUserName}</p>
// <p>${myLastName}</p>
// <p>${myAge}</p>
// <p>${myAddress}</p>
// <p>${myPhone}</p>
// <p>${myEmail}</p>
// </section>
// `
// document.write(header)
// document.write(miInfo)
    // fundamental el orden para llamar los bloques de codigo en sentido semántico


const mensajeDoom = "hola care verga"
const mensajeDoom2 = "hello"
console.log(mensajeDoom.toLowerCase())
console.log(mensajeDoom.toUpperCase())
document.write(mensajeDoom)

// metodo concat
console.log(mensajeDoom.concat(mensajeDoom2))
console.log(mensajeDoom + mensajeDoom2)
console.log(mensajeDoom , mensajeDoom2) //en este se genera espacio

// si el string comienza con una palabara clabe
console.log(mensajeDoom.startsWith("familia")) // false
console.log(mensajeDoom.startsWith("hola")) // true
//buscar una palabra clave dentro de un string
console.log(mensajeDoom.includes("care")) // true
console.log(mensajeDoom.includes("cares")) // false
// si el sttring termina con una palabra clave
console.log(mensajeDoom.endsWith("familia")) // false
console.log(mensajeDoom.endsWith("verga")) // true

// Borras espacios al comienzo
let mensajeEspacio = "     hola xd       ";
console.log(mensajeEspacio.trimStart())
console.log(mensajeEspacio.trimEnd())

// modificar string
let coder = "Soy un coder de riw y en riwi soy feliz"
document.write(coder)
console.log(coder.replace("coder", "programador")) // remplaza la priemra coincidencia 
console.log(coder.replaceAll("coder", "programador")) // remplaza todas las coincidencias


console.log(coder.replace(/[aeou]/g, "i"))
// toma el mensaje y lo repite las veces que le indique
console.info(coder.repeat(4))


// relleno de string
let relleno="1234"
document.write(relleno)
console.info(relleno.padStart(20,"#")) // se rellena al incio
console.info(relleno.padEnd(20,"!")) // se rellena al final

// fragmentar string (me trae un fragmento de string)
let fragmento = "ser un coder de riwi cambia tu mundo"
document.write(fragmento)
console.log(fragmento.substring(12)) // desde la posición que se indica si se pone solo un parametro
console.log(fragmento.substring(0,12)) //al colocar los dos parametros, ahora si desde el inicio
console.log(fragmento.slice(0,12))// me regresa un string, subtring no
// separar el string
console.table(fragmento.split(" "))
console.table(fragmento.split(" ", 3)) // si le doy dos parametros, el segundo es el liminte

// 

let phrase = "LenguajeJS, página de javascript"
document.write(phrase)
console.log(phrase.indexOf("L")) // men manda la posición de index /tm se le puede dar otro parametro, buscar como funciona
console.log(phrase.lastIndexOf("t"))


let mensajeN= "nuestra familia es muy grande"
document.write(mensajeN)
console.log(mensajeN.search("familia")) // me regresa la posición donde inicia, 
console.log(mensajeN.search("riwi")) // si no lo encuentra me regresa -1