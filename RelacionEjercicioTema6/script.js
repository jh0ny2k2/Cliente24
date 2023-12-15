/**
 * INDEX
 * @param {*} seccionId 
 */

// FUNCION PARA MANEJAR LAS REDIRECCIONES
function irASeccion(seccionId) {

    window.location.replace(seccionId + '.html');
}

// Función para manejar las cookies
function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}
// FUNCION PARA COGER LAS COOKIES
function getCookie(nombre) {
    var nombreEQ = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nombreEQ) == 0) return cookie.substring(nombreEQ.length, cookie.length);
    }
    return null;
}

// FUNCION PARA INCREMENTAR LAS VISITAS
function incrementarVisitas() {
    var visitas = getCookie("visitas") || 0;
    visitas++;
    setCookie("visitas", visitas, 30);
    return visitas;
}

// FUNCION PARA INCREMENTAR LAS VISITAS AL RECARGAR LA PANTALLA
window.onload = function () {
    var numeroVisitas = incrementarVisitas();
    document.getElementById("contadorVisitas").innerText = "Número de visitas: " + numeroVisitas;
};


/**
 * PERFIL DE ADMINISTRADOR
 */

let enviar = document.getElementById('enviar');

function validarFormulario () {
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let contrasena = document.getElementById('contrasena').value;
    let verificacion = document.getElementById('verificacion').value;
    let fecha = document.getElementById('fecha').value;

    let patronNombre = /^[A-Za-z]+$/;
    let patronApellidos = /^[A-Za-z]+$/;
    let patronContrasena = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[.,;-])[a-zA-Z\d.,;-]+$/;
    let patronFecha = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if (!patronNombre.test(nombre)) {
        alert('Error en el apartado de nombre: ');
        return false;
    }

    if (!patronApellidos.test(apellidos)) {
        alert('Error en el apartado de apellidos: ');
        return false;
    }

    if (!patronContrasena.test(contrasena)) {
        alert('Error en el apartado de contraseña');
        return false;
    }

    if (contrasena !== verificacion) {
        alert('La contraseña no coincide con su confirmación');
        return false;
    }

    if (!patronFecha.test(fecha)) {
        alert('El formato de la fecha es incorrecto.\nPor favor, introduzca la fecha del siguiente modo: dia/mes/año');
        return false;
    }

    return true;

    let mensaje = 'los datos introducidos son: \n Nombre: ' + nombre + ' \n Apellidos: ' + apellidos + '\n Fecha: ' + fecha;

    document.getElementById('resultado').innerText = mensaje ;

    


}