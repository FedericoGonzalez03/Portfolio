window.onload = inicio;
let clientes = [];
class articulo {

    constructor(id, nombre, cantidad, precio) {
        this.id = id;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
        this.subtotal = precio * cantidad;
    }
}

class Cliente{
    constructor(id, nombreFant, razonSocial, rut, telefono, contacto, direccion){
        this.id = id
        this.nombreFant = nombreFant;
        this.razonSocial = razonSocial;
        this.rut = rut;
        this.telefono = telefono;
        this.contacto = contacto;
        this.direccion = direccion;
    }
}
let lista = document.getElementById('facturados')

function inicio() {
    document.addEventListener('DOMContentLoaded', listarClientes())
    document.getElementById('add').onclick = agregar;
    document.getElementById('gen').onclick = generar;
}


let actualizacionDeStock = new Array;
let artFacturados = new Array;


function agregar() {

    let form = document.getElementById('formCons');
    let vId = parseInt(document.getElementById('inpId').value);
    let vCant = parseInt(document.getElementById('inpCant').value);
    let nombreArt = '';
    let precioArt = 0;



    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);
        let artActualizado;
        fetch('../consultar.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(datas => {

                for (elem of datas) {


                    if (elem.id == vId) {

                        let nuevoStock = parseInt(JSON.parse(elem.producto).stock) - parseInt(vCant);

                        artActualizado = {

                            id: elem.id,
                            nombre: JSON.parse(elem.producto).nombre,
                            precio: JSON.parse(elem.producto).precio,
                            stock: nuevoStock
                        };

                        nombreArt = JSON.parse(elem.producto).nombre;
                        precioArt = parseInt(JSON.parse(elem.producto).precio);
                        actualizacionDeStock.push(artActualizado);
                        const item = new articulo(vId, nombreArt, vCant, precioArt);
                        artFacturados.push(item);
                        vId = '';

                        let tablaPantalla = document.getElementById("tablaP");
                        let fila = tablaPantalla.insertRow();
                        let celda = fila.insertCell();
                        celda.innerHTML = `${vCant}x ${artActualizado.nombre} $${artActualizado.precio}/Kg, nuevo stock: ${nuevoStock}`;


                    }
                }
            })
    })
}

function generar() {

    let clienteId = document.getElementById('selectClientes').value;
    localStorage.clear();

    let datosCl;
    for(cliente of clientes){
        if(clienteId == cliente.id){
            datosCl = JSON.stringify(cliente);
            alert(datosCl)
        }
    }
    let cobro = document.getElementById('cobro').value
    
    localStorage.setItem('cobro', cobro)
    localStorage.setItem('articulos', JSON.stringify(artFacturados));
    localStorage.setItem('datosCliente', datosCl);

    let form = document.getElementById('formCons');

    let bl = confirm('Se modificará el stock de todos los artículos facturados');
    if (bl) {

        for (elem of actualizacionDeStock) {
            document.getElementById('inpCode').value = JSON.stringify(elem);
            document.getElementById('phpId').value = elem.id;
            let actualizar = new FormData(form);

            fetch('../actualizarStockEnFactura.php', { method: 'POST', body: actualizar })
                .then(res => res.json())
                .then(data => {

                    fetch('../nuevoNFactura.php')
                        .then(res => res.json())
                        .then(data => {
                        })
                })
        }
        location.href = './factura.html'
    }
}
function listarClientes(){
    let select = document.getElementById('selectClientes')

        fetch('../getClientes.php')
            .then(res => res.json())
            .then(data => {
                select.innerHTML = '';
                let options = '';
                for(elem of data){
                    const cliente = new Cliente(elem.id, elem.nombreFant, elem.razonSocial, elem.rut, elem.telefono, elem.contacto, elem.direccion)
                    options += `<option value='${elem.id}'>${elem.nombreFant}</option>`
                    clientes.push(cliente)
                }
                select.innerHTML = options
            })

}