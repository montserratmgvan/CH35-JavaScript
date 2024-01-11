const calculator = require('../modules/calculator.js');

//primer test para la suma

test('La suma de dos números y el valor resultante', ()=>{
    expect(calculator.sum(10,20)).toBe(30);
});

//segundo test
test('La resta de dos números y el valor resultante', ()=>{
    expect(calculator.substract(10,20)).toBe(-10);
});
