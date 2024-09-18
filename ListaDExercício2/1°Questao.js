//1°)

let A = true;
let B = true;
let C = false;

let resultado1 = (A && B) || (A || B);
let resultado2 = (A || B) && (A && C);
let resultado3 = (A || C) && (B || A) && (!B);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);