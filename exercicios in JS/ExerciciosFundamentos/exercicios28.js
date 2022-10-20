/*Elabore uma função que recebe dois parâmetros:
o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos.
Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.*/
function filtrarPorQuantidadeDeDigitos(numeros , quantidadeDesejada){
  return numeros.filter(numero => {
    const quantidadeDigitos = String(numero).length
    return quantidadeDigitos === quantidadeDesejada
  })
}


console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) 
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 3))

// resolução cod3r 
function filtrarPorQuantidadeDeDigitos1(numeros , quantidadeDesejada){
  let resultado = []
  for(numeroDoArray of numeros){
    const quantidadeDigitos = String(numeroDoArray).length
    if(quantidadeDigitos === quantidadeDesejada)
    resultado.push(numeroDoArray)
  }
  return resultado
}
console.log(filtrarPorQuantidadeDeDigitos1([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos1([5, 9, 1, 125, 11], 1)) 
console.log(filtrarPorQuantidadeDeDigitos1([38, 2, 365, 10, 125, 11], 3))
