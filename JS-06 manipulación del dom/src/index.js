/*
 *Manipulación del DOM
 * leer y traer nodos del árbol del DOM.
 *   document.getElementsById (trae elememtos por id) 
 *   document.getElementsByClassName (trae elememtos por clases) 
 *   document.getElementsByTagName (trae elememtos por etiquetas) 
 */

 //*   getElementsById

const titulo = document.getElementById("title1");
console.log(titulo);
 console.log(titulo.innerText); //traer un string (texto que vive en mi id)

 //*   get.ElemntsByClassName

const titulos = document.getElementsByClassName("title");
console.log(titulos);
console.log(titulos.length); // devuelve la longitud de elementos de la clase.
console.log(typeof titulos); // muestra que es un objeto porque es una coleccion de arrays
//*  get.ElementsByTagName

const tituloH3 = document.getElementsByTagName ("h3");
console.log(tituloH3);
console.log(tituloH3[0].innerText);

/*
* Métodos para llamar elementos mediante selectores de CSS.

* Se usa para procesos más específicos y la sintaxis querySelector
  *  - document.querySelector("selector"); //#, ., <>
  *  - document.querySelectorAll(). Selecciona los elementos que se especifiquen.
  * Siempre van a traer el primer elemento con el selector indicado
*/

//*  querySelector
const query = document.querySelector("#title4");
console.log(query.innerText);

const queryClass = document.querySelector (".title");
console.log(queryClass);

// *   querySelectoAll
const queryClassAll = document.querySelectorAll(".title");
console.log(queryClassAll);

//* Manipular elementos del Dom (styles) con JS

titulo.style.textAlign = "center";
titulo.style.color = "#9F3BC0";


//*   Manipular el texto de un elemento

const titulo2 = document.querySelector("#title2");
titulo2.innerText = "Sesión de Manipulación del DOM. CH35"
titulo2.style.color = "#F23D3D";

/*
 * Métodos para crear y agregar elementos en el DOM. Este proceso se divide en dos: "crear el nodo y agrgar el nodo"
 *   - crear nodos:
 *     *- document.createElement("element") --> Crea elementos a partir de etiquetas.
 *      *- document.createTextNode("text") --> Crea texto dentro de las etiquetas.
 */


const nodo1 = document.createElement("h4");
const imgNodo = document.createElement("img");


/*
* Agregar nodos, mandamos a llamar el elemento padre y le pasamos la propiedad con la constante que guarda el nodo creado.

*  - parentElement.appendChild(const);
*  - parentElement.append(const);
*  - parentElement.insertBefore(const);
*  - parentElement.insertAjacentElement(const);

*Utilizaremos mayormente appendChild
*/

//* Obtengo el elemento padre por tag, class o id
const parentElement = document.getElementById("dif");

//* Agregar texto al nodo1
const textNodo1 = document.createTextNode("imagen agregada desde el DOM");

//* Inserto el texto en el nodo1
nodo1.appendChild(textNodo1);

//* Insertar nodos en el elemento padre
parentElement.appendChild(nodo1);
parentElement.style.fontFamily = "'Karla', sans-serif";
parentElement.style.color = "#026873";
//* Agregando imagen

//* Inserto el imgNodo en el elemento padre para definirlo posteriorment
parentElement.appendChild(imgNodo);

//* Accedo a las propiedades de la imagen

imgNodo.src = "../src/assets/octocat.jpg";
imgNodo.alt = "Octocat-github";
imgNodo.width = "300";

/*
* Otra forma de leer y modificafr nodos
    * document.outerHTML (leer)
    * node.innerHTML (escribir sobre el nodo)
*/
const elementOuter = titulo2.outerHTML;
console.log(elementOuter);
titulo2.innerHTML = "Manipulación del DOM - CH35";
