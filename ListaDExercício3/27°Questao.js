//27°)

let maior = -100;
let menor = 100;

for (let i = 0; i < 100; i++) {
    let valor = i - 50; 
    if (valor > maior) {
        maior = valor;
    }
    if (valor < menor) {
        menor = valor;
    }
}

console.log(maior);
console.log(menor);