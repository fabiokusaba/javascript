function gerar() {
  // Selecionando elementos
  var numInput = document.getElementById('txtnum')
  var tab = document.querySelector('select#seltab')

  // Verificando se o input está vazio
  if (numInput.value.length == 0) {
    alert('Impossível calcular! Por favor, digite um número.')
  } else {
    // Convertendo string em number
    var num = Number(numInput.value)

    // Iterando tabuada
    let cont = 1 // Contador
    tab.innerHTML = '' // Limpando os dados
    while (cont <= 10) {
      let item = document.createElement('option') // Criando elemento option
      item.text = `${num} x ${cont} = ${num * cont}` // Adicionando texto no elemento
      item.value = `tab${cont}` // Adicionando o value ao elemento
      tab.appendChild(item) // Adicionando o option ao select
      cont++ // Incrementando o contador
    }
  }
  
}