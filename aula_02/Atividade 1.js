const leia = require('readline-sync')

let salario = leia.questionInt("Digite o valor do salario: ")
console.log('\nSalario: ', salario)

let abono = leia.questionInt("Digite o valor do abono: ")
console.log('\nAbono: ', abono)

let novoSalario = (salario + abono) 
console.log('\nNovo Salario: ', novoSalario)