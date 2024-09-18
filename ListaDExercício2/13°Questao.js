//13°)

let numeroDaConta = 91392391;
let cliente = "Adriano";
let saldo = 10000;
let debito = 5000;
let credito = 2500;
let SaldoAtual = saldo - debito + credito;
if(SaldoAtual > 0){
    console.log("Saldo Positivo");
}else{
    console.log("Saldo Negativo");
}