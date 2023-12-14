/*
^
^ ==Arrays== 
^Es una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicados por la posición que ocupa el array.
^Los arrays se utilizan para almacenar y organizar datos de manera eficiente.
*/

//* Crear un Array

const numeros = [1, 2, 3, 4, 5];

//* Array de cadena de texto
const comida = ["tacos", "enchiladas", "milanesa",  "agua de horchata"];
console.log(comida);

//^Array mixto

const mixto = [
    "pluma", 
    8,
    true,
    {nombre: "TITO"}
];
console.log(mixto);

//*Array vacío
const lista = [];
console.log(lista);

//*Agregar elementos a mi array vacio
lista[0] = "leche";
lista[1] = "gelatinas";
lista[2] = "pan";
lista[3] = "aceite";
lista[4] = "yogurth";
console.log(lista);

//*Otra manera de crear arrays
//*Esta sintaxis se puede emplear en Arrays porque son Objects, es una manera de mandar a llamar un nuevo Objeto de tipo Array.

const frutas = new Array("manzana", "mandarinas", "jicama", "melón", "sandía");
console.log(frutas);

//*Longitud de un array

console.log(frutas.length);
//*Acceder a los elementos del array, acorde a su índice o posición.
console.log(frutas[3]); //melón
console.log(frutas[2]); //jicama
console.log(frutas[5]); //undefined

//* Modificar un elemento del array por el índice.

const panaderia = ["conchas", "orejas", "cuernitos", "bolillo", "barquillo", "donas", "mantecadas", "rebanada"];
console.log(panaderia);

//*cambiamos un elemento por ejemplo: de cuernitos a telera
panaderia[2] = "telera";
panaderia[6] = "empanada";
console.log(panaderia);

//* arreglo de arreglos o multidimensional
console.log("arreglo de arreglos");

//* Estados: Estados de México, Jalisco, Yucatán, Michoacán, Sonora, Oaxaca, CDMX.

//* Platillos: Enchiladas, Torta ahogada, Relleno negro, Dogos, Tlayuda, Tacos.

const estados = ["Estado de México", "Jalisco", "Yucatán", "Michoacán", "Sonora", "Oaxaca", "CDMX"];

const platillos = ["Enchiladas", "Torta ahogada", "Relleno negro", "Dogos", "Tlayuda", "Tacos"];

const menu = [estados,platillos];
console.log(menu[0][2]);

//* Para mencionar ambos arrays
console.log(menu[0][0],menu[1][0]);

/*
*En el primer corchete se establece el índice del array y en el segundo corchete se establece el índice del elemento de dicho array.
 */
console.log(`En ${menu[0][1]} también se come ${menu[1][2]}`);

/*
^Métodos de arrays
^ Método de cola (queue). Los métodos de cola implican agregar elementos al final del array y eliminar elementos al inicio del array. Sigue el principio de FIFO (First-in-first-out) lo que significa "el primer elemento añadido es el primer elemento elimindo".
^push
^shift
^unshift


^Método de pila (stack). Implica agregar elementos al final del array y eliminar  elementos del final del array. Sigue el principio LIFO (last-in-first-out), que significa "el ultimo elemento añadido es el primero en ser eliminado"
^push
^pop

 */
console.log("Métodos de Arrays");
const ch35 = ["Dani", "Fer", "Maara", "Gaby", "Paola", "Enrique", "Mariana"];
console.log(ch35);

//*pop() Eliminar el último elemento del array

let popch35 = ch35.pop();
console.log(popch35);
console.log(ch35)

//*push () agregar al final del array
let pushch35 = ch35.push("Moni");
console.log(ch35);

//* shift () quitar primer elemento del array

let shiftch35 = ch35.shift();
console.log(ch35);

//* unshift agrgar al principio del array
let unshiftch35 = ch35.unshift("Dani");
console.log(ch35);

//* reverse () cambia el sentido del ordenamiento del array

let reversech35 =ch35.reverse();
console.log(ch35);

/*
^investigar: sort, forEach, slice, splice, indexOf 
 */
