Variáveis compostas
Diferenças entre variáveis simples x variáveis compostas:
- Variáveis simples: só conseguem armazenar um valor por vez.
- Variáveis compostas: devem ser capazes de armazenar vários valores em uma mesma estrutura.

Forma de declaração:
a -> Array/Vetor
Elementos: um vetor é composto de elementos, um elemento de um vetor é um par que agrupa o espaço na memória, o valor colocado dentro dele e o índice.
carro1, carro2, carro3 -> Conteúdo/Valor
0 1 2 -> Índice/Chave

vaga a = [carro1, carro2, carro3]

       0       1       2
a = [carro1, carro2, carro3]

let num = [4, 5, 6, 7, 8]
Para acrescentar mais um valor no meu vetor num basta fazermos: num[3] = 6
Para acrescentarmos valores a um vetor utilizando um método interno: num.push(7)
Para sabermos o comprimento do vetor utilizamos o atributo: num.length
O método num.sort() vai pegar todos os elementos do vetor e colocá-los em ordem crescente

Utilizando laços de repetição com vetores
Percurso em vetores com for:
for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
};

Percurso em vetores e objetos com for in:
for(let pos in num) {
    console.log(num[pos])
}

Buscando valores em vetores:
- Para buscar valores dentro do meu vetor eu vou utilizar o método indexOf(), por exemplo: num.indexOf(7) retorna 3.
- Nos casos de busca em que o valor não for encontrado dentro do vetor o retorno vai ser -1.