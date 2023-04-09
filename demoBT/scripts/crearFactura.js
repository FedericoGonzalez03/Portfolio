window.onload = inicio;

function inicio() {
    let cobro = localStorage.getItem('cobro')
    let date = new Date;

    let num = document.getElementById('factn')
    fetch('../getFactN.php').then(res => res.json()).then(data => {

        num.innerHTML = `<span class="cav">${data}</span></br>
        Fecha: <span class="cav">${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}</span></br>
        Hora: <span class="cav">${date.getHours()}:${date.getMinutes()<10? "0" + date.getMinutes() :date.getMinutes()}</span></br>
        ${cobro}`;

    })

    let datosCl = JSON.parse(localStorage.getItem('datosCliente'))
    let nombreCl = document.getElementById('nombreCl')
    nombreCl.innerHTML = datosCl.nombreFant
    let dirCl = document.getElementById('dirCl')
    dirCl.innerHTML = datosCl.direccion
    let rutCl = document.getElementById('rutCl')
    rutCl.innerHTML = datosCl.rut
    let razonCl = document.getElementById('razonCl')
    razonCl.innerHTML = datosCl.razonSocial
    let telCl = document.getElementById('telCl')
    telCl.innerHTML = datosCl.telefono

    let articulos = JSON.parse(localStorage.getItem('articulos'))

    let str = new Array;
    let totalN = 0;
    articulos.map(elems => {
        let pProd = {
            cant: elems.cantidad + 'Kg',
            nombre: elems.nombre,
            precio: '$' + elems.precio + '/kg',
            subtotal: '$' + elems.subtotal
        };

        totalN += elems.subtotal;

        str.push(pProd);

    })

    for(elem of str){
        let tablaPantalla = document.getElementById("tabla");
        let fila = tablaPantalla.insertRow();
        fila.insertCell().innerHTML = elem.cant;
        fila.insertCell().innerHTML = elem.nombre;
        fila.insertCell().innerHTML = elem.precio;
        fila.insertCell().innerHTML = elem.subtotal;
    }

    document.getElementById('total').innerHTML = totalN
}
