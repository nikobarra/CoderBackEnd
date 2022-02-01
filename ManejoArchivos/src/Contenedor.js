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
   
    save = async (product) => {
        if (!product.title || !product.price) return {status:"error", error:"missing fields"}
        try {
            if(fs.existsSync(pathToProduct)){
                let data = await fs.promises.readFile(pathToProduct,'utf8')
                let products = JSON.parse(data);
                let id = products[products.length-1].id+1
                product.id = id;
                products.push(product);
                await fs.promises.writeFile(pathToProduct, JSON.stringify(products, null, 2))
                return {status:"success", message:"Id asignado: "+product.id }

            }else{
                product.id = 1
                await fs.promises.writeFile(pathToProduct, JSON.stringify([product],null,2))//creo el producto dentro de un array
                return {status:"success", message:"Id asignado: "+product.id}
            }

        } catch (error) {
            return {status:"error", error:"error"}
        }
    }

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
        }
        

    }

    deleteById= async (id) =>{
        if(!id) return {status:"error", error:"Id Needed to be provided"}
        if(fs.existsSync(pathToProduct)){
            let data = await fs.promises.readFile(pathToProduct,'utf8')
            let products = JSON.parse(data);
            let delProdId = products.filter(product => product.id !==id)
            await fs.promises.writeFile(pathToProduct, JSON.stringify(delProdId,null, 2))
            return {status:"success", message:"Product deleted"}
    }}

    deleteAll= async() =>{
        fs.unlink (pathToProduct, error=> {
            if (error) {
                console.log("File not found");
            }
            else{console.log("File deleted succesfully"); }
        })
    }

    
    updateProduct = async (id, prodReplace)=>{
        if(!id) return {status:"error", error:"Id Needed to be provided"}
        if(fs.existsSync(pathToProduct)){
            let data = await fs.promises.readFile(pathToProduct,'utf8')
            let products = JSON.parse(data);
            let updProd = products.map((product) => {
                if (product.id === id){
                    prodReplace.id = id //para que no se pierda el id ya que en prodReplace no viene el id asignado
                    return prodReplace;
                }
                else {
                    return product
                }
            })
            await fs.promises.writeFile(pathToProduct, JSON.stringify(updProd, null, 2))
            return {status:"success", message:"Product Updated"}
    }}
}

module.exports = Contenedor; //exportamos la clase para poder usarla en el index.js