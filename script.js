function soma() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = num1 + num2;
    document.getElementById("resultado").value = resultado;
}

function subtrai() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = num1 - num2;
    document.getElementById("resultado").value = resultado;
}

function multiplica() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = num1 * num2;
    document.getElementById("resultado").value = resultado;
}

function divide() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var resultado = num1 / num2;
    document.getElementById("resultado").value = resultado;
}

// soma
function add(a, b) {
    return a + b;
}

// subtração
function subtract(a, b) {
    return a - b;
}

// multiplicação
function multiply(a, b) {
    return a * b;
}

// divisão
function divide(a, b) {
    return a / b;
}

// exemplo de uso
const x = 10;
const y = 5;

const sum = add(x, y);
console.log(sum); // output: 15

const difference = subtract(x, y);
console.log(difference); // output: 5

const product = multiply(x, y);
console.log(product); // output: 50

const quotient = divide(x, y);
console.log(quotient); // output: 2
