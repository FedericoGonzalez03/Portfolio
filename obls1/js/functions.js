/*  Federico González Salomón 288123
    Maximiliano Botto Devicenzi 277791   */

const sistema = new Sistema;
window.onload = inicio;
function inicio() {
    document.getElementById('btnAgregarEmpl').onclick = agregarEmpleado;
    document.getElementById('btnAgregarRubro').onclick = agregarRubro;
    document.getElementById('btnAgregarOferta').onclick = agregarOferta;
    document.getElementById('btnEliminarOferta').onclick = eliminarOferta;
    document.getElementById('consulta').onclick = consultar;
}

function actualizarSelectEmpl() {
    let selectEmpl = document.getElementById('selectEmpl');
    selectEmpl.innerHTML = '';
    let options = '';
    for (elem of sistema.Empleados) {
        options += `<option value="${elem.nombre}">${elem.nombre} CI: ${elem.cedula}</option>`
    }
    selectEmpl.innerHTML = options;
}

function actualizarSelectRubroDatos() {
    let selectRubroDatos = document.getElementById('selectRubroDatos');
    selectRubroDatos.innerHTML = '';
    let options = '';
    for (elem of sistema.Rubro) {
        options += `<option value="${elem.nombre}">${elem.nombre}. ${elem.descripcion}</option>`
    }
    selectRubroDatos.innerHTML = options;
}
function actualizarSelectRubroCons() {
    let selectRubroCons = document.getElementById('selectRubroCons');
    selectRubroCons.innerHTML = '';
    let options = '';
    for (elem of sistema.Rubro) {
        options += `<option value="${elem.nombre}">${elem.nombre}</option>`
    }
    selectRubroCons.innerHTML = options;
}

function actualizarSelectOferta() {
    let selectOferta = document.getElementById('selectOferta');
    selectOferta.innerHTML = '';
    let options = '';
    if (sistema.Oferta[0] == undefined) {
        selectOferta.innerHTML = "<option>Sin datos</option>"
    } else {
        let options = '';
        for (elem of sistema.Oferta) {
            options += `<option value='["${elem.rubro}","${elem.detalle}","${elem.empleado}"]'>${elem.rubro} - ${elem.detalle} $${elem.precio} - ${elem.empleado}</option>`
        }
        selectOferta.innerHTML = options;
    }
}

function agregarEmpleado() {

    let nombre = document.getElementById('nombreEmpleado').value;
    let cedula = document.getElementById('cedula').value;
    let departamento = document.getElementById('departamento').value;
    let edad = document.getElementById('edad').value;
    const empleado = new Empleado(nombre, cedula, departamento, edad)

    sistema.Empleados.push(empleado)

    for (elem of sistema.Empleados) {

        if (elem.cedula == cedula && elem != empleado) {
            alert('Ya existe un empleado registrado con esa cedula')
            sistema.Empleados.pop()
        }
    }

    actualizarSelectEmpl();
    tablaEmpleados();

    document.getElementById('nombreEmpleado').value = '';
    document.getElementById('cedula').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('departamento').value = 'Artigas';
}

function agregarRubro() {

    let nombre = document.getElementById('nombreRubro').value;
    let descripcion = document.getElementById('descripcion').value;
    const rubro = new Rubro(nombre, descripcion, departamento)
    sistema.Rubro.push(rubro);

    for (elem of sistema.Rubro) {

        if (elem.nombre == nombre && elem != rubro) {
            alert('Ya existe ese rubro')
            sistema.Rubro.pop()
        }
    }

    actualizarSelectRubroDatos()
    actualizarSelectRubroCons()
    rubrosMasCantDeOfertas();
    rubrosSinOfertas();

    document.getElementById('nombreRubro').value = '';
    document.getElementById('descripcion').value = '';
}

function agregarOferta() {
    let departamento;
    let empleado = document.getElementById('selectEmpl').value;
    for (elem of sistema.Empleados) {
        if (empleado == elem.nombre) {
            departamento = elem.departamento
        }
    }
    let rubro = document.getElementById('selectRubroDatos').value;
    let detalle = document.getElementById('detalle').value;
    let precio = document.getElementById('precio').value;
    const oferta = new Oferta(detalle, precio, empleado, rubro, departamento)

    sistema.Oferta.push(oferta)

    for (elem of sistema.Oferta) {

        if (elem.empleado == empleado && elem.rubro == rubro && elem.detalle == detalle && elem != oferta) {
            alert('Ya existe esa oferta para el empleado y rubro seleccionados')
            sistema.Oferta.pop()
        }
    }

    actualizarSelectOferta();
    rubrosMasCantDeOfertas();
    rubrosSinOfertas();
    tablaEmpleados();

    detalle = document.getElementById('detalle').value = '';
    precio = document.getElementById('precio').value = '';
}

