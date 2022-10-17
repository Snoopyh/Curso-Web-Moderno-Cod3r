/*Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento,
pretendese adicionar a funcionalidade de calcular
a média de um conjunto de números informados pelo usuário.
Com o intuito de realizar esse cálculo,
crie uma função que receba um array com uma quantidade indeterminada
de números e retorne a média simples desses números.
*/
function calcularMedia(array){
  const tamanhoArray = array.length
  const resultado =  array.reduce((acumulador , valorAtual ) => acumulador + valorAtual)
  return resultado / tamanhoArray
}
console.log(calcularMedia([0,10]))
console.log(calcularMedia([1, 2, 3, 4, 5]))
console.log(calcularMedia([2, 5, 2, 7, 50]))

// resolução cod3r
function CalcularMedia1(array){
  const quantidadeNoArray = array.length
  let somaTotal = 0
  for(numero of array){
    somaTotal += numero
  }
  return somaTotal / quantidadeNoArray
}
console.log(CalcularMedia1([0,10]))
console.log(CalcularMedia1([1, 2, 3, 4, 5]))
console.log(CalcularMedia1([2, 5, 2, 7, 50]))
