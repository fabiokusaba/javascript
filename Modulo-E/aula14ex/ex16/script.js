// Selecionando botão e adicionando um Event Listener
var btnContar = document.getElementById('btn-contar')
btnContar.addEventListener('click', contar)

function contar() {
  // Selecionando elementos
  var inicioInput = document.getElementById('txtinicio')
  var fimInput = document.getElementById('txtfim')
  var passoInput = document.getElementById('txtpasso')
  var res = document.querySelector('div#res')

  // Checando se os campos estão vazios
  if (inicioInput.value.length == 0 || fimInput.value.length == 0 || passoInput.value.length == 0) {
    res.innerHTML = `Impossível contar!`
    alert('[ERRO] Faltam dados a serem preenchidos!')
  } else {
    res.innerHTML = `Contando: `

    // Convertendo valores string para number
    var inicio = Number(inicioInput.value)
    var fim = Number(fimInput.value)
    var passo = Number(passoInput.value)

    // Checando se o passo é menor ou igual a 0
    if (passo <= 0) {
      passo = 1
      alert('Passo inválido! Considerando passo = 1')
    }

    // Checando se o início é menor que o fim - Ordem crescente
    if (inicio < fim) {
      for (var cont = inicio; cont <= fim; cont += passo) {
        res.innerHTML += `${cont} \u{1F449}` // Adicionando emoji - Unicode
      }
    }

    // Checando se o início é maior que o fim - Ordem decrescente
    if (inicio > fim) {
      for (var cont = inicio; cont >= fim; cont -= passo) {
        res.innerHTML += `${cont} \u{1F449}` // Adicionando emoji - Unicode
      }
    }
    res.innerHTML += `\u{1F3C1}` // Adicionando emoji - Unicode
  }
}