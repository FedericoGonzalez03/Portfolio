const {Router} = require("express");
const router = Router();
const {createPool} = require('mysql')

const pool = createPool({
    host: 'pruebas.federicogs.com',
    user: 'fefo',
    password: 'Karen2014',
    database: 'u147693105_distwm',
    connectionLimit: 10
});

router.get('/', (req,res) =>{
    pool.query('SELECT * FROM productos', (err, resp) => {
        res.send(err)
    });
});


module.exports = router;