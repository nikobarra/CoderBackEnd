const { request, response } = require('express');
const express = require ('express');

const app = express();
const server = app.listen(8080, ()=> {
    console.log ("listen port 8080");
})

app.get('/', (request, response)=> {
    response.send('Hola')
})

app.get('/productos', (request, response)=>{
    
})