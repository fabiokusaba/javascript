function verificar() {
  var data = new Date()
  var ano = data.getFullYear()

  var fAno = document.getElementById('txtano')
  var res = document.querySelector('div#res')

  // Verifica se a caixa está vazia ou se o ano digitado é maior que o ano atual
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fSex[0].checked) {
      genero = 'Homem'

      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/bebe-m.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/jovem-m.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'imagens/adulto-m.jpg')
      } else {
        // Idoso
        img.setAttribute('src', 'imagens/idoso-m.jpg')
      }

    } else if (fSex[1].checked) {
      genero = 'Mulher'

      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'imagens/bebe-f.jpg')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'imagens/jovem-f.jpg')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'imagens/adulto-f.jpg')
      } else {
        // Idoso
        img.setAttribute('src', 'imagens/idoso-f.jpg')
      }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
    res.appendChild(img)
  }
}