function eliminarOferta() {
    let datosOferta = JSON.parse(document.getElementById('selectOferta').value);

    for (index in sistema.Oferta) {

        if (sistema.Oferta[index].empleado == datosOferta[2] && sistema.Oferta[index].rubro == datosOferta[0] && sistema.Oferta[index].detalle == datosOferta[1]) {
            sistema.Oferta.splice(index, 1)
        }
    }

    actualizarSelectOferta();
    rubrosMasCantDeOfertas();
    rubrosSinOfertas();
    tablaEmpleados();
}

function consultar() {

    document.getElementById('tablaOfertas').innerHTML = '';

    let captionOfertas = document.getElementById('captionOfertas')
    let precioCreciente = document.getElementById('precioCre').checked;
    let rubro = document.getElementById('selectRubroCons').value;
    let ofertasDeUnRubro = [];
    for (elem of sistema.Oferta) {
        if (elem.rubro == rubro) {
            ofertasDeUnRubro.push(elem);
        }
    }
    if (precioCreciente) {
        ofertasDeUnRubro.sort(function (a, b) {
            if (parseInt(a.precio) > parseInt(b.precio)) {
                return 1;
            }
            if (parseInt(a.precio) < parseInt(b.precio)) {
                return -1;
            }
            return 0;
        })
    } else {
        ofertasDeUnRubro.sort(function (a, b) {
            return a.departamento.localeCompare(b.departamento)
        })
    }

    precios = [];
    for (elem of ofertasDeUnRubro) {
        precios.push(parseInt(elem.precio));
    }
    let max = Math.max(...precios);
    let min = Math.min(...precios);
    let rangoDePrecio = max - min;

    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    let promedio = Math.round(total / (precios.length));
    captionOfertas.innerHTML = `Rubro: ${rubro} Promedio: ${promedio}`

    for (index in ofertasDeUnRubro) {
        let tipo;

        if (rangoDePrecio == 0) {
            tipo = '-'
        } else if (ofertasDeUnRubro[index].precio - min > rangoDePrecio * 0.75) {
            tipo = '$$$$'
        } else if (ofertasDeUnRubro[index].precio - min <= rangoDePrecio * 0.75 && ofertasDeUnRubro[index].precio - min > rangoDePrecio * 0.5) {
            tipo = '$$$'
        } else if (ofertasDeUnRubro[index].precio - min <= rangoDePrecio * 0.5 && ofertasDeUnRubro[index].precio - min > rangoDePrecio * 0.25) {
            tipo = '$$'
        } else if (ofertasDeUnRubro[index].precio - min <= rangoDePrecio * 0.25) {
            tipo = '$'
        }

        let celda = document.getElementById('tablaOfertas').insertRow()
        celda.innerHTML = `<td>${ofertasDeUnRubro[index].empleado}</td>
        <td>${ofertasDeUnRubro[index].departamento}</td>
        <td>${ofertasDeUnRubro[index].detalle}</td>
        <td>${ofertasDeUnRubro[index].precio}</td>
        <td>${tipo}</td>`
    }
}

function rubrosMasCantDeOfertas() {

    let masVeces = 0;
    let masRepetido = '';

    for (rub of sistema.Rubro) {
        let repeticiones = 0;
        for (oferta of sistema.Oferta) {
            if (oferta.rubro == rub.nombre) {
                repeticiones++
            }
        }
        if (repeticiones > masVeces) {
            masVeces = repeticiones;
            masRepetido = `<li> ${rub.nombre} </li>`
        } else if (repeticiones = masVeces && repeticiones != 0) {
            masVeces = repeticiones;
            masRepetido = masRepetido + `<li> ${rub.nombre} </li>`
        }

    }
    if (masVeces > 0) {
        document.getElementById('rubroConMax').innerHTML = masRepetido = masRepetido
    } else {
        document.getElementById('rubroConMax').innerHTML = '<li>Sin Datos</li>'
    }

}

function rubrosSinOfertas() {

    let noEstan = '';

    for (rub of sistema.Rubro) {
        let esta = false;
        for (oferta of sistema.Oferta) {
            if (oferta.rubro == rub.nombre) {
                esta = true
            }
        }
        if (!esta) {
            noEstan = noEstan + `<li> ${rub.nombre} </li>`
        }

    }
    if (noEstan != '') {
        document.getElementById('rubroSin').innerHTML = noEstan
    } else {
        document.getElementById('rubroSin').innerHTML = 'Sin Datos'
    }
}

function tablaEmpleados() {

    let tabla = document.getElementById('tablaEmpl')

    tabla.innerHTML = ''


    let empleadosOrdenados = sistema.Empleados.sort(function (a, b) {
        return a.nombre.localeCompare(b.nombre)
    })
    for (empl of empleadosOrdenados) {
        let cant = 0;

        for (ofertas of sistema.Oferta) {
            if (ofertas.empleado = empl.nombre) {
                cant++
            }
        }

        let celda = tabla.insertRow()
        celda.innerHTML = `<td>${empl.nombre}</td>
        <td>${empl.cedula}</td>
        <td>${empl.departamento}</td>
        <td>${empl.edad}</td>
        <td>${cant}</td>`
    }
}