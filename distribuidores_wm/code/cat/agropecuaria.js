window.onload = inicio;

function inicio() {
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
            datas.sort(function (a, b) {
                if (parseInt(a.precio) > parseInt(b.precio)) {
                    return 1;
                }
                if (parseInt(a.precio) < parseInt(b.precio)) {
                    return -1;
                }
                return 0;
            })
            datas.map(elem => {
                if (elem.categoria == 'Agropecuaria') {

                    container.setAttribute('style', '');
                    container.innerHTML +=
                        `
                        <div class="card text-center">
                            <img class="card-img-top" src="${elem.imagen}" alt="${elem.nombre}" style="object-fit:cover;height:100px;">
                            <div class="card-body">
                                <h5 class="productos card-title">${elem.nombre}</h5>
                                <span class="text-primary" style="font-weight:700;">$${elem.precio} + IVA</span>
                                <p class="card-text" style="font-size:14px;">${elem.descripcion}</p>
                            </div>
                            <div class="card-footer">
                                <form action="#" method="POST" id="${elem.id}">
                                    <input hidden type="text" name="id" value="${elem.id}">
                                    <input hidden type="text" name="nombre" value="${elem.nombre}">
                                    <input hidden type="number" name="precio" value="${elem.precio}">
                                    <input type="number" name="cant" class="p-0 text-center mx-0 d-inline form-control w-25 cant align-middle" min="1" value="1">
                                    <input type="submit" onclick="agregarCarrito(${elem.id})" class="mx-0 btn btn-primary agregarCarrito" value="Agregar" style="font-size:14px;">
                                </form>
                            </div>
                        </div>
                    `;

                }

            })

        })
}

function listarSinPrecio() {

    let container = document.getElementById('gridCont');
    container.innerHTML = '<p id="sinRes" class="visually-hidden" style="grid-column: 1 / main-end;display:block;text-align:center;font-size:30px;vertical-align:middle;">No se encontraron productos para su busqueda...</p>'
    fetch('../../apis/listar.php')
        .then(res => res.json())
        .then(datas => {
            datas.sort(function (a, b) {
                if (parseInt(a.precio) > parseInt(b.precio)) {
                    return 1;
                }
                if (parseInt(a.precio) < parseInt(b.precio)) {
                    return -1;
                }
                return 0;
            })
            datas.map(elem => {
                if (elem.categoria == 'Agropecuaria') {

                    container.setAttribute('style', '');
                    container.innerHTML +=
                        `
                        <div class="card text-center">
                            <img class="card-img-top" src="${elem.imagen}" alt="${elem.nombre}" style="object-fit:cover;height:100px;">
                            <div class="card-body">
                                <h5 class="productos card-title">${elem.nombre}</h5>
                                <p class="card-text" style="font-size:14px;">${elem.descripcion}</p>
                            </div>
                            <div class="card-footer">
                                <p class="card-text text-danger" style="font-size:14px;">Inicia sesión para ver más detalles.</p>
                            </div>
                        </div>
                    `;

                }

            })

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
                    location.href = './agropecuaria.html'
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
                    location.href = './agropecuaria.html';
                } else {
                    alert('Antes debes iniciar sesión')
                    location.href = '../routes/registro/login.html';
                }
            })

    })

}