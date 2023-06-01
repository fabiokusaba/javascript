let btnEnviar = document.querySelector('#btn-enviar')
btnEnviar.addEventListener('click', exibirDados)

function exibirDados() {
    let nomeInput = document.querySelector('#txtnome')
    let idadeInput = document.querySelector('#txtidade')
    let hobbiesInput = document.querySelector('#txthobby')
    let resultado = document.querySelector('#resultado')

    if(nomeInput.value.length == 0 || idadeInput.value.length == 0 || hobbiesInput.value.length == 0) {
        alert('[ERRO] Por favor, preencha os dados e envie novamente.')
    } else {
        let nome = nomeInput.value 
        let idade = idadeInput.value
        let hobbies = hobbiesInput.value 
    
        if(idade >= 18) {
            resultado.innerHTML += `Maior de idade </br>`
        }
        if(idade < 18) {
            resultado.innerHTML += `Menor de idade </br>`
        }
        if(idade >= 50) {
            resultado.innerHTML += `Senhor(a) </br>`
        }
    
        resultado.innerHTML += `Meu nome é ${nome}, tenho ${idade} anos e meu hobby é ${hobbies}.`
    }

}