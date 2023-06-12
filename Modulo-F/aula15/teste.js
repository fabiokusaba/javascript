// Declarando um array/vetor
let num = [5, 8, 2, 9, 3]

// Acrescentando valores em um array
num[5] = 6
num.push(7) // Adiciona ao final do array

// Comprimento de um array
num.length

// Ordenando um array em ordem crescente
num.sort()


// Procurando elementos dentro do array
let pos = num.indexOf(8) // Retorna o índice do elemento
num.indexOf(10) // Retorna -1 para o elemento não encontrado

if (pos == -1) {
  console.log('O valor não foi encontrado!')
} else {
  console.log(`O valor 8 está na posição ${pos}`)
}

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)