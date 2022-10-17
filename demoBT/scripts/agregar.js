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
    document.getElementById('sub').onclick = agregar;
}

function agregar() {

    let form = document.getElementById('formId');

    let vNombre = document.getElementById('inpNombre').value;
    let vPrecio = document.getElementById('inpPrecio').value;
    let vStock = document.getElementById('inpStock').value;
    const prod = new producto(vNombre, vPrecio, vStock);
    document.getElementById('inpCode').value = JSON.stringify(prod);
    alert(JSON.stringify(prod));


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('../registrar.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == "true") {
                    document.getElementById('inpNombre').value = '';
                    document.getElementById('inpCode').value = '';
                    document.getElementById('inpPrecio').value = '';

                } else {
                    console.log(data);
                }
            })

        location.href = location.href;
    })


}
