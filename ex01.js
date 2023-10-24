const readline = require('readline-sync')
let notaMaior = 0
let alunoNotaMaior = ""
let somaNotas = 0
let alunos = []

// let alunos = [
//     {nome: "Victor", nota: 8},
//     {nome: "Daniel", nota: 10},
//     {nome: "Joao", nota: 9},
//     {nome: "Leticia", nota: 2},
//     {nome: "Jairo", nota: 1},
//     {nome: "Francisco", nota: 4},
//     {nome: "Lidia", nota: 8},
//     {nome: "Glenda", nota: 7}
// ]

 

for(let i = 0; i < 5; i++ ){
    let nomeAluno = readline.question("Nome do aluno: ")
    let notaAluno = readline.questionFloat("Nota do aluno: ")

    alunos.push({nome: nomeAluno, nota:notaAluno})
}

for(let i = 0; i < alunos.length; i++){
    somaNotas += alunos[i].nota
}

let mediaTurma = somaNotas/alunos.length

for(let i = 0; i < alunos.length; i++){
    if(alunos[i].nota > notaMaior){
        notaMaior = alunos[i].nota
        alunoNotaMaior = alunos[i].nome
    }
}
console.log(`Media da turma: ${mediaTurma}`)
console.log("Aluno com maior nota: " + alunoNotaMaior)
console.log("Nota deste aluno: " + notaMaior)