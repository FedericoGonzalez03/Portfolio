window.onload = inicio;

function inicio() {
    verificarSesion()
    document.getElementById('button').onclick = registrar;
}

function registrar() {

    let form = document.getElementById('formId');
    let formulario = new FormData(form);

    fetch('../../apis/registrar.php', { method: 'POST', body: formulario })

}


function verificarSesion() {

    fetch('../../apis/verifSesion.php')
        .then(res => res.json())
        .then(data => {
            if (data == 'true') {
                alert('Ya hay una sesion iniciada')
                location.href = '../../index.html'
            }
        })
}