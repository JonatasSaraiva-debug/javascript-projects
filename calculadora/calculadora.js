let numero1 = parseInt(prompt("digite um numero"))

let numero2 = parseInt(prompt("digite um numero"))

let operacao = prompt("digite a operação que deseja realizar: +, -, *, /")

let resultado

if (operacao === "+") {
    resultado = numero1 + numero2;
} else if (operacao === "-") {
    resultado = numero1 - numero2;
} else if (operacao === "*") {
    resultado = numero1 * numero2;
} else if (operacao === "/") {
    resultado = numero1 / numero2;
}

alert("o resultado da " + operacao + " é " + resultado)
