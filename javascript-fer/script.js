//comentarios en una sola línea
/*comentarios
multilineal*/


//alert ("hola mundo");

//console.log("este es un mensaje para mi consola")

/* var nombre = prompt("ingresa tu nombre");
alert("Hola, " + nombre + " Bienvenido a la CH35");*/

/*var numero1 = parseInt(prompt ("Ingresa el primer numero:"));
var numero2 = parseInt(prompt ("Ingresa el segundo numero:"));

console.log("suma:" + (numero1 + numero2));
console.log("resta:" + (numero1 - numero2));
console.log("multiplicación:" + (numero1 * numero2));
console.log("división:" + (numero1 / numero2));
*/
//práctica 1
/* var edad = prompt ("Bienvenido, ingrese su edad con números");
edad = parseInt(edad);
if (edad < 18 ) {
alert ("Eres menor de edad");
}else if (edad >= 18)
alert ("Eres mayor de edad"); 

otra forma

  var edad = (prompt("Por favor, ingresa tu edad en dígitos numéricos:"));

if (isNaN(edad)) {
    alert("Andas mal, hijx. Tenías que poner dígitos numéricos.");
    var edad = prompt("A ver, inténtalo de nuevo. Pon tu edad en números, por favor:");
} 

    if (isNaN(edad)) {
        alert("¿Estamos jugando? Ahora no te diré si eres o no mayor de edad.");
    } 
    else {
        var edad1 = parseInt(edad); //al agregar un valor en parseInt(edad, 2) puedes elegir el sistema de numeración de tu preferencia.

        if (!isNaN(edad1)) {
            if (edad1 < 18) {
                alert("Eres menor de edad.");
            } else {
                alert("Eres mayor de edad.");
            }        
        }
    }
*/




//clase 8-12-2023
//TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

//https://www.freecodecamp.org/espanol/news/var-let-y-const-cual-es-la-diferencia/

/*Todas nuestras variables deben ser declaradas con nombres específicos y claros, sin espacios, no deben iniciar con numeros*/

//ejercicio 11-12-2023
/*let nombre = "Daniel ";
let invitadosExtras = 2;
let esMayorEdad= true;
let edad = 24;
let invitadoEspecial = null;
let horaDeSalida =undefined;

//console.log (nombre);

document.write(nombre);

/*Encasillamiento o tipado
nos es útil para el mantenimiento del código ya que lo hace más legible y fácil de entender.
ayuda en la prevención de errores para reducir la probabilidad de los mismos.
mejora el rendimiento de nuestro programa.
*/

/*let numero = 15;
let texto = "hola"; 
//con encasillamiento

let numeroEncasillado= Number =15;
let textEncasillado= String ="hola";*/

//typeof palabra reservada para saber que tipo de dato tenemos

/*console.log(typeof(nombre));

conversion de string a number
let funcionNumber = console.log(typeof Number (nombre));
metodoParseInt = console.log(typeof parseInt(nombre));
metodoParseFloat= console.log (typeof parseFloat (nombre));

parse Int y parseFloat son funciones que se utilizan para convertir cadenas de texto en números, ambos nos ayudan en este cambio.*/

/*ejemplo
var numero1 = "4";
var numero2 = "5";

console.log("Tipo de variable numero1: "+typeof(numero1));

typeof solo devuelve el tipo de variable que estas utilizando

console.log("Tipo de variable luego de aplicar un Number: "+typeof(Number(numero1)));
console.log("Tipo de variable luego de aplicar un parseInt: "+typeof(parseInt(numero1)));

Number: tranforma tu variable a una variable numerica
parseInt: tranforma tu variable a un tipo de variable entera
en el ejmplo lo utilizamod para sumas dos variables tipo string

console.log(numero1+numero2);
console.log(parseInt(numero1)+parseInt(numero2));
console.log(Number(numero1)+Number(numero2));*/

//conversion de number a string
//console.log(typeof String(edad));


//metodo toString number a string
// console.log(typeof edad.toString());


//convertir un boolean a numero
//let numero = Number (esMayorEdad);
//console.log(typeof (numero));


/*let texto = String(esMayorEdad);

console.log (typeof(texto));
console.log(typeof esMayorEdad.toString());
*/


/*let negación = !esMayorEdad;
console.log (negación);*/

//concatenar es unir strings o cadenas de texto con el signo de +

/*let saludo ="hola mundo ";
let frase = "el futuro es hoy";

texto=saludo + frase;*/

// se puede de esta forma---- document.write(texto);

// o de esta forma ---  console.log(texto);





