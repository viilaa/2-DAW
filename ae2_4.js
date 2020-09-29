let values = [18, 19, 23, 27, 30];
let findGreaterThan = (a) => a > 15; // 15 es el numero con el que hará la comparación con los elementos del array.
console.log(values.every(findGreaterThan));