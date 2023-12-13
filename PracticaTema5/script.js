let enviar = document.getElementById('enviar');
contenedorErrores = "";

/**
 * PARTE 3
 */

//PASAR A MAYUSCULAS
function pasarMayusculas (elemento) {
    elemento.value = elemento.value.toUpperCase();
}

//OBTENEMOS LOS ELEMENTOS DEL NOMBRE Y APELLIDOS
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellidos');

//ASOCIAMOS LOS EVENTOS DE PERDIDA DE FOCO
nombre.addEventListener("blur", function() {
    pasarMayusculas(nombre);
});

apellido.addEventListener("blur", function() {
    pasarMayusculas(apellido);
});

/**
 * PARTE 4  -- NOMBRE Y APELLIDOS
 */

function validarCampos() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellidos').value;

    let contenedorErrores = document.getElementById('errores');

    if (nombre === "") {
        contenedorErrores.innerHTML += "Error en el campo Nombre";
        nombre.focus();
        return false;
    }

    if (apellido === "") {
        contenedorErrores.innerHTML += "Error en el campo Apellidos";
        apellido.focus(); 
        return false;
    }
    return true;

}

enviar.addEventListener('click', validarCampos);

/**
 * PARTE 5  -- EDAD
 */

function validarEdad () {
    let edad = document.getElementById('edad').value;
    let contenedorErrores = document.getElementById('errores');

    if (isNaN(edad) || edad < 0 || edad > 105 || edad === "") {
        contenedorErrores.innerHTML += "Error en el campo Edad";
        edad.focus(); 
        return false;
    }

    return true;

}

enviar.addEventListener('click', validarEdad);

/**
 * PARTE 6  -- DNI
 */

function validarNif () {
    let dni = document.getElementById('nif').value;
    let contenedorErrores = document.getElementById('errores');


    let patron = /^\d{8}-[a-zA-Z]$/;

    if (!dni.match(patron)) {
        contenedorErrores.innerHTML += "Error en el campo NIF";
        dni.focus();
        return false;
    }

    return true;

} 

enviar.addEventListener('click', validarNif);

/**
 * Parte 7  -- EMAIL
 */

function validarEmail() {

    let email = document.getElementById("email").value;
    let contenedorErrores = document.getElementById('errores');

    let patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !email,match(patron)) {
        contenedorErrores.innerHTML += "Error en el campo Email<br>";
        email.focus();
        return false;
    }

    return true;  
}

enviar.addEventListener('click', validarEmail);

/**
 * PARTE 8  -- PROVINCIAS
 */

function validarProvincias(){
    let provincia=document.getElementById("provincia");
    let contenedorErrores = document.getElementById('errores');
    
    if (provincia.selectedIndex === 0) {
        provincia.focus();
        contenedorErrores.innerHTML += "Error en el campo de provincia";
        return false;
    }

    return true;
}

enviar.addEventListener('click', validarProvincias);

/**
 * PARTE 9  -- FECHA
 */

function validarFecha () {
    let fecha = document.getElementById('fecha');
    let contenedorErrores = document.getElementById('errores');

    let patron = /^(0[1-9]|[12][0-9]|3[01])[-/](0[1-9]|1[0-2])[-/]\d{4}$/;

    if (!fecha.match(patron)) {
        contenedorErrores.innerHTML += "Error en el campo de fecha";
        fecha.focus();
        return false;
    }

    return true;

}

enviar.addEventListener('click', validarFecha);

/**
 * PARTE 10 -- TELEFONO
 */

function validarTelefono() {
    let telefono = document.getElementById('telefono').value;
    let contenedorErrores = document.getElementById('errores');

    let patron = /^\d{9}$/;

    if (telefono == "" || !telefono.match(patron)) {
        contenedorErrores.innerHTML += "Error en el campo de Teléfono.";
        telefono.focus();
        return false;
    }

    return true;

}

enviar.addEventListener('click', validarTelefono);


/**
 * PARTE 11 -- HORA
 */

function validarHora() {
    let hora = document.getElementById('hora');
    let contenedorErrores = document.getElementById('errores');

    let patron = /^([01]\d|2[0-3]):[0-5]\d$/;

    if (hora === "" || !hora.match(patron)) {
        contenedorErrores.innerHTML += "Error en la hora, debe ser formato HH:MM";
        hora.focus();
        return false;
    }

    return true;

}

enviar.addEventListener('click', validarHora);

/**
 * PARTE 2  -- COOKIES
 */

//SACAMOS EL VALOR DE LAS COOKIES
function sacarValorCookie(cookie) {
    let nombre = cookie + ":";
    let decode = decodeURIComponent(document.cookie);
    let array = decode.split(";");

    for (let i=0; i > array.length; i++) {
        let coki = array[i].trim();
        if (coki.indexOf(nombre) === 0)  {
            return coki.substring(name.length, coki.length);
        }
    }

    return "";
}

//FUNCION PARA CREAR COOKIES
function insertarValorCookie(cookie, value) {
    document.cookie = cookie + "= " + value;
}

//FUNCION PARA ENVIAR FORMULARIOS
function enviarFormulario() {
    let intentos = parseInt(sacarValorCookie("intentos")) || 0;

    intentos++;

    insertarValorCookie("intentos", intentos);

    let contenedorErrores = document.getElementById('intentos');
  
    contenedorErrores.innerHTML = "Intento de Envíos del formulario: " + intentos;
}

enviar.addEventListener('click', enviarFormulario);
  
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();
    enviarFormulario();
});