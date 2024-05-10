// Incerciones de elementos al DOM
let btnExecute = document.getElementById('execute')
let btnRemove = document.getElementById('remove')
let btnReplace = document.getElementById('replace')
let main = document.querySelector('main')

function isAppendChild (){
    let btnExample = document.createElement('button')
    // btnExample.setAttribute('type', 'button') opción clasica
    btnExample.type = 'button' // opción normal
    // btnExample.classList('btn')//opción clasica
    // btnExample.classList('btn-success') //opción clasica
    btnExample.classList.add('btn', 'btn-success') // opción normal
    btnExample.textContent = "example"
    return btnExample
};


function isRemoveChild (){
    let btnExample = document.querySelector(".btn-info")
    return btnExample
}

function isReplaceChild (){
    
}
// function isInsertBefore (){
    
// }

btnExecute.addEventListener('click', function () {
    let btnCreated = isAppendChild()
    main.appendChild(btnCreated)
})

btnRemove.addEventListener('click', function () {
    let btnRemove = isRemoveChild()
    main.removeChild(btnRemove)
})

btnReplace.addEventListener('click', function () {
    // let btnReplace = isReplaceChild()
    // main.replaceChild(btnReplace)
    let actualElement = isRemoveChild()
    let newElement = isAppendChild()
    main.replaceChild(newElement,actualElement )
})



// isAppendChild()