document.addEventListener("DOMContentLoaded", () => {
    // ELEMENTOS DE LA CABECERA
    const backArrowDiv = document.getElementById("backArrowDiv");
    const backArrowButton = document.getElementById("backArrowButton");
    const nextArrowDiv = document.getElementById("nextArrowDiv");
    const nextArrowButton = document.getElementById("nextArrowButton");
    // ELEMENTOS DE LA PRIMERA PAGINA
    const paso1 = document.getElementById("paso1");
    // ELEMENTOS DE LA SEGUNDA PAGINA
    const paso2 = document.getElementById("paso2");
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const f_nacimiento = document.getElementById("f_nacimiento");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigoPostal");
    const provincia = document.getElementById("provincia");
    const municipio = document.getElementById("municipio");
    const confirmarButton = document.getElementById("confirmarButton");
    // ELEMENTOS DE LA TERCERA PAGINA
    const paso3 = document.getElementById("paso3");
    const nombre_v = document.getElementById("nombre_v");
    const apellidos_v = document.getElementById("apellidos_v");
    const f_nacimiento_v = document.getElementById("f_nacimiento_v");
    const direccion_v = document.getElementById("direccion");
    const codigoPostal_v = document.getElementById("codigoPostal_v");
    const provincia_v = document.getElementById("provincia_v");
    const municipio_v = document.getElementById("municipio_v");
    // ELEMENTOS DE LA CUARTA PAGINA
    const paso4 = document.getElementById("paso4");
    const end_button = document.getElementById("end-button");
})

let valor_url = "";

function createErrorMessage() {
    const error = document.createElement('span');
    error.textContent = 'ERROR: Introduce el dato requerido.';
    error.className = 'error';
    return error;
}

// function cleanErrors() {
//     const elemErrores = document.getElementsByClassName('error');
//     for (var i = 0; i < elemErrores; i++) {
//         elemErrores[i].parentNode.removeChild(elemErrores[i]);
//     }
// }

// PASO 1 (EN PANTALLA)
// Funcion que nos pasa al paso2
function siguiente() {
    //PASO 1
    // En caso de que el input URL esté vacío...
    const url = document.getElementById("url");
    if (url.value == "") {
        const error = createErrorMessage();
        paso1.appendChild(error);
    } else { // Si no está vacío...
        valor_url = url.value;
        backArrowButton.style.display = "block";
        paso1.style.display = "none";
        paso2.style.display = "flex";
        //cleanErrors();
        nextArrowButton.setAttribute('onclick', 'validarYSiguiente()');
    }
}

// PASO 2 (EN PANTALLA)
// Funcion que nos vuelve al paso1
function atrasAPaso1() {
    nextArrowButton.setAttribute('onclick', 'siguiente()');
    backArrowButton.style.display = "none";
    paso1.style.display = "block";
    paso2.style.display = "none";
}

const elemForm = document.getElementsByName("dataForm");

function Get_FormElementsValue(nom, ape, f_nac, dir, cp, prov, mun) {
    this.nom = nom.value;
    this.ape = ape.value;
    this.f_nac = f_nac.value;
    this.dir = dir.value;
    this.cp = cp.value;
    this.prov = prov.value;
    this.mun = mun.value;
}

// Funcion para pasar al paso 3
function validarYSiguiente() {
    const elemNoValidados = [];
    for (var i = 0; i < elemForm.length; i++) {
        if (elemForm[i].value == "") {
            elemNoValidados.push(elemForm[i]);
            const error = createErrorMessage();
            elemForm[i].insertAdjacentElement('afterend', error);
        }
    }
    if (elemNoValidados.length == 0) {
        const form_value = new Get_FormElementsValue(nombre, apellidos, f_nacimiento, direccion, codigoPostal, provincia, municipio);
        // Damos valor a las etiquetas que van a contener los datos de los elementos validados.
        // ESTO APARECE EN PASO 3
        nombre_v.textContent = form_value.nom;
        apellidos_v.textContent = form_value.ape;
        f_nacimiento_v.textContent = form_value.f_nac;
        direccion_v.textContent = form_value.dir;
        codigoPostal_v.textContent = form_value.cp;
        provincia_v.textContent = form_value.prov;
        municipio_v.textContent = form_value.mun;

        backArrowButton.setAttribute('onclick', 'atrasAPaso2()');
        nextArrowButton.textContent = 'Confirmar';
        nextArrowButton.setAttribute('onclick', 'ConfirmarDatos()');
        paso1.style.display = "none";
        paso2.style.display = "none";
        paso3.style.display = "flex";
    }
}

// PASO 3 (EN PANTALLA)
function atrasAPaso2() {
    backArrowButton.setAttribute('onclick', 'atrasAPaso1()');
    nextArrowButton.setAttribute('onclick', 'validarYSiguiente()');
    paso1.style.display = "none";
    paso2.style.display = "flex";
    paso3.style.display = "none";
}

function ConfirmarDatos() {
    backArrowButton.setAttribute('onclick', 'atrasAPaso3()');
    nextArrowButton.style.display = "none";
    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "none";
    paso4.style.display = "flex";

    // LE DAMOS VALOR AL BOTON QUE SE MUESTRA
    document.getElementById('end-button').setAttribute('onclick', "location.href='" + valor_url + "'");
}

// PASO 4 (EN PANTALLA)
function atrasAPaso3() {
    backArrowButton.setAttribute('onclick', 'atrasAPaso2()');
    nextArrowButton.textContent = 'Siguiente';
    nextArrowButton.style.display = "block";
    nextArrowButton.setAttribute('onclick', 'ConfirmarDatos()');
    paso1.style.display = "none";
    paso2.style.display = "none";
    paso3.style.display = "flex";
    paso4.style.display = "none";
}