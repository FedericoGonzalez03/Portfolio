window.onload = inicio;

function inicio() {
    document.getElementById('btn').onclick = agregar;
}

function agregar() {

    let form = document.getElementById('formId');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('api.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == "true") {

                } else {
                    console.log(data);
                }
            })
            window.location = 'index.html'
    })


}