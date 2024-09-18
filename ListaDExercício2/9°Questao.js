//9°)

let TempoMaximo = 24;
let InicioDePartida = 12;
let FinalDaPartida = 19;
let Calculo = FinalDaPartida - InicioDePartida; 
if(Calculo <= TempoMaximo){
    console.log("A partida durou",Calculo,"h");
}else{
    console.log("Atingiu o tempo máximo");
}