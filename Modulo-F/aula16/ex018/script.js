// Selecionando elementos
let num = document.querySelector('#txtnum')
let lista = document.querySelector('#selnum')
let res = document.querySelector('#res')

// Criando um array vazio
let valores = []

// Função para verificar se o número está dentro do range 1 a 100
function isRange(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

// Função para verificar se o número foi encontrado na lista
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  // Se o número está no range e o número não está na lista
  if (isRange(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value)) // Adicionando o número no array

    // Criando option do select
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado.` // Adicionando texto ao option
    lista.appendChild(item) // Adicionando o option ao select

    res.innerHTML = '' // Limpando resultado
  } else {
    alert('Valor inválido ou já encontrado na lista.')
  }

  num.value = '' // Limpando o input
  num.focus() // Dando foco no input
}

function finalizar() {
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar.')
  } else {
    let total = valores.length // Comprimento do array
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      soma += valores[pos]

      if (valores[pos] > maior) {
        maior = valores[pos]
      }
      if (valores[pos] < menor) {
        menor = valores[pos]
      }
    }

    media = soma / total

    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
  }
}