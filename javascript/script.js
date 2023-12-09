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

let nombre = "Daniel";
let invitadosExtras = 2;
let esMayorEdad= true;
let edad = 24;
let invitadoEspecial = null;
let horaDeSalida =undefined;


