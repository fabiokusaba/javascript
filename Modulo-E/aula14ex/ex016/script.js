let btnContar = document.querySelector('input#btn-contar')
btnContar.addEventListener('click', contar)

function contar() {
    let inicioInput = document.querySelector('input#txtinicio')
    let fimInput = document.querySelector('input#txtfim')
    let passoInput = document.querySelector('input#txtpasso')
    let resultado = document.querySelector('div#resultado')

    // Checando se os campos estão todos preenchidos
    if(inicioInput.value.length == 0 || fimInput.value.length == 0 || passoInput.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        alert('[ERRO] Faltam dados a serem preenchidos!')
    } else {
      resultado.innerHTML = `Contando: </br>`

      let inicio = Number(inicioInput.value)
      let fim = Number(fimInput.value)
      let passo = Number(passoInput.value)

      // Se o passo for menor ou igual a 0
      if(passo <= 0) {
        alert('Passo inválido! Considerando Passo = 1')
        passo = 1
      }
    
      // Se o valor do inicio for menor que o valor do fim
      if(inicio < fim) {
        // Contagem crescente
        for(let contador = inicio; contador <= fim; contador += passo) {
            resultado.innerHTML += ` ${contador} \u{1F449}`
          }
        } else {
            // Contagem regressiva
            for(let contador = inicio; contador >= fim; contador -= passo) {
                resultado.innerHTML += ` ${contador} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}    

