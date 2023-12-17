//^OPERADOR
/*
* Un signo que debe efecutar una determinada operación
*/

/*
^OPERADORES ARTITMÉTICOS (+,-,*,/, %,++, --)

* operadores de asignación (=)
* operadores lógicos (&&,  ||, !)
* operadores de comparación (igualdad ==, igualdad estricta ===, != desigualdad, !=== desigualdad estricta <,>, <=, >=)
* operadores de cadena (+ para concatenar, toLowerCase, toUpperCase, trim, toString, concat)
*
*/

/*
 *OPERADORES ARITMÉTICOS
 
 *  (+): suma, se utiliza para sumar dos numeros.
 *  (-): resta, se utiliza para restar un múmero de otro.
 *  (*): multiplicación, multiplicar un número con otro.
 *  (/): división, dividir un número con otro.
 *  (%): residuo, se utiliza para obtener el resto de una división.
 * (++): incremento, aumento de uno en uno a la cantidad o el numero.
 * (--): decremento, disminuye de uno en uno la cantidad o el numero.
 */

 let numero1 = 10;
 let numero2 = 8;

 suma = numero1 + numero2;
 console.log(suma);

 resta = numero1 - numero2;
 console.log(resta);

 multiplicacion = numero1 * numero2;
 console.log(multiplicacion);

 division = numero1 / numero2;
 console.log(division);

 residuo = numero1 % numero2;
 console.log(residuo);

 incremento = numero1;
 incremento ++;
 decremento = numero2;
 decremento --;

 console.log(incremento);
 console.log(decremento);



//!ejemplo de como aplicar descuento 

let precioReal= 1000;
let porcentajeDescuento =20;

let cantidadDescuento =(precioReal * porcentajeDescuento)/100;

let precioConDescuento = precioReal - cantidadDescuento;

console.log("Precio real : $" + precioReal);
console.log("Porcentaje de descuento:" + porcentajeDescuento + "%");
console.log("Cantidad de descuento: $" + cantidadDescuento);
console.log("Precio con descuento: $" + precioConDescuento);


/*
*OPERADOR DE ASIGNACIÓN 
*  =: Este comparador no compara, lo que hace es asignar
*/
// ^ejemplo   let frutas = manzana;

/* 
*OPERADOR DE COMPARACIÓN 
*   (==) : igualdad compara si nuestros valores son iguales
*/

let numero3 = 10;
let texto = "10";

console.log(numero3 == texto);


/* 
*  (===): igualdad estricta, compara si los valores osn iguales y el tipo de dato
*/

let numero4 = 10;
let texto1= "10";

console.log(numero4 === texto1);

/*
 * (!=): desigualdad o distinto, este operador verifica si dos valores no son iguales y de ser necesario realiza la conversión 
 */

let precioCaja= 1499;
let precioMax= 1500;

if (precioCaja != precioMax) {
    console.log("El precio del producto no es igual al precio máximo");

} else {
    console.log("El precio del producto es igual al precio máximo del producto permitido");
}

let numero5 = 10;
let numero6= "15";

if (numero5 != Number(numero6)) {
    console.log("Son diferentes");
} else{
    console.log("los valores son iguales");
}

/*
 * (!==) desigualdad estricta, este operador verifica si dos valores no son iguales, pero a diferencia de (!=) en este caso ambos valores deben tener el mismo tipo y valor.
 */

let numero7 = 41;
let numero8 = "50";

if (numero7 !== numero8) {
console.log("Los valores son diferentes");
} else{
console.log("Los valores son iguales");
}

/**En igualdad: ==, y desigualdad: !=
En igualdad estricta: ===, y desigualdad estricta: !==
(Es como sustituir el primer "=" por un "!") */

/*
*(>): mayor que, nos indica si un valor es mayor que otro.
*/
let puntuacionFinal = 85;
let puntuacionRequerida= 102;
console.log(puntuacionFinal > puntuacionRequerida);

// *(<) menor que, nos indica si un valor es menor que otro.

let age = 23;
let edadLimite= 30;
console.log(age < edadLimite);

// * (>=) mayor o igual que, nos indica si un valor es mayor o igual que.

let edad = 23;
let edadNecesaria=18;
console.log(edad >= edadNecesaria);

// * (<=) menor o igual que, nos indica si un valor es menor o igual que.

let temperatura = 7 ;
let temperaturaMax =21;
console.log(temperatura <= temperaturaMax);



/*

EJERCISIOS FER
ejercicio 1 un programas que solicite al usuario dos números y en consola nos va a decir si esos números son iguales o ay alguno que sea mayor que otro
*/

console.log("Ejercicio 1:");
let valor1= prompt ("Ingresa un número");
let valor2= prompt ("Ingresa otro número");

valor1= parseFloat(valor1);
valor2= parseFloat(valor2);


if (valor1 === valor2){
    console.log(" Los dos números ingresados son iguales");
} else if (valor1<valor2){
    console.log("valor 1 es menor que el valor 2");
} else{
    console.log("el valor 1 es mayor el valor 2");
}

/*
ejercicio 2 un programa que pida al usuarios dos palabras y determine si son iguales o no
*/
console.log("Ejercicio 2:");
let palabraUno= prompt ("Ingresa una palabra");
let palabraDos= prompt ("Ingresa otra palabra");

if(palabraUno == palabraDos) {
    console.log("Las palabras son iguales");
} else {
    console.log("Las palabras son diferentes");
}

