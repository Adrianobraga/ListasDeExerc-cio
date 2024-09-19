//30°)

let somaSalarios = 0;
let somaFilhos = 0;
let maiorSalario = 100;
let salariosBaixos = 0;
let habitantes = 5;  

for (let i = 0; i < habitantes; i++) {
    let salario = (i + 1) * 100;  
    let filhos = i;  
    somaSalarios += salario;
    somaFilhos += filhos;
    if (salario > maiorSalario) {
        maiorSalario = salario;
    }
    if (salario < 150) {
        salariosBaixos++;
    }
}

let mediaSalarios = somaSalarios / habitantes;
let mediaFilhos = somaFilhos / habitantes;
let percentualSalariosBaixos = (salariosBaixos / habitantes) * 100;

console.log(mediaSalarios);
console.log(mediaFilhos);
console.log(maiorSalario);
console.log(percentualSalariosBaixos);