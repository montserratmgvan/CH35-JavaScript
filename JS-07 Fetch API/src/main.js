//* programación sincrónica
/*
function two () {
    console.log("dos");
}

function one () {
    console.log("uno");
    two();
    console.log("tres");
}

one();
console.log("****************************");

*/
/*
 * programación asíncrona
 *setTimeout: que recibe una función anónima y establece un tiempo (en milisegundos 1000 ms = 1s)de ejecución para cumplir con la condición de asincronismo.
 */
/*
const twoAsync = () => {
    setTimeout(() => {
        console.log("dos Async");
    }, 5000);
    
}

const oneAsync = () => {
    setTimeout(function(){
        console.log("uno Async");
    }, 2000);
    twoAsync();
    console.log("tres Async");
}
oneAsync();
*/

//* trabajando con promesas mediante Fetch API

const url = "https://jsonplaceholder.typicode.com/users";

//^usando fetch para mostrar en consola
fetch(url)
  //^si se cumple la promesa, vamos a traer los datos de la API y se convertirá en tipo json para poder mostrarlos en consola
  .then((data) => data.json())
  .then((data) => {
    console.log(data); //^^mostrando en consola todos los usuarios de la API
    console.log(data[0].name); //^^mostrando en consola el usuario con el índice 0 y trayecndo solamente su nombre.
  })
  .catch((error) => console.error("¡Ups! , algo salió mal", error));

//*USANDO FETCH PARA MOSTRAR EN NAVEGADOR

const botonInfo = document.querySelector("#btn-mensaje");
const info = document.querySelector("#mensaje");

//* variable para guardar la información que se va a tarer desde la API: Debe ser de tipo null

let post = null;

//*consumiendo API con fetch (promesas)
botonInfo.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/6")
    .then((response) => response.json())
    .then((response) => {
      post = response; //*guardo los datos de response en la variable de tipo null, para que modifique el dato
      //*mandamos a llamar la variable desde la función (pero, esta no la hemos hecho, hay qeu hacerla)
      mostrarDatos(post); //este paso lo hicimso al final para que nos mostrara la lista, llamamos antes de tener los datos.
    })
    .catch((error) => console.error("¡Problemas!", error));
});

//* función que me permita manipular la variable de tipo null.
//*quiero traer name,user,email,phone del user de la API

const mostrarDatos = (post) => {
  //^creando nodos (elementos) mediante el DOM /manipulation
  const name = document.createElement("h2");
  const userName = document.createElement("h3");
  const email = document.createElement("p");
  const phone = document.createElement("p");

  //^ Ponerlos en el HTML (inerHTML)
  name.innerHTML = post.name;
  userName.innerHTML = post.username; //esta username esta asi porque debe coincidir con la api aunque en la variable este con camelcase
  email.innerHTML = post.email;
  phone.innerHTML = post.phone;

  //^ Hacer que aparezca en el navegador
  info.appendChild(name);
  info.appendChild(userName);
  info.appendChild(email);
  info.appendChild(phone);
};
//* USANDO FETCH PARA MOSTRAR EN NAVEGADOR (MOSTRAR PRODUCTOS)

const botonProductos = document.querySelector("#btn-store");
const tienda = document.querySelector("#store");
let productos = null;

botonProductos.addEventListener("click", () => {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((response) => {
      productos = response;
      // funcion por definir
      monstrarProductos(productos);
    })
    .catch((error) => console.error("¡Cuidado!", error));
});

//*funcion para crear, agregar y mostrar elementos desde el DOM

const monstrarProductos = (productos) => {
  //*mando a llamar las llaves de title, price, description, category, image desde la API

  productos.map((productos) => {
    //^ eEl método map toma el array (objeto en JS) y crea nuevos arreglos que se pueden manipular de manera individual. Así, evitamos el uso de un ciclo forEach.
    const imagen = document.createElement("img");
    const titulo = document.createElement("h2");
    const precio = document.createElement("h3");
    const descripcion = document.createElement("p");
    const categoria = document.createElement("p");
    const separador = document.createElement("hr");

    //* enviar a HTML con inner.HTML

    imagen.src = productos.image;
    imagen.width = 200;
    titulo.innerHTML = productos.title;
    precio.innerHTML = productos.price;
    descripcion.innerHTML = productos.description;
    categoria.innerHTML = productos.category;

    //mostrarlos en navegador al agregarlos a su padre
    tienda.appendChild(imagen);
    tienda.appendChild(titulo);
    tienda.appendChild(precio);
    tienda.appendChild(descripcion);
    tienda.appendChild(categoria);
    tienda.appendChild(separador);
  });
};

//^ método POST utilizando FETCH

fetch("https://jsonplaceholder.typicode.com/posts", {
  //^ indicar que es un método de tipo POST
  method: "POST",

  //^ creo el body de mi nuevo objeto, siguiendo las mismas llaves de la API existente (userId *que haga match con la que ya existe*, title y body. )
  body: JSON.stringify({
    //books
    userId: 1986, // userid
    title: "Sueñan los androides con ovejas eléctricas?", //book
    body: "Author:Phillipe K. Dick", // author.value
  }),
  //^ stringify: transforma en una cadena de caracteres.

  //^ definir el headers

  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
}) //^ fin de mi fetch
  //^ inicio de mis promesas
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });

//* PROGRAMACIÓN ASÍNCRONA (promesas)

//* funcion flecha de tipo async-await

//* indíco que es una función asincrona con la palabra reservada async antes de los parámetros.
const getUser = async () => {

//* para que se cumpla la promesa, no utilizamos then, sino que usamos try. Para errores, se sigue utilizando catch.
    try {
//* Retardo para que se ejecute de manera asíncrona. Tengo que crear una nueva promesa, que recibe un setTimeout.
        await new Promise(resolve => setTimeout(resolve,3000));

//* Mi promesa que se ejecuta 
        const response = await fetch("https://jsonplaceholder.typicode.com/users/4");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error inexplicable", error);
    }
};

//* IMPORTANTE INVOCAR FUNCIÓN, no olvidarlo.
getUser();


//* LocalStorage

//* Nos permite crear, modificar, eliminar y guardar objetos de JavaScript de manera local (en el equipo)

//* Crear un objeto de JS con sus llaves y valores.
const user =[
    {
    id: 1,
    name: "Monse",
    apellido: "Galván",
    email: "montserratmgvan@gmail.com",
    posicion: "estudiante",
    empresa: "Generation",
},
{
    id: 2,
    name: "Diana",
    apellido: "Alvarez",
    email: "diana.alv@gmail.com",
    posicion: "java dev",
    empresa: "cofepris",
}
];

//* Convertir el objeto creado a notación JSON y almacenarlo en el localStorage

localStorage.setItem("usuario", JSON.stringify(user));

//* Traer el objeto desde el localStorage
const users = JSON.parse(localStorage.getItem("usuario"));
console.log(users);

// console.log(`${user[1].nombre} con posición ${users[1].posicion}, trabaja en ${user[1].empresa}`);


//* sessionStorage 





/*
? LINKS DE RECURSO 
? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map

*/
