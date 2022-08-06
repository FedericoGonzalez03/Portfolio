window.onload = inicio;

function inicio() {
    if(window.location.href == 'https://distribuidoreswm.federicogs.com/routes/categorias/topes.html'){
        window.location.href = window.location.href + "?cat=" + 'Topes y Aislacion';
    }
    verificarSesion();
    document.getElementById('buscar').addEventListener('keyup', actualizar);
    document.getElementById('logout').onclick = cerrarSesion;

}
function actualizar() {
    let container = document.getElementById('gridCont');
    let busqueda = document.getElementById('buscar').value;
    document.getElementById('sinRes').classList.add('visually-hidden')
    document.querySelectorAll('.productos').forEach(producto => {
        if (producto.textContent.toLowerCase().includes(busqueda.toLowerCase())) {
            producto.parentNode.parentNode.classList.remove('visually-hidden')
        } else {
            producto.parentNode.parentNode.classList.add('visually-hidden')
        }
    })
    let contador = 0;
    for (elem of container.children) {
        if (elem.classList.contains('visually-hidden')) {
            contador++
        }
    }
    if (contador == container.children.length) {

        document.getElementById('sinRes').classList.remove('visually-hidden')

    }
}
function listar() {

    let container = document.getElementById('gridCont');
    container.innerHTML = '<p id="sinRes" class="visually-hidden" style="grid-column: 1 / main-end;display:block;text-align:center;font-size:30px;vertical-align:middle;">No se encontraron productos para su busqueda...</p>'
    fetch('../../apis/listar.php')
        .then(res => res.json())
        .then(datas => {
            container.innerHTML += datas
        })
}

function listarSinPrecio() {   

    let container = document.getElementById('gridCont');
    let category = new FormData(document.getElementById('cat'))
    container.innerHTML = '<p id="sinRes" class="visually-hidden" style="grid-column: 1 / main-end;display:block;text-align:center;font-size:30px;vertical-align:middle;">No se encontraron productos para su busqueda...</p>'
    fetch('../../apis/listarSinPrecio.php',{method:'POST',body:category})
        .then(res => res.json())
        .then(datas => {
            container.innerHTML += datas
        })
}

function verificarSesion() {
    let btnLogIn = document.getElementById('login');
    let btnSignUp = document.getElementById('signup');
    let btnLogOut = document.getElementById('logout');
    fetch('../../apis/verifSesion.php')
        .then(res => res.json())
        .then(data => {
            if (data == 'true') {
                btnLogOut.classList.toggle('visually-hidden')
                btnLogIn.classList.toggle('visually-hidden')
                btnSignUp.classList.toggle('visually-hidden')
                listar();
            } else {
                listarSinPrecio();
            }
        })
}

function cerrarSesion() {
    if (confirm('¿Cerrar sesión?')) {
        fetch('../../apis/cerrarSesion.php')
            .then(res => res.json())
            .then(data => {
                if (data == 'sesion cerrada') {
                    location.href = './topes.html'
                }
            })
    }
}

function agregarCarrito(id) {

    let form = document.getElementById(id);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('../../apis/agregarCarrito.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == 'Producto agregado al carrito') {
                    alert(data);
                    location.href = './topes.html';
                } else {
                    alert('Antes debes iniciar sesión')
                    location.href = '../routes/registro/login.html';
                }
            })

    })

}