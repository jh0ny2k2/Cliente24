let variable1;
let variable2;

variable1 = prompt('Introduce un numero');
variable2 = prompt('Introduce otro numero');

//CREAMOS UNA FUNCION PARA REALIZAR LA SUMA DE LAS DOS VARIABLES
function suma (variable1, variable2) {

    //HACEMOS LA SUMA Y LA GUARDAMOS EN UNA VARIABLE CREADA 
    let suma = variable1 + variable2;
    
    document.write("La suma de los numeros es: " + suma);
    
}

//CREAMOS UNA FUNCION PARA REALIZAR EL PRODUCTO DE LA PRIMERA Y LA SEGUNDA
function producto(variable1,  variable2){
    
    //HACEMOS EL PRODUCTO Y LO GUARDAMOS EN UNA VARIABLE CREADA
    let producto = variable1/variable2;

    document.write("El producto de los dos numeros es: " + producto);
}