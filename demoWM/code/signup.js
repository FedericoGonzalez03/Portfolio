window.onload = inicio;

function inicio() {
    verificarSesion()
    document.getElementById('button').onclick = registrar;
}

function registrar() {

    let form = document.getElementById('formId');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);
        
        
        fetch('../../apis/encriptar.php', { method: 'POST', body: formulario })
        .then(res => res.json())
        .then(data => {

            document.querySelector('#pass512').value = data;
            let send = {
                razonSocial: document.querySelector('#razonSocial').value,
                rut: document.querySelector('#rut').value,
                tel: document.querySelector('#tel').value,
                direccion: document.querySelector('#dir').value,
                email: document.querySelector('#email').value,
                pass512: document.querySelector('#pass512').value
            }
            emailjs.send('service_4', 'template_vgz0szh', send);
            
                    fetch('../../apis/registrar.php', { method: 'POST', body: formulario })
                        .then(res => res.json())
                        .then(datas => {
                            alert(datas)
                            location.href = './login.html';
                        })
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