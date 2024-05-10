// Mandejo de elementos hermanos en el main
let header = document.getElementById('header')
let main = document.getElementById('main')
let footer = document.getElementById('footer')
let btnPoint = document.getElementById('btn-point')
let btnExample = createBtn()


// main.before(btnExample)// insert element before content
// main.after(btnExample)// insert element after content
// main.prepend(btnExample) // insert element before first child
// main.append(btnExample) // insert element after last child / tmbine se pyuede usar apendChild es lo mismo

// main.replaceChildren(btnExample, createBtn()) // replace all element - borra todos los hijos y coloca mi elemento
// main.replaceChild() // remplaza a un solo hijo y toca ubicarlo
// main.replaceWith(btnExample) // limpia los hijos y le padre , en este caso las secciones y el main
// main.remove() // elimina el contenedor y sus hijos

// crear un elemento
function createBtn (){
    let btn = document.createElement('button')
    btn.classList.add('btn', 'btn-danger')
    btn.textContent = 'red btn'
    return btn
}

console.log(main.children); // retorna todos los hijos
console.log(footer.children); // si no tiene hijos, retorna una colección vacía
console.log(main.parentElement); // trae el papa
console.log(btnPoint.parentElement.parentElement.parentElement.parentElement.parentElement);
console.log(main.firstElementChild);
console.log(main.lastElementChild);
console.log(main.previousElementSibling);
console.log(main.nextElementSibling);

// vite - tomar el código y dejarlo listo para producción -app web