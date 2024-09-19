//19°)

let numAlunos = 5;
let somaNotas = 0;
for (let i = 0; i < numAlunos; i++) {
    let nota = 7 + i; 
    somaNotas += nota;
}
let media = somaNotas / numAlunos;
console.log(media);