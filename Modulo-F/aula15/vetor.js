let valores = [8, 1, 7, 4, 2, 9]
valores.sort() // Ordenando array

// console.log(valores)

// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

// Iterando sobre um array
// for (let pos = 0; pos < valores.length; pos++) {
//   console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
// }

// Estrutura for in para variáveis compostas e objetos
for (let pos in valores) {
  console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}