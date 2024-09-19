//25°)

let Total = 0;
let NumMercadorias = 5; 
for (let i = 0; i < NumMercadorias; i++) {
    let Valor = 100 + i * 50; 
    Total += Valor;
}
let Media = Total / NumMercadorias;
console.log(Total);
console.log(Media);