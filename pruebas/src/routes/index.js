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
        console.log(resp);
        res.send(err)
        alert(err)
    });
});


module.exports = router;