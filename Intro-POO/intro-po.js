/*
*Paradigmas de programación
*  programación impertativa: se basa en instrucciones detalaldas ejecutando un flujo o una secuencia determinada.

*  programación basada en eventos: Se basa en la gestión y respuesta de eventos.


*  programación declarativa: Explica lo que queremos obtener.


*  programación orientada a objetos: Nos ayuda a resolver problemas. Toma cierta información o estructura del mundo real (objetos) para poder explicar ciertas cosas, como sus características (propiedades o atributos) y sus comportamientos o acciones (métodos).

ejemplo: Perrito.
Atributos: Color de pelaje, número de patas, tamaño.
Métodos: Correr, olfatear, saltar.
*/

// ^ Clases: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crear instancias de este tipo de objetos.

class persona{
    nombre = "";
    apellido = "";
    edad= 0;
    email = "";
    telefono = "";

//* Objetos
//*El constructor es una función especial, cuya finalidad es la de construir o instanciar objetos.
//* para inicializar un objeto es necesario definir un constructo que tome los atributos
//* clases = molde    /   Objeto=gomita  /  constructor=chef  /  atributos= ingredientes   / método=c comportamientos.

constructor (nombre, apellido, edad, email, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
    this.telefono = telefono;
}

    comer(){
        console.log("Bon apetit");
    }//*método comer

    bailar (){
        console.log("A bailar");
    }//*método bailar

    trabajar (){
        console.log("A trabajar");
    }//*método trabajar

    jugar (){
        console.log("A divertirse como niños");
    }//*método jugar

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);
    }

}

let usuario1 = new persona ("Montserrat", "Galván", "23", "montserratmgvan@gmail.com", "7423829396");

let usuario2 = new persona ("Abigail", "Piña", "26", "abii.pina@gmail.com", "7290847364");

let usuario3 = new persona ("Lorena", "Galván", "33", "lorena@gmail.com", "7227353663");

let usuario4 = new persona ("Xavier", "Talavera", "23", "axis@gmail.com", "7983645759");


let usuario5 = new persona ("Gabriela", "Castañeda", "27", "gabyy@gmail.com", "7346387484");

let usuario6 = new persona ("Sofía", "Galván", "51", "sofi@gmail.com", "7268883647");

console.log(usuario1); //* imprimir objeto completo.

console.log(usuario4.email); //* imprimier un atributo en específico.

console.log(usuario1.email, usuario2.email, usuario3.email, usuario4.email, usuario5.email, usuario6.email);

usuario4.comer(); //* invocando el método
usuario2.bailar();

usuario5.mostrarInfo(); //* 

console.log(usuario3.telefono, usuario6.apellido);


//^ Pilares de la programación orientada a objetos

/*
^ Herencia
^ Polimorfismo
^ Encapsulamiento
^ Abstracción
*/

//^ HERENCIA: nos permite heredar a clases inferiores para poder optimizar al programa.

class arrendador{  //*subclase
    capacidad = 0;
    nombreLugar= "";
    costo= 0;

    constructor (nombre, apellido, edad, email, telefono, capacidad, costo, nombreLugar) {
        // super(nombre, apellido, edad, email, telefono);
        this.capacidad = capacidad;
        this.nombreLugar = nombreLugar;
        this.costo = costo;
    }


    mostrarInfo(){
        console.log("Capacidad", this.capacidad);
        console.log("Nombre del Lugar", this.nombreLugar);
        console.log("Costo", this.costo);
    }
}

let arrendador1 = new arrendador("Rocio", "Hernandez",29, "rociohdz@gmail.com", "2736392273",100, 50000, "Salón G");


console.log(arrendador1);
console.log(arrendador1.costo);
arrendador1.mostrarInfo();



/*
* class arrendadorGuadalajara extends arrendador{
    ^ subclase nieto
} */



class Animal {
    sonido() {
      console.log('Hace un sonido genérico');
    }
  }
  
  class Perro extends Animal {
    sonido() {
      console.log('Guau guau');
    }
  }
