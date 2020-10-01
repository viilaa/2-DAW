function multipleFactorial(a) {
    let resultado = 1;
    for (var i = a; i > 0; i--) {
        resultado *= i;
        
    }
    return resultado;
}
let values = [5, 3, 6, 2];
let newValues = values.map(multipleFactorial);
console.log(newValues);