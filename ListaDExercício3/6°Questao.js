//6°)

let Resposta = "S";
while(Resposta == "S"){
let Parcial = 10 ; 
let Bimestral = 10 ;
while(Parcial > 10 || Parcial < 0){
    console.log("Valor invalido");
}
while(Bimestral > 10 || Bimestral < 0){
    console.log("Valor invalido");
}
let Media = (Parcial+Bimestral)/2;
console.log(Media);
console.log("NOVO CÁLCULO (S/N)?");
Resposta = "N";
}