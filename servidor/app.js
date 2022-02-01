const { request, response } = require('express');
const express = require ('express');
const Contenedor = require('./Contenedor.js')
const prodContent = new Contenedor();// nueva instancia del contenedor

const app = express();
const server = app.listen(8080, ()=> {
    console.log ("listen port 8080");
})

app.get('/', (request, response)=> {
    response.send('<a href =/productos> Productos </a><a href =/producto> Producto </a>')
})

app.get ('/productos',(request,response)=>{
    prodContent.getAll().then(result => response.send(result))
})
