class libro {
    //constructor para inicializar propiedades

    constructor(titulo, autor, genero, leido = false) {
        this.titulo = titulo
        this.autor = autor
        this.genero = genero
        this.leido = leido
    }

    //metodo para saludar
    marcarComoLeido() {
        this.leido = true
        console.log("Este libro ha sido leido")
    }

    marcarComoNoLeido() {
        this.leido = false
        console.log("Este libro no ha sido leido")
    }

    informacion() {
        console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Género: ${this.genero}, Leído: ${this.leido ? "si" : "no" }`)
    }
}

const libro1 = new libro("libro", "samuel", "aventura")
const libro2 = new libro("libroo", "angel", "aventuraa")

libro1.informacion()
libro1.marcarComoLeido()
libro1.informacion()
libro1.marcarComoNoLeido()


// parte 2

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre)
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad)

        this.grado = grado
    }

    estudiar() {
        console.log("Soy " + this.nombre + "y estoy estudiando")
    }
}

const estudiante = new Estudiante("Jhon", 21, "Once")
estudiante.saludar()
estudiante.estudiar()


// Escribir una porcion de codigo, donde exista una clase padre que se llame
// figura geometrica (FiguraGeometrica) y que tenga las siguientes clases hijas:
// - Circulo
// - Cuadrado
// - Rectangulo
// Hacer una funci贸n para retornar el area y 
// el perimetro de cada figura.

class FiguraGeometrica {
    area(){
    }
    
    perimetro(){
    }
    
    }
    
    class Circulo extends FiguraGeometrica {
        constructor(radio){
            super();
            this.radio =radio;
        }
    
        area(){
            return 3.1416*this.radio*this.radio;
    
        }
    
        perimetro(){
            return 2*3.1416*this.radio;
        }        
    
    }
    
    class Cuadrado extends FiguraGeometrica{
        constructor(lados){
            super();
            this.lados=lados;
        }
    
        area(){
            return this.lados*this.lados;
    
        }
    
        perimetro(){
            return this.lados*4
        } 
    
    }
    
    class Rectangulo extends FiguraGeometrica{
        constructor(base, altura){
            super();
            this.base= base;
            this.altura=altura;
         }
    
        area(){
            return this.base*this.altura;
    
        }
    
        perimetro(){
            return 2*(this.base+this.altura)
        } 
    }
    
    let circulo = new Circulo(5);
    console.log(circulo.area());      
    console.log(circulo.perimetro()); 
    
    let cuadrado = new Cuadrado(2);
    console.log(cuadrado.area());      
    console.log(cuadrado.perimetro()); 
    
    
    let rectangulo= new Rectangulo(5,4);
    console.log(rectangulo.area());      
    console.log(rectangulo.perimetro()); 