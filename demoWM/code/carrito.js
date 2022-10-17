window.onload = inicio;

function inicio() {
    verificarSesion()
    verCarrito()
    document.getElementById('logout').onclick = cerrarSesion;

}

function verificarSesion() {
    let btnLogIn = document.getElementById('login');
    let btnSignUp = document.getElementById('signup');
    let btnLogOut = document.getElementById('logout');
    fetch('../apis/verifSesion.php')
        .then(res => res.json())
        .then(data => {
            if (data !== 'true') {
                alert('Antes debes iniciar sesión')
                location.href = './registro/login.html'
            } else {
                btnLogOut.classList.toggle('visually-hidden')
                btnLogIn.classList.toggle('visually-hidden')
                btnSignUp.classList.toggle('visually-hidden')
            }
        })
}

function verCarrito() {
    let container = document.getElementById('cont');
    let table = document.getElementById('table');
    let totalF = document.getElementById('total');
    table.innerHTML = ''

    fetch('../apis/verCarrito.php')
        .then(res => res.json())
        .then(data => {
            let total = 0
            for (i in data) {
                total += (data[i].cant) * (data[i].precio);
                table.innerHTML += `
            <tr class="align-middle">
                <td>${data[i].nombre}</td>
                <td>${data[i].cant}</td>
                <td>$${data[i].precio}</td>
                <td>$${(data[i].cant) * (data[i].precio)}</td>
                <td>
                <form id="${data[i].nombre}" action="#" method="POST">
                    <input hidden type="text" name="id" value="${i}">
                    <input type="submit" onclick="eliminar('${data[i].nombre}')" class="w-100 py-0 btn btn-danger" value="X" style="height:30px;">
                </form></td>
            </tr>`
            }

            totalF.innerHTML = `<strong style="font-weight:600;">Total: $${total} + IVA</strong >`

            if(table.innerHTML == ''){
                table.parentNode.classList.toggle('visually-hidden')
                container.innerHTML = `<p class='text-danger text-center'>No hay productos en el carrito</p>`
            }
        })
}

function eliminar(id) {
    let form = document.getElementById(id);

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);
        fetch('../apis/eliminar.php',{ method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == 'Producto eliminado del carrito') {
                    alert(data)
                    location.href = './carrito.html'
                }
            })
    })
}

function cerrarSesion() {
    if (confirm('¿Cerrar sesión?')) {
        fetch('../apis/cerrarSesion.php')
            .then(res => res.json())
            .then(data => {
                if (data == 'sesion cerrada') {
                    location.href = './index.html'
                }
            })
    }
}