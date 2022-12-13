window.onload = function() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', async () => {
        const res = await fetch('/api')
        const data = await res.json();
        console.log(data);
    });
};