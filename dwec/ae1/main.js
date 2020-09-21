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