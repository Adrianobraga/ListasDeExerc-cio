//7°)

let Branco = 10;
let Valido = 40;
let Nulos = 20;
let TotalDeEleitores = Branco+Valido+Nulos;

console.log("Total de Eleitores", TotalDeEleitores);
console.log("Total de votos Nulos" ,Nulos/TotalDeEleitores*100,"%");
console.log("Total de votos Branco",Branco/TotalDeEleitores*100,"%");
console.log("Total de votos Válido",Valido/TotalDeEleitores*100,"%");
