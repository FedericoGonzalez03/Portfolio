window.onload = inicio;

async function inicio() {

    let form = document.getElementById('formId');

    await form.addEventListener('submit', function (e) {
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
    })

}