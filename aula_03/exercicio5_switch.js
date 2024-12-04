const leia = require('readline-sync')

console.log("\nConheça nosso cardárpio!")
console.log("1 - Cachorro Quente - R$ 10.00")
console.log("2 - X-Salada - R$ 15.00")
console.log("2 - X-Bacon - R$ 18.00")
console.log("4 - Bauru - R$12.00")
console.log("5 - Refrigerante - R$8.00")
console.log("6 - Suco de Laranja - R$13.00")

let codProduto = leia.questionInt("Digite o código do produto: ")
let qtd = leia.questionInt("Digite a quantidade desejada: ")

let produto
let valortotal

switch(codProduto) {
    case 1:
        valortotal = 10 * qtd
        produto = "Cachorro quente"
        break;
    case 2:
        valortotal = 15 * qtd
        produto = "X-salada"
        break;
    case 3:
        valortotal = 18 * qtd
        produto = "X-bacon"
        break;
    case 4:
        valortotal = 12 * qtd
        produto = "Bauru"
        break;
    case 5:
        valortotal = 8 * qtd
        produto = "Refrigerante"
        break;
    case 6:
        valortotal = 13 * qtd
        produto = "Suco de Laranja"
    default:
        console.log("Digite um número válido de 1 a 6")

}

console.log("\n","-".repeat(25), "Valor total do produto", "-".repeat(25))
valortotal = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(valortotal)
console.log(`Produto: ${produto} Valor total: ${valortotal}`)