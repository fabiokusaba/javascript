# Condições em JS - Parte 2
- Condições aninhadas: vou pegar uma condição composta e vou colocar outras condições dentro dela. Veja o exemplo a seguir:
  
  if(condição1) {
    bloco 1
  } else {
    if(condição2) {
        bloco 2
    } else {
        bloco 3
    }
  }

- Condição múltipla: valores fixos. Veja o exemplo a seguir:
  
  switch(expressão) {
    case valor1:
        bloco1
        break (obrigatório)
    case valor2:
        bloco2
        break (obrigatório)
    case valor3:
        bloco3
        break (obrigatório)
    default:
        bloco
        break (opcional)
  }