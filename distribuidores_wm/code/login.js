window.onload = inicio;

function inicio() {
    verificarSesion()
    document.getElementById('btn').onclick = iniciar;
}

function iniciar() {

    let form = document.getElementById('formId');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('../../apis/iniciarSesion.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                alert(data)
                if (data == 'Sesion iniciada') {
                    location.href = '../../index.html';
                }else{
                    location.href = location.href;
                }
            })
    })
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