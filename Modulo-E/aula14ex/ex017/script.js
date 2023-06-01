let btn = document.querySelector('input#btn-tabuada')
btn.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    let numeroInput = document.querySelector('input#txtnumero')
    let selectTabuada = document.querySelector('select#select-tabuada')

    if(numeroInput.value.length == 0) {
        alert('[ERRO] Por favor, preencha um número.')
    } else {
        let numero = Number(numeroInput.value)
        selectTabuada.innerHTML = ''
        for(n = 1; n <= 10; n++) {
            let tabuada = numero * n
            // Criando um elemento option
            let item = document.createElement('option')
            // Passando a minha tabuada
            item.text = `${numero} x ${n} = ${tabuada}`
            // Adicionando um value para a option
            item.value = `tab${n}`
            // Adicionando ao meu select tabuada
            selectTabuada.appendChild(item)
        }
    }
}