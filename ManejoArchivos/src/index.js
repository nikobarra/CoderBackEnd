const Contenedor = require('./Contenedor.js') 

const prodContent = new Contenedor();// nueva instancia del contenedor

let product={
    title:"Alfajor Blanco",
    price: 21.8,
    thumbnail:"foto",
}

//prodContent.save(product).then(result =>console.log(result)) //descomentar para crear producto
// prodContent.getAll().then(result =>console.log(result)) // descomentar para obtener todos
// prodContent.getById(2).then(result =>console.log(result)) // descomentar para buscar por ID



//actualizar no se pidio en el desafio pero lo adjunto para tener la documentacion del crud completa

//prodContent.updateProduct(4, product).then(result =>console.log(result)) // descomentar para modificar producto
//prodContent.deleteById(2).then(result =>console.log(result)) // descomentar para eliminar producto

//prodContent.deleteAll().then() // descomentar para borrar archivo