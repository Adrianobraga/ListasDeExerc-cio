//17°)

let CodigoDoUsuario = 1234;
let SenhaDoUsuario = 9999;
let CodigoArmazenado = 1234;
let SenhaArmazenada = 9999;
if(CodigoDoUsuario == CodigoArmazenado){
 if(SenhaDoUsuario == SenhaArmazenada){
    console.log("Acesso permitido");
 }else{
    console.log("‘senha incorreta");
 }   

}else{
    console.log("Usuário inválido!")
}