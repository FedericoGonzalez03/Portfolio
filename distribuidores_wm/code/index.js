window.onload = inicio;

function inicio() {
    verificarSesion();
    document.getElementById("buscar").addEventListener("keyup", actualizar);
    document.getElementById("logout").onclick = cerrarSesion;
}

let actualPage = 0;
let maxPages;
function actualizar() {
    let contador = 0;
    let pagination = document.getElementById("pagination");
    let container = document.getElementById("productos");
    let busqueda = document.getElementById("buscar").value;

    document.getElementById("sinRes").classList.add("visually-hidden");

    document.querySelectorAll(".content").forEach((producto) => {
        producto.parentNode.classList.add("visually-hidden");
    });

    document.querySelectorAll(".content").forEach((producto) => {

        if (producto.innerHTML.toLowerCase().includes(busqueda.toLowerCase())) {

            producto.parentNode.classList.remove("visually-hidden");
            contador++;

        } 
    });
   
    if (contador == 0) {
        document.getElementById("sinRes").classList.remove("visually-hidden");
    }
    pagination.classList.add('visually-hidden')
    if (busqueda == "") {
        for (elem of container.children) {
            if (!elem.classList.contains("actualPage")) {
                elem.classList.add("visually-hidden");
            }
        }
        pagination.classList.remove('visually-hidden')
    }
}
function listar() {
    let container = document.querySelector(".container");
    let productos = document.querySelector("#productos");
    let pages = document.querySelector("#pages");

    fetch("./apis/listar.php")
        .then((res) => res.json())
        .then((datas) => {
            productos.innerHTML = "";
            for (i in datas) {
                if (i == actualPage) {
                    productos.innerHTML += `<div style="margin-bottom:15px;" id="page${i}" class="gridCont actualPage">${datas[i]}</div>`;
                } else {
                    productos.innerHTML += `<div style="margin-bottom:15px;" id="page${i}" class="gridCont visually-hidden">${datas[i]}</div>`;
                }
            }
            maxPages = datas.length;
            pages.innerHTML = `${actualPage + 1} de ${datas.length}`;
            container.innerHTML +=
                '<p id="sinRes" class="visually-hidden" style="display:block;text-align:center;font-size:30px;vertical-align:middle;">No se encontraron productos para su busqueda...</p>';
        });
}

function listarSinPrecio() {
    let container = document.querySelector(".container");
    let productos = document.querySelector("#productos");
    let pages = document.querySelector("#pages");

    fetch("./apis/listarSinPrecio.php")
        .then((res) => res.json())
        .then((datas) => {
            productos.innerHTML = "";
            for (i in datas) {
                if (i == actualPage) {
                    productos.innerHTML += datas[i];
                } else {
                    productos.innerHTML += datas[i];
                }
            }
            pages.innerHTML = `${actualPage + 1} de ${datas.length}`;
            maxPages = datas.length;
            container.innerHTML +=
                '<p id="sinRes" class="visually-hidden" style="display:block;text-align:center;font-size:30px;vertical-align:middle;">No se encontraron productos para su busqueda...</p>';
        });
}

function verificarSesion() {
    let btnLogIn = document.getElementById("login");
    let btnSignUp = document.getElementById("signup");
    let btnLogOut = document.getElementById("logout");
    fetch("./apis/verifSesion.php")
        .then((res) => res.json())
        .then((data) => {
            if (data == "true") {
                btnLogOut.classList.toggle("visually-hidden");
                btnLogIn.classList.toggle("visually-hidden");
                btnSignUp.classList.toggle("visually-hidden");
                listar();
            } else {
                listarSinPrecio();
            }
        });
}

function cerrarSesion() {
    if (confirm("¿Cerrar sesión?")) {
        fetch("./apis/cerrarSesion.php")
            .then((res) => res.json())
            .then((data) => {
                if (data == "sesion cerrada") {
                    location.href = "./index.html";
                }
            });
    }
}

function agregarCarrito(id) {
    let form = document.getElementById(id);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch("./apis/agregarCarrito.php", { method: "POST", body: formulario })
            .then((res) => res.json())
            .then((data) => {
                if (data == "Producto agregado al carrito") {
                    alert(data);
                    location.href = "./index.html";
                } else {
                    alert("Antes debes iniciar sesión");
                    location.href = "./routes/registro/login.html";
                }
            });
    });
}

function prevPage(){
    let pages = document.querySelector("#pages");
    console.log('anterior')
    if(actualPage !== 0){
        let prev = document.querySelectorAll(`.page${actualPage+1}`);
        let next = document.querySelectorAll(`.page${actualPage}`);
        for(prod of prev){
            prod.classList.add('visually-hidden');
        }
        for(prod of next){
            prod.classList.remove('visually-hidden');
        }
        actualPage--;
    }
    pages.innerHTML = `${actualPage + 1} de ${maxPages}`;
}
function nextPage(){
    let pages = document.querySelector("#pages");
    console.log('siguiente')
    if(actualPage !== maxPages-1){
        let prev = document.querySelector(`.page${actualPage+1}`);
        let next = document.querySelector(`.page${actualPage+2}`);
        for(prod of prev){
            prod.classList.add('visually-hidden');
        }
        for(prod of next){
            prod.classList.remove('visually-hidden');
        }
        actualPage++;
    }
    pages.innerHTML = `${actualPage + 1} de ${maxPages}`;
}