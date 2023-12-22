// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 *Elabora un programa que determine si una persona tiene edad
suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */
    console.log("Ejercicio 1:");
    let edad = 23
    if (edad >= 18) {
    console.log("Tienes la mayoria de edad para votar");
    } else if (edad <18) {
    console.log("No tienes la mayoria de edad para votar");
    }

/** Ejercicio 2
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */
console.log("Ejercicio 2:");
let num = 224;
if (num % 7 == 0 && num % 8 == 0){
    console.log(true);
} else {
    console.log(false);
}

/** Ejercicio 3
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */
console.log("Ejercicio 3:");
let numero = 36;
if (numero % 4 == 0 || numero % 9== 0){
    console.log(true);
} else {
    console.log(false);
}


/** Ejercicio 4
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */
console.log("Ejercicio 4:");
let categoriaPelicula = "romance";
switch (categoriaPelicula) {
    case "accion" :
        console.log ("Te recomendamos: El justiciero:capítulo final");
        break; 
    case "drama" :
        console.log ("Te recomendamos Identidad desbloqueada");
        break;
    case "romance" :
        console.log ("Te recomendamos: La frecuencia del amor");
        break;
    case "suspenso":
        console.log ("Te recomendamos: Olvidado");
        break;
    case "terror":
        console.log ("Te recomendamos: La monja 2");
        break;
        default :
        console.log('Categoría no reconocida. Por favor, elige una categoría válida.');
        break;
    } 

/** Ejercicio 5
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
console.log("Ejercicio 5:");

let opcionCajero = 3;
if (opcionCajero === 1) {
    console.log("Realizar retiro dinero.");
} else if (opcionCajero === 2) {
    console.log("Realizar tranferencia.");
} else if (opcionCajero === 3) {
    console.log("Realizar depósito.");
} else if (opcionCajero === 4){
    console.log("Realizar pago de servicios.");
} else {
    console.log("Opción no válida. Por favor, elija una opción válida.");
}
/** Ejercicio 6
 * 
 * Escribir en codigo un programa conversor de divisas
 * 
 * Debe recibir como parametro una cantidad en pesos mexicanos y
 * Segun sea la opcion que se indique, realizar la conversion correspondiente
 * 
 * 1. A dolares estadounidenses
 * 2. A euros 
 * 3. A yenes japoneses
 * 4. A libra esterlina
 * 5. A franco suizo
 * 
 * Consideracion: estructura switch
 * 
 */

console.log("Ejercicio 6:");

let pesosMex = "2500";
let elijaDivisa = "3" 

switch (elijaDivisa) {
    case "1":
        let dolaresEu =pesosMex * 0.058;
        console.log(`${pesosMex} pesos mexicanos son ${dolaresEu} dolares estadounidenses.`);
        break;
    case "2":
        let euros =pesosMex * 0.054;
        console.log(`${pesosMex} pesos mexicanos son ${euros} euros.`);
        break;
    case "3":
        let yenes =pesosMex * 8.40;
        console.log(`${pesosMex} pesos mexicanos son ${yenes} yenes japoneses.`);
        break;
    case "4":
        let libraEst =pesosMex * 0.046;
        console.log(`${pesosMex} pesos mexicanos son ${libraEst} libra Esterlina.`);
        break;  
    case "5":
        let francoSuizo =pesosMex * 0.051;
        console.log(`${pesosMex} pesos mexicanos son ${francoSuizo} francos suizos.`);
        break;
        default :
        console.log("Divisa inválida, por favor eliga una de las 5 opciones");
        break;
}       
