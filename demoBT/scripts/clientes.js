window.onload = inicio;

function inicio() {
    document.getElementById('sub').onclick = agregarCliente;
}

function agregarCliente() {

    let form = document.getElementById('formId');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('../crearCliente.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == "true") {
                    form.reset();
                } else {
                    console.log(data);
                }
            })

        location.href = location.href;
    })


}
