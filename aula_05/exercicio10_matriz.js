const leia = require('readline-sync');

let notas = []
let matriz = new Array(9);
let medias = [];

for(let indice=0; indice < matriz.length; indice++){
    matriz[indice] = new Array(4);
}

for(let indiceLinha =0; indiceLinha < matriz.length; indiceLinha++){
    let somaLinha = 0
    for (let indiceColuna = 0; indiceColuna < matriz[indiceLinha].length; indiceColuna++){
        matriz[indiceLinha][indiceColuna] = leia.questionInt('Digite a nota: ');
        somaLinha += matriz [indiceLinha][indiceColuna]
    }
    medias[indiceLinha] = ((somaLinha / matriz [indiceLinha].length).toFixed(1))
}
console.table(matriz);
console.log("As médias de cada aluno de acorcdo com as linhas respectivamente: ", medias);