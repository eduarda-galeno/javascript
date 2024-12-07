const leia = require('readline-sync')

let soma = 0
let numero = leia.questionInt("Digite um número: ")

do {
    if (numero > 0) {  
        soma += numero;
    }

    numero = leia.questionInt('Digite um número: ');  
} while (numero !== 0);  



console.log("A soma dos números positivos é: ", soma)