const express = require('express');
const app = express();
const morgan = require('morgan');

// Settings
app.set('port', process.env.PORT || 3005);
app.set("json spaces", 2)

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use(require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});

