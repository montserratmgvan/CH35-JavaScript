/*Funciones. Son bloques de código con instrucciones que se pueden reutilizar las veces que sean necesarias
algunas funciones reciben parametros y otras no reciben parametros.


*nota: Las funciones "normales" se llaman por declaracion.
*/

function saludar (){
    console.log("hola desde una función");
}
//ejecutar la función con el nombre de la finción y los parámetros.

saludar();


//hoisting. caracteristica de una funcion que nos permite invocarla desde antes de su inicialización, es decir, se puede invocar antes del bloque de código o después.

// se invoca en la línea  11 y 21

function saludar () {
    console.log("hola, invocando la función con hoisting");
}
saludar();



//funciones que retornan algo. Para que una función retorne algo (un string, una operación, una variable, etc.) necesitamos indicarle al código de la función que vamos a retornar mediante la palabra return

function greeting() {
 return "hola desde una función que retorna";
}
console.log(greeting());

//función que retorna y recibe prámetros

function sumar(x, y) {
    return x + y;
}
let resultado = sumar (255, 245);
console.log(`El resultado de sumar x + y es ${resultado}`);

//función para calcular el cuadrado de un número

function calcCuadrado (numero){
    return numero * numero;
}

let resultCuadrado = calcCuadrado(5);
console.log(resultCuadrado);

//Funciones flecha (arrow function). Es una manera de declarar una función por declaración, sintetizando el código y haciéndolo más legible.

//Función flecha para calcular el cubo de un número.

const calCubo = (number) => {
    return number * number * number;
}

let resultCubo = calCubo(3);
console.log(resultCubo);

//Funciones anónimas. Son un tipo de funciones que se declaran sin nombre de función y se alojan en el interior de una variable. Se hace refereencia a ellas cada vez que la utilicemos.
//Las funciones anónimas no permiten el hoisting (no se puede invocar antes de inicializarlas)
const mensaje = function (){
    return "Este es un mensaje desde una función anónima";
}
console.log(mensaje());


//Callbacks. Es pasar una función B por parámetro a una función A, de modo que la función A pueda ejecutar esa función de froma genérica desde su código.

//función B

const functionA = function () {
    console.log("Ejecutando función B");
}


//fUNCIÓN A que mandará a llmar a la función B
const functionB = function (callback) {
    callback();
}
functionA(functionB);


