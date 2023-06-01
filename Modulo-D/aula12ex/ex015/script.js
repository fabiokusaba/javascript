var btnVerificar = document.querySelector('input#btn-verificar');
btnVerificar.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formularioAno = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var formularioSexo = document.getElementsByName('radsex')
        var idade = ano - Number(formularioAno.value)
        var genero = ''

        if(formularioSexo[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if(formularioSexo[1].checked) {
            genero = 'Feminino'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if(idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-mulher.jpg')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos o sexo: ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}