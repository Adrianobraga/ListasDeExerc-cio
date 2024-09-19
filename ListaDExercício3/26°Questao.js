//26°)

let total = 0;
let quantidade = 0;
let mais = "S";
while (mais === "S") {
    let valor = 100 + quantidade * 50;
    total += valor;
    quantidade++;
    mais = "N"; 
}
let media = total / quantidade;
console.log(total);
console.log(media);