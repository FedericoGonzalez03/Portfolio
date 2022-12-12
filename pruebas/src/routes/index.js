const {Router} = require("express");
const router = Router();
const {createPool} = require('mysql')

const pool = createPool({
    host: 'localhost',
    user: 'u147693105_wm',
    password: 'DistWM2020',
    database: 'u147693105_distwm',
    connectionLimit: 10
});

router.get('/', (req,res) =>{
    pool.query('SELECT * FROM users', (err, res) => {
        if(err) throw err;
        console.log(res);
    });
    res.send('Hello World');
});


module.exports = router;