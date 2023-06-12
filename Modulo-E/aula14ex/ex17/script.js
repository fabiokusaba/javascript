// Selecionando o botão e adicionando um Event Listener
var btn = document.getElementById('btn-calcular')
btn.addEventListener('click', gerar)

function gerar() {
  // Selecionando elementos
  var numInput = document.getElementById('txtnum')
  var res = document.querySelector('div#res')

  // Convertendo string em number
  var num = Number(numInput.value)
  
  // Iterando tabuada
  for (var n = 1; n <= 10; n++) {
    res.innerHTML += `<p> ${num} x ${n} = ${num * n}</p>`
  }
}