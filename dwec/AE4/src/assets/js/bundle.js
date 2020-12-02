(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('myFirstChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                    label: 'Temperaturas',
                    borderColor: 'rgb(255, 99, 112)',
                    data: [],
                    type: 'line',
                    order: 2
                },
                {
                    label: 'Lluvias',
                    data: [],
                    backgroundColor: 'rgb(78, 122, 155)',
                    order: 1
                },
            ],
        },

        // Configuration options go here
        options: {}
    });

    function checkingDataInputs(inputMeses, inputTemp, inputLluvia) {
        return inputMeses[0] != "" && inputTemp[0] != "" && inputLluvia[0] != "" && inputMeses.length === inputTemp.length && inputMeses.length === inputLluvia.length && inputTemp.length === inputLluvia.length
    }

    const grafica = document.getElementById('grafica');
    const button = document.getElementById('Actualizar_Button');
    button.addEventListener('click', () => {
        button.value = "Actualizar";
        let inputMeses = document.getElementById('meses').value.split(',');
        let inputTemp = document.getElementById('temperatura').value.split(',');
        let inputLluvia = document.getElementById('lluvias').value.split(',');

        if (checkingDataInputs(inputMeses, inputTemp, inputLluvia)) {
            for (let i = 0; i < inputMeses.length; i++) {
                chart.data.datasets[0].data[inputMeses[i] - 1] = inputTemp[i];
                chart.data.datasets[1].data[inputMeses[i] - 1] = inputLluvia[i];
            };
            chart.update();
            grafica.style.display = "block";
        } else {
            alert('Faltan datos por rellenar!');
        }
    });
});
},{}]},{},[1]);
