const express = require('express');
const axios = require('axios');
const helpers = require('./helpers.js');

const app = express()

app.post('/rtb', function(req, res) {
    const getRandomInt = helpers.getRandomInt
    const obj = { ad: 'Реклама', price: (getRandomInt(10, 101)) }
    const int = getRandomInt(0, 2)
    if(int == 1){
        res.send(obj)
    } else {
        res.send({})
    }
})

app.listen(3001)