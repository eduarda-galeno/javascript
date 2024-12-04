const leia = require('readline-sync')

console.log("\nLista dos cargos e seus códigos.")
console.log("1 - Gerente")
console.log("2 - Vendedor")
console.log("3 - Supervisor")
console.log("4 - Motorista")
console.log("5 - Estoquista")
console.log("6 - Tecnico de TI")

let nome = leia.question("\nInsira o seu nome: ")
let codCargo = leia.questionInt("Digite o código correspondente ao seu cargo: ")
let salario = leia.questionFloat("Digite seu salario: ")
let salarioNovo

switch(codCargo) {
    case 1:
        salarioNovo = salario + (0.1 * salario)
        cargo = "Gerente"
        break;
    case 2:
        salarioNovo = salario + (0.07 * salario)
        cargo = "Vendedor"
        break;
    case 3:
        salarioNovo = salario + (0.09 * salario)
        cargo = "Supervisor"
        break;
    case 4:
        salarioNovo = salario + (0.06 * salario)
        cargo = "Motorista"
        break;
    case 5:
        salarioNovo = salario + (0.05 * salario)
        cargo = "Estoquista"
        break;
    case 6: 
        salarioNovo = salario + (0.08 * salario)
        cargo = "Tecnico de TI"
        break;
    default:
        console.log("Digite um código válido de 1 a 6.")
}

salarioNovo = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(salarioNovo)
console.log(`Nome do colaborador: ${nome} Cargo: ${cargo} Salario ${salarioNovo}`)