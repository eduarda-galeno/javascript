const leia = require('readline-sync')

let numero = leia.questionInt("Digite um número: ")

if (numero > 0 && numero % 2 == 0){
    console.log("O número", numero, "é par e postivo")
}else if (numero > 0 && numero % 2 != 0){
    console.log("O número", numero, "é ímpar e postivo")
}else if (numero < 0 && numero % 2 == 0){
    console.log("O número", numero, "é par e negativo")
}else if(numero < 0 && numero % 2 != o){
    console.log("O número", numero, "é ímpar e negativo")
}else{
    console.log("Erro! Digite um número inteiro")
}