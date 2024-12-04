const leia = require('readline-sync')

let A = leia.question("\nDigite o numero A: ")
let B = leia.question("\nDigite o numero B: ")
let C = leia.question("\nDigite o numero C: ")
let soma = A + B

if(soma > C) {
    console.log("A soma de A + B é maior que C");
}else if(soma < C) {
    console.log("A soma de A + B é menor que C")
}else{
    console.log("A soma de A + B é igual a C")
}
   
