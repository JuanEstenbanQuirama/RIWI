let btn = document.createElement('button')
btn.classList.add ('btn', 'btn-success')

btn.textContent= "Helo"
let main = document.querySelector('main')

main.before(btn)

let hijoUno = document.querySelector('#hijo-uno')
let hijoDos = document.querySelector('#hijo-dos')

main.insertBefore(btn, hijoDos)


// ejrcicio
