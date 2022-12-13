window.onload = function() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
        const res = await fetch('pruebas.federicogs.com/api')
        const data = await res.json();
        console.log(data);
    });
};