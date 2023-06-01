// Operadores do JS - Parte 02
/*
// Relacionais
- Para toda expressão que tenha um operador relacional ligado a ela o resultado dessa expressão vai ser sempre um valor booleano do tipo verdadeiro ou falso

5 > 2 (Maior que) -> true
7 < 4 (Menor que) -> false
8 >= 8 (Maior ou igual que) -> true
9 <= 7 (Menor ou igual que) -> false
5 == 5 (Igual a) -> true
4 != 4 (Não igual a) -> false

// Operadores Relacionais de Identidade

- O sinal de igualdade '==' não testa o tipo, aqui comparamos a grandeza entre os dois valores
5 == 5 (Igual a) -> true
5 == '5' (Igual a) -> true
5 != '5' (Diferente de) -> false

// Operador de Identidade ou também conhecido como Operador de Igualdade Restrita
- O sinal de igualdade restrita '===' testa o tipo, aqui comparamos se os dois valores são idênticos em valor e tipo
5 === '5' (Idêntico a) -> false
5 === 5 (Idêntico a) -> true
5 !== '5' (Desigual restrito) -> true

// Operadores Lógicos
! (Negação)
&& (Conjunção - e/and)
|| (Disjunção - ou/or)

// Negação
- Tratado como operador unário, isso quer dizer que ele tem apenas um operando
!true -> false
!false -> true

// Conjunção
- Operador binário isso é eu tenho dois valores lógicos e só me satisfaz se as duas condições forem verdadeiras
true && true -> true
true && false -> false
false && true -> false
false && false -> false

// Disjunção
- Operador binário basta que apenas um deles seja verdadeiro para que o resultado seja verdadeiro
true || true -> true
true || false -> true
false || true -> true
false || false -> false

Ordem de execução:
!
&&
||

// Exemplos:
idade >= 15 && idade <= 17 (A idade está entre 15 e 17?)
estado == 'RJ' || estado == 'SP' (O estado é RJ ou SP?)
salario > 1500 && sexo != 'M' (Salário é acima de 1500 e não é homem?)

Ordem de Precedência:
() ** / (Operadores Aritméticos)
> < >= (Operadores Relacionais) -> Quem aparecer primeiro vai ser feito primeiro da esquerda para a direita
! && || (Operadores Lógicos) -> Na ordem: Negação, Conjunção, Disjunção

// Operador ternário
- O operador ternário é a ? e os : numa mesma expressão
- Chama-se ternário porque ele tem três partes que são o bloco de teste ? true : false
- O primeiro bloco é um teste lógico que dá como resultado verdadeiro ou falso
- O segundo bloco é o que vai acontecer caso esse teste lógico seja verdadeiro
- O terceiro bloco é o que vai acontecer caso esse teste lógico seja falso

media >= 7 ? "Aprovado" : "Reprovado"
*/