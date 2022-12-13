const {Router} = require("express");
const router = Router();
const {createPool} = require('mysql')

const pool = createPool({
    host: '45.132.157.1',
    user: 'u147693105_wm',
    password: 'distWM2022',
    database: 'u147693105_distwm',
    connectionLimit: 10
});

router.get('/', (req,res) =>{
    let html = "";
    pool.query('SELECT * FROM productos limit 99,10', (err, resp) => {
        resp.map((item) => {
            html += ` <div>
            <h1>${item.nombre}</h1>
            <h2> ${item.precio}</h2>
            <h2> ${item.id}</h2>
            <h3> ${item.descripcion}</h3>
            <h4> ${item.categoria}</h4>
            <img src='${item.imagen}' />
            </div>`
        })
        res.send(err)
    })
});


module.exports = router;