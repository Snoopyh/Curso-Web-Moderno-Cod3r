// funcao sem retorno
function imprimirSoma(a , b){
  console.log(a + b)
}
imprimirSoma(3,4)
imprimirSoma(2)
imprimirSoma(2,10,5,6,87,9,8)
imprimirSoma()

// funcao com retorno

function soma(a , b = 1){
  return a + b
}
console.log((2+8))
console.log((2))