// EJERCICIO 1 (a, b, c).
console.log("Hola Mundo!");
const alertMessage= "Soy el primer script";
const getBrowserInfo = function () {
    var ua = navigator.userAgent, tem,
        M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    return M.join(' ');
};
alert(alertMessage + " y estoy funcionando sobre " + getBrowserInfo());



// EJERCICIO 2.
const arrayMeses = ["enero ", "febrero ", "marzo ", "abril ", "mayo ", "junio ", "julio ", "agosto ", "septiembre ", "octubre ", "noviembre ", "diciembre "];
/// a)
for (let i=0; i<arrayMeses.length; i++){
    console.log (arrayMeses[i]);
}
/// b)
console.table(arrayMeses);



// EJERCICIO 3.
const values = [true, false, 5, "hola", [1, 2, 3], { age: 2, gender: 'male' }];
for (let i = 0; i < values.length; i++) {
    console.log(values[i] + " es " + typeof values[i]);
}



// EJERCICIO 4.
const numero1 = 5;
const numero2 = 8;

if (numero1 < numero2){
    console.log("numero1(" + numero1 + ") no es mayor que numero2(" + numero2 +")");
}

if (numero2 > 0) {
    console.log("numero2(" + numero2 + ") es positivo");
}

if (numero1 < 0) {
    console.log("numero1(" + numero1 + ") es negativo o distinto de cero");
}

if ((numero1+1) < numero2) {
    console.log("Incrementar en 1 unidad el valor de numero1(" + numero1 + ") no lo hace mayor o igual que numero2(" + numero2 + ")");
}



// EJERCICIO 5.
function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}
console.log (factorial(3));