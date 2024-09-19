//23°)

let valor1 = 10;
let valor2 = 5;
let soma = 0;
if (valor1 > valor2) {
    let temp = valor1;
    valor1 = valor2;
    valor2 = temp;
}
for (let i = valor1; i <= valor2; i++) {
    soma += i;
}
console.log(soma);