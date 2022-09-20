// armazenando uma função em uma variavel 
const imprimirSoma = function imprimirSoma(a,b) {
  console.log(a + b)
}
console.log(imprimirSoma(2,6))

//armazenando uma função arrow em uma variavel

const soma = (a,b) => {
  return a + b
}
console.log(soma(5,6))

//  retorno implicito
const subtracao = (a,b) => a - b
console.log(subtracao(8,9))

const imprimir2 = a => console.log(a)
imprimir2('legal')