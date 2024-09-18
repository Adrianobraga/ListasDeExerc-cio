//12°)

let Salario = 1000;
let vendas = 1000;
let Calculo = vendas *0.03;
let SalarioFinal = Salario + Calculo;
if(SalarioFinal < 1500){
    console.log("o salario será de",SalarioFinal);
}else{
    console.log("o salario será",SalarioFinal * 1.05);
}