function index() {
  let main = document.querySelector("main");
  for (let i = 0; i < listPets.length; i++) {
    main.innerHTML += `
    <div class="card" style="width: 17rem">
        <img src=${listPets[i].imagen} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title" style="text-align: center;"> ${listPets[i].petName}</h5>
          <p class="card-text"><strong>Race:</strong> ${listPets[i].species}</p>
          <p class="card-text"><strong>Species:</strong> ${listPets[i].race}</p>
          <p class="card-text"><strong>Owner:</strong> ${listPets[i].owner.ownerName}</p>
          <a href="#" class="btn btn-primary">see more</a>
        </div>
      </div>
    `;
  }
}

index()

function saludar() {
  console.log("Hello Madafaka");
}

let boton = document.getElementById("saludar");
// boton.addEventListener("click", function () {
//   saludar();
// });
boton.addEventListener("click", saludar);


// for in (id) o for or (valores) sirve mucho  (la mejor opcion) mostrar objetos unicamente
// Buscar eliminar hijos (aprendChild)

// seccion de listar, los componentes tiene que ser que los de bootstrap
