let pessoas = [
    {nome: "Victor", idade: 27, dirige: false},
    {nome: "Lidia", idade: 27, dirige: true},
    {nome: "Eric", idade: 18, dirige: false},
    {nome: "Daniel", idade: 30, dirige: true},
    {nome: "Keline", idade: 30, dirige: true},
    {nome: "Francisco", idade: 25, dirige: true}
]

    console.table(pessoas)
for(let i = 0; i < pessoas.length; i++){
    console.log()
    console.log(`Nome: ${pessoas[i].nome}`)
    console.log(`Idade: ${pessoas[i].idade}`)
    console.log(`Dirige: ${pessoas[i].dirige ? "Sim" : "Não"}`)
}