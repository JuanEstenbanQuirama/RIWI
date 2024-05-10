const main = document.querySelector('main')
function addMain() {
    for (let i = 0; i < 10; i++) {
        main.innerHTML += `
    <div class="item">
            <img src="https://picsum.photos/200
            " alt="">
            <h2>title</h2>
            <button>more</button>
    </div>
    `

    }



}

addMain()
