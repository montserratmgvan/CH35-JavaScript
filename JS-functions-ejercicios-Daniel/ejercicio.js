//1. Convertir minutos en segundos. Escribe una función que tome un número entero de minutos y lo convierta a segundos.
console.log("ejercicio1:")
    function calcMinToSeg(number){
        console.log(number*60)
        return number * 60;
    }
    calcMinToSeg (25);

    

// 2. Devuelve el siguiente número del entero pasado. Cree una función que tome un número como argumento, incremente el número en +1 y devuelva el resultado.


// 3. Área de un Triángulo. Escribe una función que tome la base y la altura de un triángulo y devuelva su área.
console.log("ejercicio3:")

function area(base, altura){
    return (base*altura)/2
}
console.log(area (10,5));




// 4. Convierta la edad a días. Cree una función que tome la edad en años y devuelva la edad en días.  calcAge(65) ➞ 23725
console.log("ejercicio4:")

function calcAge(age, days) {
    return age * days;
}
let días = calcAge (23, 365);
console.log(`el resultado de pasar años a días es ${días}`);

// 5. Calculadora de potencia. Cree una función que tome voltaje y corriente y devuelva la potencia calculada.
console.log("ejercicio5:")
function circuitPot(voltage, current){
    return voltage*current;
}
let potencia = (25*5);
console.log(`El resultado de la potencia es ${potencia} watt`);
// 6. ¡Devuélveme algo!. Escribe una función que devuelva la cadena "algo" unida con un espacio " " y el argumento dado a.



// 7. Suma de ángulos de polígonos. Dado un polígono regular n de n lados, devuelve la suma total de los ángulos internos (en grados).


// 8. Convertir horas y minutos en segundos. Escribe una función que tome dos números enteros (horas, minutos), los convierta a segundos y los sume. convert(1, 3) ➞ 3780
