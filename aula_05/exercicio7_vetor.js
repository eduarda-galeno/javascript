const leia = require('readline-sync')

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6]
let numeroVetor = false

let numero = leia.questionInt("Digite o número que deseja encontrar: ")

for(let indice = 0; indice < vetor.length; indice++){
    console.log(`O número ${numero} foi localizado na posição ${indice}`)
    encontrado = true
    break
}

if(!encontrado){
    console.log(`O número ${numero} não foi encontrado no vetor`)
}
