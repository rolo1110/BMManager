'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/hola/:name', (req, res) => {
    res.send({'message':'Hola ' + req.params.name});
})

app.listen(port, () => {
    console.log('Api levantada en localhost:' + port);
})