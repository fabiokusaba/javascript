Funções em JS
- Toda função pode ter os seguintes fatores: uma chamada, um conjunto de parâmetros, uma ação e um retorno.
- São ações executadas assim que são chamadas ou em decorrência de algum evento.
- Uma função pode receber parâmetros e retornar um resultado.

(param) -> parâmetro formal             
function ação(param) {
    bloco de código -> ação
    return res -> retorno
}

ação(5) -> chamada
(5) -> parâmetro real

Exemplo de função para saber se o número é par ou ímpar:
function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

let res = parimp(11)