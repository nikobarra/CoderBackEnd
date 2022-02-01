class Usuario {
    constructor(nombre, apellido, libros=[], mascotas=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros= libros;
        this.mascotas = mascotas;
    }
    getFullName(){ 
    console.log(`Usuario: ${this.nombre} ${this.apellido}`);

    }

    addMascotas(mascota){
        this.mascotas.push(mascota);
    }

    countMascotas(){
        console.log(`El usuario tiene: ${this.mascotas.length} mascotas`)
    }
    addBook (nombre, autor){
        let libro = new Object();
            libro.nombre=nombre;
            libro.autor=autor;

        this.libros.push(libro)
    }

    getBookNames(){
        let book = []
        for (const i in this.libros){
            book.push(this.libros[i].nombre)
        }
        console.log(book)
    }
}

let usuario1 = new Usuario("Nicolas", "Barra")
usuario1.getFullName();
usuario1.addMascotas("Perro");
usuario1.addMascotas("Gato");
usuario1.addMascotas("Buho");
usuario1.countMascotas();
usuario1.addBook("La divina comedia","Dante Alighieri")
usuario1.addBook("Harry Potter y el prisionero...","JK Rowling")
usuario1.getBookNames();

let usuario2 = new Usuario("Matias", "Pelecano")
usuario2.getFullName();
usuario2.addMascotas("Tortuga");
usuario2.addMascotas("Zorro");
usuario2.countMascotas();
usuario2.addBook("Elige tu propia aventura","Autores Varios")
usuario2.addBook("La odisea","Pirulito")
usuario2.getBookNames();
