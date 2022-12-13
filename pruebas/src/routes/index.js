const {Router} = require("express");
const router = Router();
const {createPool} = require('mysql')

const pool = createPool({
    host: 'pruebas.federicogs.com',
    user: 'u147693105_wm',
    password: 'distWM2022',
    database: 'u147693105_distwm',
    connectionLimit: 10
});

router.get('/', (req,res) =>{
    pool.query('SELECT * FROM productos', (err, resp) => {
        console.log(resp);
        res.send(err)
    });
});


module.exports = router;