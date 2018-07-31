const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const env = process.env.NODE_ENV =  process.env.NODE_ENV || 'development';

const config = require("./config")[env];

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true,
}));


require('./routes/routes')(app, config);
require('./mongo/db')(config);


app.use('*', (req, res) => {
    res.send({
        message: 'Welcome To Fujitora core'
    });
});

app.listen(config.port);

module.exports = app;
