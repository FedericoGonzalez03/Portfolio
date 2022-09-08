window.onload = inicio;

function inicio() {

    let form = document.getElementById('formId');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let formulario = new FormData(form);

        fetch('api.php', { method: 'POST', body: formulario })
            .then(res => res.json())
            .then(data => {
                if (data == "true") {
                    window.location = 'index.html'
                } else {
                    console.log(data);
                    window.location = 'index.html'
                }
            })
            window.location = 'index.html'
    })

}