//*OPERADORES LÓGICOS

/*
* (&&) and, se utilizan cuando las dos condiciones deben cumplirse 
*/
console.log("Ejemplos de operadores lógicos");
let mayoriaEdad = 18;
let tieneIdentificación = true;

if (mayoriaEdad >=18 && tieneIdentificación){
console.log("Pedes rentar el salón de fiesta");
} else {
    console.log("Nolo puedes rentar");
}


// * (||) or : se utiliza cuando se debe cumplir una condición u otra.
let userPrime = false;
let descuento = true;

if (userPrime || descuento) {
    console.log("Califica para descuento");
} else{
    console.log("No aplica descuento");
}

//*  (!) not : niega el valor de una condición.

let diaLibre = false;
if (!diaLibre){
    console.log("Se trabaja :(");
} else {
    console.log("Descanso :)");
}

//^ OPERADORES DE CADENA

//* toLowerCase : hace el cambio de nuestro string a minúsuclas.
console.log("Ejemplos de operadores de cadena:");

let mensajeUsuario = "Bienvenid@ a la tierra";
let cambioMinúscula= mensajeUsuario.toLowerCase();
console.log(cambioMinúscula);

//* toUpperCase: hace el cambio de nuestro string a mayúscula.

let saludo = "HOLA";
let cambioMayuscula= saludo.toUpperCase();
console.log(cambioMayuscula);

// * trim : quita los espacios de los costados.

let aviso = "  CH-35   Rifa ";
let sinEspacios = aviso.trim();
console.log(sinEspacios); 


//* toString :  convierte un tipo de dato a number en string.

let numero10= 31;
let cadenas = numero10.toString();
console.log(cadenas);

//* concat :  juntar los datos.

let nombre = "Monse";
let apellido = " Galván";
let nombreCompelto= nombre.concat ("", apellido)
console.log(nombreCompelto);

/*
^ EXPRESIONES

^ Expresión aritmética: 

*  let operacion = 14 + 25 *12;   combina un suma con una multiplicación.

^ Expresión de cadena:

* let notificacion = "Buenas noches";   en esta expresion estamos contatenando.  

^ Expresión lógica:
*  let enMayorEdad = (23 > 18) && ( 23 < 65); tiene operadores lógicos y de comparación.

^ Expresión de asignación

* let frasco = chocolates; asigna un valor a la variable.
*/







/*
^links
^https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators


*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String
*/

/*let harina = parseInt ("150");
let huevo = toString(1);
let mantequilla = parseInt("5");
let leche = parseInt("500");

let nutella = 50;
let nutellatoString = nutella.toString();
console.log(typeof(nutellatoString));
console.log(nutella); */

//console.log(typeof (toString(nutella)));

/*console.log(typeof(harina));
console.log(typeof(huevo));

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
let pasoDos = "<br> Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
let pasoTres = "<br> Paso 3: Posteriormente, sirve la mezcla de masa para jokeis al centro del sarten dejandola caer suavemente. ";
let pasoCuatro = "<br> Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "<br> Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario.";
let pasoSeis = "<br> Paso 6: Finalmente, sirve y disfruta.";

let texto = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
document.write(texto); */


console.log("EJERCICIOS- Receta de 12 hotcakes");

console.log("INGREDIENTES");
let tazasHarina = ("2 tazas de harina ");
let cantHuevo = ("2 huevos ");
let cuchMantequilla = ("2 cucharadas de mantequilla derretida ");
let tazasLeche = ("1.5 tazas de leche ");

let ingredientes= tazasHarina + cuchMantequilla+ tazasLeche + cantHuevo
console.log(ingredientes);

console.log("PASOS");

let pasoUno = "Paso 1: Vierte todos los ingredientes en la licuadora y mezcla hasta lograr una consistencia homogenea. ";
let pasoDos = "Paso 2: Despues, caliente un sarten con un poco de mantequilla. ";
let pasoTres = "Paso 3: Posteriormente, sirve la mezcla de masa para jokeis al centro del sarten dejandola caer suavemente. ";
let pasoCuatro = "Paso 4: Manten a flama baja y voltea una vez que aparezcan burbujas de aire. ";
let pasoCinco = "Paso 5: Ahora, repite agregando mantequilla al sarten cada vez que sea necesario.";
let pasoSeis = "Paso 6: Finalmente, sirve y disfruta.";

let receta = pasoUno + pasoDos + pasoTres + pasoCuatro + pasoCinco + pasoSeis
console.log(receta);

console.log("¿Puedes hacer tus hotcakes?")
let harina = 2;
let huevo = 2;
let mantequilla = 2;
let leche = 1.5;


let harinaDisponible = prompt ("Ingrese tazas de harina disponible ");
let lecheDisponible = prompt ("Ingrese tazas leche disponible ");
let huevosDisponibles = prompt ("Ingrese cantitad de huevos disponible "); 
let mantequillaDisponible= prompt ("Ingrese cucharadas de mantequilla disponible");


let ingredientesSuficientes = harinaDisponible >= harina && lecheDisponible >= leche &&huevosDisponibles >= huevo &&                                mantequillaDisponible >= mantequilla;

if (ingredientesSuficientes) {
    console.log(" Cuentas con todos tus ingredientes, puedes preparar tus hotcakes :)");
} else {
    console.log(" No cuentas con todos los ingredientes para tu receta :(");
}

