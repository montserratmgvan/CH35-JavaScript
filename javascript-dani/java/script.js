/* tipos de datos
string (cadenas de texto) number (numericos
    booleans (booleanos: true or false)
    null (nulos)
    undenified (indefinidos)
    objects: (objects)
    objects: (arrays)*/

    /*console.log(); nos permite visualizar en consola del navegador el código de javascript.
    
    console.war(); Muestra un mensaje de advertencia.

    console.error(); Muestra un mensaje de error.

    console.table();
    */

    let firstName;
    firstName = "Daniel";
    let lastName = "Maldonado";

    console.log(firstName + "" + lastName);
    console.log("Mi nombre es" + firstName +"y mi apellido es" + lastName);

    /*ECMAScript 6 (ES6). Interpolación de cadenas.
     - backticks ``
    para variables ${}
    texto para string 
    */
    let age= 37;
    console.log(`Mi nombre es ${firstName}, y mi apellido es ${lastName}, y tengo ${age}`);

    //console.warn();

    console.warn(`Precuación, no es buena práctica dejar sin punto y coma`);
//console.error();
    console.error(`Status 404: Failed`);

    /*
    -Array se traduce como matriz o arreglo. Es un tipo de dato que pertenece a JS en el cual se almacenan una colección de elementos de manera ordenada.
    -Los arrays se pueden manipular mediante métodos específicos.
    -Los elementos de un array se contabilizan como indices, por lo cual, el primer elemento del array posee el índice 0.
    -Un array posee n cantidad de elementos.
    -Se declaran como variables, seguido del signo igual y corchetes. Dentro de cada corchete vive un elemento con un tipo de dato.
    */
   let arreglo1 = []; //arrey vacio
   console.log(`Array vacío ${arreglo1}`);
   //los elementos de un array se separan mediante comas.

   let cars = ["Volkswagen", "BMW", "Mazda", "Kia"]; //array de string


   //longitud e índice son diferentes, la longitud (length) es el numero de elementos y el indice corresponde a cada elemento a partir del 0.
   console.log(cars);
   console.log(typeof(cars));

// array de numbers

let salariesMxn = [15000, 12000, 18000, 25000, 28000, 10000, 18500, 10200, 20500, 15000,17000,17200];
console.log(salariesMxn.length); //output:12
console.log(salariesMxn);

/*
Objetos. Los objetos son tipos de datos en JS, con una estructura definida que nos permite almacenar información mediante llaves (claves) y valores.
Su sintaxis es la siguiente
    const object = {
        clave1: valor1 (dato1),
        clave2: valor2 (dato2)
    }  
Los objetos pueden almacenar diferentes tipos de valores.
*/

const employee = {
firstName: "Rey David",
lastName: "Martínez",
age: "29",
country: "México",
}

console.log(employee);
//mostrando mi array como tabla
console.table(cars);
//mostrando mi objeto como tabla
console.table(employee);




