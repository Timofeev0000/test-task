const express = require('express');
const axios = require('axios');
const helpers = require('./helpers.js');

const app = express();

app.get('/ssp', async function(req, res) {
    const getRandomInt = helpers.getRandomInt
    const num = getRandomInt(3, 9)
    console.log('Выпало число: ' + num);
    let responses = [];
    for (let i = 0; i <= num; i++) {
        console.log('Количество запросов: ' + i);
        let response = await axios.post('http://localhost:3001/rtb');
        const result = response.data;
        responses.push(result);
    }
    responses = responses.filter(element => element.price);
    responses.sort(function (a, b) {
        if (a.price > b.price) {
            return -1;
        }
        if (a.price < b.price) {
            return 1;
        }
        // a должно быть равным b
        return 0;
    });
    res.send(responses[0])
})


app.listen(3000)