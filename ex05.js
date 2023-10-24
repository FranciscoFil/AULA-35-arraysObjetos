const readline = require("readline-sync")

console.log("--- MESES DO ANO ---")

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    console.log(meses)

let question = readline.question("Informe o mes: ")



for (let i = 0; i < meses.length; i++){
    if( question === meses[i]){
    } 
}
if(meses){
    console.log(`O mes que voce escolheu foi: ${question}`)
} else {
    console.log("Mes nao encontrado na lista")
}
