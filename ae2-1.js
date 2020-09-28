// EJERCICIO 1

// a
/*function isString(x) {
    if(typeof x === "string"){
        return x;
    }
}
let array = ["Ana", 2, "Javi", 5, "Roberto",
    7, "Vanessa", 10];
let newArray = array.filter(isString);
console.log(newArray);*/

//b
function isParAndNumeric(x) {
    if ((x % 2) == 0 && !isNaN(x)){
        return x;
    }
}
let array2 = ["Ana", 2, "Javi", 5, "Roberto",
    7, "Vanessa", 10];
let newArray2 = array2.filter(isParAndNumeric);
console.log(newArray2);