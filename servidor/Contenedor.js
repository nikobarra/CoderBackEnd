const fs = require('fs');
/* en lugar de usar un txt use un json para el fin es lo mismo con otro formato */
/* 
schema
    Product={
        title:string, (required)
        price: float, (requiered)
        thumbnail:string,
        id:int, (requiered) (unique)
    
    }
*/

const pathToProduct ='./files/products.json'
class Contenedor {
   
    getById = async (id)=> {
        if(!id) return {status:"error", error:"Id Needed to be provided"}
        if(fs.existsSync(pathToProduct)){
            let data = await fs.promises.readFile(pathToProduct,'utf8')
            let products = JSON.parse(data);
            let product = products.find(prod => prod.id==id)
            if (product) return {status:"success", payload:product}
            else return {status:"error", error:"Null - Product not found"}
        
    }}

    getAll = async() =>{
        if(fs.existsSync(pathToProduct)){
            let data = await fs.promises.readFile(pathToProduct,'utf8')
            let products = JSON.parse(data);
            return {status:"success",payload:products}
        }}

    
}

module.exports = Contenedor; //exportamos la clase para poder usarla en el index.js