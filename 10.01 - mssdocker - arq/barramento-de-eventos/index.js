const express = require('express');
const bodyParser = require('body-parser');
//para enviar eventos para os demais microsserviços
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const eventos = [];

app.post('/eventos', (req, res) => {
    const evento = req.body;
    eventos.push(evento);

    //envia o evento para o microsserviço de lembretes
    axios.post('http://10.33.109.133:4000/eventos', evento)
    .catch((err) => {console.log("Serviço de lembretes fora do ar.")});

    //envia o evento para o microsserviço de observações
    axios.post('http://10.33.109.133:5000/eventos', evento)
    .catch((err) => {console.log("Serviço de observações fora do ar.")});

    //envia o evento para o microsserviço de consulta 
    axios.post('http://10.33.109.133:6000/eventos', evento)
    .catch((err) => {console.log("Serviço de consulta fora do ar.")});

    //envia o evento para o microsserviço de classificacao
    axios.post('http://10.33.109.133:7000/eventos', evento)
    .catch((err) => {console.log("Serviço de classificação fora do ar.")});

    res.status(200).send({ msg: "ok"});
});

app.get('/eventos', (req, res) => {
    res.send(eventos);
});

app.listen(10000, () => {
    console.log('Barramento de eventos. Porta 10000');
});