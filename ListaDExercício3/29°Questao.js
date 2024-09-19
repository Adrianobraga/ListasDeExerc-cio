//29°)

let maiorPreco = 100;
let somaPrecos = 0;

for (let i = 0; i < 15; i++) {
    let preco = (i + 1) * 10; 
    if (preco > maiorPreco) {
        maiorPreco = preco;
    }
    somaPrecos += preco;
}

let mediaPrecos = somaPrecos / 15;

console.log(maiorPreco);
console.log(mediaPrecos);