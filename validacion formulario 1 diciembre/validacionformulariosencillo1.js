window.onload=iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",validarTodo,false);
    document.getElementById("nombre").addEventListener("blur",mayusculas,false);
    document.getElementById("apellidos").addEventListener("blur",mayusculas,false);
}
 function validarTodo(eventopordefecto){
    if(comprobarNombre() && comprobarApellido()&& comprobarEdad()&& matricula()&& provincias()&& confirm("desea realmente enviar el formulario")) {
        return true;

    }else{
        eventopordefecto.preventDefault();
        return false;
    }
   



 }
 function comprobarNombre(){

    let nombre=document.getElementById("nombre");
    nombre.className="";
    if(nombre.value==""){
        nombre.focus();
        nombre.className="error";
        alert("el nombre  no puede estar vacio");
        return false;
    }else{
        nombre.className="";
        return true;
    }

 }
 function comprobarApellido(){

    let apellido=document.getElementById("apellidos");
    apellido.className="";
    if(apellido.value==""){
        apellido.focus();
        apellido.className="error";
        alert("el apellido no puede estar vacio");
        return false;
    }else{
        apellido.className="";
        return true;
    }

 }

 function mayusculas(){
    this.value=this.value.toUpperCase();
 }
 function comprobarEdad(){
    let edad=document.getElementById("edad");
    edad.className="";
    if(edad.value=="" ||edad.value<18||isNaN(edad.value)){
        edad.focus();
        edad.className="error";
        alert("la edad no es correcta");
        return false
    }else{
        edad.className="";
        return true;
    }
 }
 function matricula() {
    let matricula=document.getElementById("matricula");
    let patron=/^\d{4}\s?[A-Z]{3}$/; //* 4 digitos un espacio opcional seguido de tres caracteres*/
    if (patron.test(matricula.value)){
        matricula.className="";
        return true;
        
    }else{
        matricula.className="error";
        alert ("la matricula no es correcta");
        return false;
    }
 }
 function provincias(){
    let provincia=document.getElementById("provincia");
    provincia.className="";
    if(provincia.selectedIndex===0){
        provincia.focus();
        provincia.className="error";
        alert("Debes de seleccionar una provincia")
        return false;
    }else{
        provincia.className="";
        return true;
    }
 }