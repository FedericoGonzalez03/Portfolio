const {Router} = require("express");
const router = Router();
const {createPool} = require('mysql')

const pool = createPool({
    host: 'pruebas.federicogs.com',
    user: 'u147693105_wm',
    password: 'DistWM2020',
    database: 'u147693105_distwm',
    connectionLimit: 10
});

router.get('/', (req,res) =>{
    pool.query('SELECT * FROM productos', (err, res) => {
        console.log(res);
        res.send(err)
    });
    res.send('Hello World');
});


module.exports = router;