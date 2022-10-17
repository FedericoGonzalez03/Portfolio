window.onload = inicio;

class producto {

    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    comprar(x) {
        total = total + (x * this.precio);
        this.stock = - (x * this.stock);
    }

    devolver(x) {
        total = total - (x * this.precio);
        this.stock = + (x * this.stock);
    }
}

function inicio() {
    document.getElementById('sub').onclick = comprar;
}

function comprar() {

    let form = document.getElementById('formCons');

    let vId = document.getElementById('inpId').value;
    let vCant = document.getElementById('inpCant').value;


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);
        let artActualizado;
        fetch('../consultar.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(datas => {

                for (elem of datas) {
                    if (elem.id == vId) {

                        let nuevoStock = parseInt(JSON.parse(elem.producto).stock) + parseInt(vCant);
                        artActualizado = {
                            nombre: JSON.parse(elem.producto).nombre,
                            precio: JSON.parse(elem.producto).precio,
                            stock: nuevoStock
                        };

                        document.getElementById('inpCode').value = JSON.stringify(artActualizado);
                        let bl = confirm('Estas por comprar ' + vCant + 'kg, el stock luego de la compra sería de ' + nuevoStock + 'kg')
                        let actualizar = new FormData(form);
                        if (bl) {
                            fetch('../actualizarStock.php', { method: 'POST', body: actualizar })
                                .then(res => res.json())
                                .then(data => {
                                    location.href = location.href;
                                })
                        }

                    }
                }
            })
    })

}






