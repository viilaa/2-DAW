document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById('myFirstChart').getContext('2d');
    const chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [{
                    label: 'Temperaturas (ºC)',
                    borderColor: 'rgb(0, 92, 128)',
                    data: [],
                    type: 'line',
                    order: 1
                },
                {
                    label: 'Lluvias (mm3)',
                    data: [],
                    backgroundColor: 'rgb(178, 34, 34)',
                    borderColor: 'rgb(0, 0, 0)',
                    order: 2
                },
            ],
        },

        // Configuration options go here
        options: {
            responsive: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
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