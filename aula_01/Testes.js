//Biblioteca de leitura de dados - Via teclado
const leia = require('readline-sync')

//Definição de variáveis
let n1=1, n2=10


//Comandos de Entrada de dados - Via teclado
n1 = leia.questionInt("\nDigite o primeiro numero: ")
n1 = leia.questionInt("\nDigite o segundo numero: ")

//Comandnos de Saída de dados em Tela
console.log("A variável N1 possui o valor: ", n1)
console.log("A variável N1 possui o valor: ", n2)

//soma = n1 + n2
//Operadores Matemáticos
console.log("\nA soma de n1 + n2 é igual a: ", n1 + n2)
console.log("\nA subtração de n1 - n2 é igual a: ", n1 - n2)
console.log("\nA multiplicação de n1 * n2 é igual a: ", n1 * n2)
console.log("\nA divisão de n1 / n2 é igual a: ", n1 / n2)
console.log("\nA raiz quadrada de n1 é igual a: ", Math.sqrt(n1))

//Funções do Objeto Math (Funções Matemáticas)
console.log("\nA Potenciação de n1 ^ n2 é igual a: ", Math.pow(n1, n2))
console.log("\nA Raiz Quadrada de n1 é igual a: ", Math.sqrt(n1))