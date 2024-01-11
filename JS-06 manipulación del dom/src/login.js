HEAD
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//* Regex: expresiones regulares. Determinan patrones que se deben cumplir.
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//*desabilitar el boton
submitButton.disabled = true;


/*
*Evento para input, el cual evaluara el patrón de expresion regular y en caso de cumplir con el patrón, habilitará el botón y podremos ser redirigidos a la pagina index.html 
* se obtiene el valor actual del campo email (input) udando e.target.value y se almacena en una variable (text).
* se evalúa la REGEX
*/
emailInput.addEventListener("input", (e) =>{
    const text= e.target.value;

    if(emailREGEX.test(text) == true){
        submitButton.disabled= false;
    }
});



/**
 * emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    } else submitButton.disabled = true;
})
=======
const emailInput = document.getElementById("email");
const submitButton = document.getElementById("btn-submit");
//* Regex: expresiones regulares. Determinan patrones que se deben cumplir.
const emailREGEX = /^[\w.+\-]+@gmail\.com$/;

//*desabilitar el boton
submitButton.disabled = true;


/*
*Evento para input, el cual evaluara el patrón de expresion regular y en caso de cumplir con el patrón, habilitará el botón y podremos ser redirigidos a la pagina index.html 
* se obtiene el valor actual del campo email (input) udando e.target.value y se almacena en una variable (text).
* se evalúa la REGEX
*/
emailInput.addEventListener("input", (e) =>{
    const text= e.target.value;

    if(emailREGEX.test(text) == true){
        submitButton.disabled= false;
    }
});



/**
 * emailInput.addEventListener("input", (e) => {
    const text = e.target.value;

    if(emailREGEX.test(text) == true) {
        submitButton.disabled = false;
    } else submitButton.disabled = true;
})
 */