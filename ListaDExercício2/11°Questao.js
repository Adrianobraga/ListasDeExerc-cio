//11°)

let sexo = "m";
let altura = 1.70;
let pesoIdealMasculino = (72.7 * altura) - 58;
let pesoIdealFeminino = (62.1 * altura) - 44.7; 
if(sexo == "m"){
    console.log("O peso ideal seria:", pesoIdealMasculino);
}else{
    console.log("O peso ideal seria:", pesoIdealFeminino);
}
