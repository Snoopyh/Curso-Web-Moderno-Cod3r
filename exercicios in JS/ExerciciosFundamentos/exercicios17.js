//Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
function somarNumeros(array){
  const quantidadeNumeros = array.length
  return (quantidadeNumeros === 0) ? 0 : array[0] + somarNumeros(array.slice(1))
}
console.log(somarNumeros([2 , 5 ,6 ,9 , 5]))

// outra formar cod3r
function somarNumeros1(numeros){
  let soma = 0
  numeros.forEach(numero => soma += numero)
  return soma
}
console.log(somarNumeros1([2 , 5 ,6 ,9 , 6]))

// outra forma cod3r
function somarNumeros2(numeros){
  const soma = numeros.reduce((acumulador , numeroAtual) => acumulador + numeroAtual, 0)
  return soma
}
console.log(somarNumeros2([2 , 5 ,6 ,9 , 6, 10]))
