// Función para incrementar el número de intentos en la cookie
function incrementarIntentos() {
    var intentos = obtenerIntentos();
    intentos = intentos ? intentos + 1 : 1;
    document.cookie = "intentos=" + intentos;
    mostrarIntentos(intentos);
  }
  
  // Función para obtener el número de intentos de la cookie
  function obtenerIntentos() {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      if (cookie.startsWith("intentos=")) {
        return parseInt(cookie.substring("intentos=".length), 10);
      }
    }
    return null;
  }
  
  // Función para mostrar el número de intentos en el contenedor "intentos"
  function mostrarIntentos(intentos) {
    document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + intentos;
  }
  
  // Función para convertir a mayúsculas cuando los campos pierden el foco
  function convertirAMayusculas(elemento) {
    elemento.value = elemento.value.toUpperCase();
  }
  
  // Función para validar nombre y apellidos
  function validarNombreApellido() {
    var nombre = document.getElementById("nombre").value.trim();
    var apellidos = document.getElementById("apellidos").value.trim();
    if (nombre === "" || apellidos === "") {
      mostrarErrores("Nombre y apellidos no pueden estar vacíos.");
      if (nombre === "") document.getElementById("nombre").focus();
      else document.getElementById("apellidos").focus();
      return false;
    }
    return true;
  }
  
  // Función para validar la edad
  function validarEdad() {
    var edad = document.getElementById("edad").value.trim();
    if (!/^\d+$/.test(edad) || parseInt(edad, 10) < 0 || parseInt(edad, 10) > 90) {
      mostrarErrores("La edad debe ser un número entre 0 y 90.");
      document.getElementById("edad").focus();
      return false;
    }
    return true;
  }
  
  // Función para validar el NIF
  function validarNIF() {
    var nif = document.getElementById("nif").value.trim().toUpperCase();
    if (!/^\d{8}-[A-Z]$/.test(nif)) {
      mostrarErrores("El NIF no es válido.");
      document.getElementById("nif").focus();
      return false;
    }
    return true;
  }
  
  
  
  // Función para validar el email
  function validarEmail() {
    var email = document.getElementById("email").value.trim();
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
      mostrarErrores("El formato del correo electrónico no es válido.");
      document.getElementById("email").focus();
      return false;
    }
    return true;
  }
  
  // Función para validar la provincia
  function validarProvincia() {
    var provincia = document.getElementById("provincia").value.trim();
    if (provincia === "") {
      mostrarErrores("Debe seleccionar una provincia.");
      document.getElementById("provincia").focus();
      return false;
    }
    return true;
  }
  
  // Función para validar la matrícula
  function validarMatricula() {
    var matricula = document.getElementById("matricula").value.trim().toUpperCase();
    if (!/^\d{4}\s?[A-Z]{3}$/.test(matricula)) {
      mostrarErrores("La matrícula no es válida.");
      document.getElementById("matricula").focus();
      return false;
    }
    return true;
  }
  
  // Función para mostrar errores en el contenedor "errores"
  function mostrarErrores(mensaje) {
    document.getElementById("errores").innerHTML = mensaje;
  }
  
  // Función para confirmar el envío del formulario
  function confirmarEnvio() {
    return confirm("¿Estás seguro de enviar el formulario?");
  }
  
  // Función principal para validar todo
  function validarFormulario() {
    mostrarErrores(""); // Limpiar errores
    if (
      validarNombreApellido() &&
      validarEdad() &&
      validarNIF() &&
      validarEmail() &&
      validarProvincia() &&
      validarMatricula() &&
      confirmarEnvio()
    ) {
      incrementarIntentos();
      // Aquí puedes agregar el código para enviar los datos del formulario
    }
  }