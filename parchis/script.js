let display = document.getElementById('display');

function clearDisplay() {
 display.value = '';
}

function insertNumber(number) {
 display.value += number;
}

function insertOperator(operator) {
 let lastChar = display.value.slice(-1);

 if (['+', '-', '*', '/'].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
 } else {
    display.value += operator;
 }
}

function calculateResult() {
 try {
    let result = eval(display.value);
    display.value = result;
 } catch (error) {
    alert('Error al calcular el resultado');
 }
}