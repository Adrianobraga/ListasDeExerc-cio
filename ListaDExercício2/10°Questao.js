//10°)

let TotalDeHoras =  160;
let SalarioPHora = 4.88;
let HorasTrabalhadas = 160;
let Somatorio = SalarioPHora * TotalDeHoras;
if(HorasTrabalhadas <= TotalDeHoras){
    console.log("O salário recebido no final do mês foi de",Somatorio);
}else{
    console.log("O salário recebido no final do mês foi de",Somatorio*1.5);
}