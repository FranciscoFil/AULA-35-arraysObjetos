const readline = require('readline-sync')

var usuarios = {nome: "Victor", usuario: "vitec", senha:"yasuo123"}

 

var user = readline.question("Usuario: ")

var senha = readline.question("Senha: ")

 

if(senha === usuarios.senha && user === usuarios.usuario){

    console.log("Usuario autenticado com sucesso")

} else{

    console.log("Usuario ou senha invalidos")

}