class Gato extends Animal {
    sonido() {
    console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido();  
gato.sonido();



//^ POLIMORFISMO: permite que objetos de diferentes clases respondan a la misma clase u objeto. Tener objetos de diferentes tipos que pueden ser manipulados en común.
// ^ NOTA: la posibilidad de realizar cambios en distintos objetos que comparten atributos en comun.
/* ====Polimorfismo====
Proviene de Poli = muchas, morfismo = formas. Se utiliza para crear métodos con el mismo nombre pero con diferente comportamiento. */

class producto {
    marca = "";
    precio = 0;

    constructor(marca, precio){
    this.marca = marca;
    this.precio = precio;
    }


    mostrarDescripcion(){
        console.log("Marca ");
        console.log("Precio ");

    }
}

let producto1 = new producto("cerave", 85);

/*
Ejemplo de Polimorfismo:

class Animal {
    sonido() {
        console.log('Hace un sonido genérico');
    }
}

class Perro extends Animal {
    sonido() {
        console.log('Guau guau');
    }
}

class Gato extends Animal {
    sonido() {
        console.log('Miau');
    }
}

const perro = new Perro();
const gato = new Gato();

perro.sonido(); //el mismo método sonido(), para perro muestra "guau guau"
gato.sonido(); //el mismo método sonido(), para gato muestra "miau"
*/

// ! ENCAPSULAMIENTO: ocultar la implementacion de un objeto y solo mostrar lso datos necesarios.

class Usuario{
    #contraseña;

    constructor(userName, correo, contraseña){
        this.userName = userName;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    verificarContraseña(contraseña){
        return this.#contraseña === contraseña;
    }
}

//? ABSTRACCIÓN: no es nada más que traer objetos del mundo real y poder aplicarlos a la programación mediante clases, métodos, constructores y objetos.

//? Los objetos de tipos JSON en un formato de intercambio de datos ligero, accesible, estructurado, manipulable (DOM) y que nos brindan una mejor comunicación entre el cliente y el servidor. Esto es gracias a que son más flexibles y generalmente se ejecutan con fetch.


let objetoJson = {
    "nombre": "Juanin",
    "apellido": "Juan Harry",
    "edad": 31,
    "email": "juanin@gnail.com",
    "telefono": "5574980693",
}

console.log(objetoJson);

let objetoLiteral = {
    nombre: "Juanin",
    apellido: "Juan Harry",
    edad: 31,
    email: "juanin@gnail.com",
    telefono: "5574980693",
}

console.log(objetoLiteral);

/* 
*Principios solid (principio de responsabilidad única)
* ---- 1. Principio de responsabilidad única (SINGLE RESPONSABILITY PRINCIPLE) : una clase de tener asignada una tarea o responsabilidad específica y esta no debería de cambiar.
* -----2. Principio abierto/cerrado (OPEN/CLOSED PRINCIPLE OCP): una clase puede estar abierta a extensiones y agregar nuevas funcionalidades, pero sin generar cambios en la misma.

*---3. Principio de sustitucion de Liskov (LISKOV SUSTITUTION PRINCIPLE LSP): Una clase hijo puede sustituir objetos de una clase padre.

*---4. Pincipio de segrregación de interfaces (INTERFACE SEGREGATION PRINCIPLE ISP):  delimitar los métodos que necesito y dejar fuera los innecesarios.

*---5. Pincipio de inversión de dependencias (DEPENDENCY INVERSION PRINCIPLE DIP): explicarlo
*/

/**
 * Programa que conste de una clase llamada alumno que tenga como atributos nombre y calificacion. Definir los metodos para incializar sus atributos (constructor), imprimirlos y mostrar un mensaje con el resultado de si la calificacion es aprobatoria o no.
 * Atributos:
 * nombre
 * calificacion
 * 
 * Metodos 
 * imprimirCalificacion
 * evaluacion
 * 
 * la calificacion aprobatoria es de 6
 * if para evaluar la calificacion
 */

class Alumno {
    nombre = "";
    calificacion = 0;

    constructor(nombre, calificacion){
        this.nombre = nombre;
        this.calificacion = calificacion;
    }

    imprimirCalificacion(){
    console.log(`Tu calificacion es ${this.calificacion}`);
    }
    
    evaluacion(){
        if(this.calificacion >= 6){
            console.log(`Aprobaste ${this.nombre}`);
        } else{
            console.log(`Reprobaste ${this.nombre}`);
        }
    }
}

let Alumno1 = new Alumno ("Rene", 9);
let Alumno2 = new Alumno ("Abi", 4);
let Alumno3 = new Alumno ("Karen", 10);
let Alumno4 = new Alumno ("Baruch", 10);
let Alumno5 = new Alumno ("Eunice", 2);
let Alumno6 = new Alumno ("Oswaldo", 20);
let Alumno7 = new Alumno ("Montse", 8);
let Alumno8 = new Alumno ("Emiliano", 7);
let Alumno9 = new Alumno ("David", 1);

console.log(Alumno1, Alumno2, Alumno3, Alumno4, Alumno5, Alumno6, Alumno7, Alumno8, Alumno9);
Alumno1.evaluacion();
Alumno1.imprimirCalificacion();
Alumno2.evaluacion();
Alumno2.imprimirCalificacion();