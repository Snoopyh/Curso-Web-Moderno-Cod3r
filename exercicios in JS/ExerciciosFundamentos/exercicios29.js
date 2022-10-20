/*Crie uma função que recebe um array de números e retorna 
o segundo maior número presente nesse array*/
function segundoMaior(array){
  let resultado = array.sort((numeroA , numeroB) => numeroB - numeroA )
  
  return resultado[1]
}

console.log(segundoMaior([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior([8, 4, 5, 6])) // retornará 6

// resolução cod3r
function segundoMaior1(numeros){
  let indiceMaior = 0
  let segundoMaior
  numeros.forEach((numero , indice) => {
    if(numero > numeros[indiceMaior])
      indiceMaior = indice
  })

  numeros.splice(indiceMaior , 1)
  segundoMaior = numeros[0]

  numeros.forEach(numero =>{
    if(numero > segundoMaior)
    segundoMaior = numero
  })
  return segundoMaior
}
console.log(segundoMaior1([12, 16, 1, 5])) // retornará 12
console.log(segundoMaior1([8, 4, 5, 6])) // retornará 6

// resolução 2 cod3r
function segundoMaior2(numeros){
  const MaiorNumero = Math.max(...numeros)
  numeros = numeros.filter(numero => numero != MaiorNumero)
  const SegundoMaior = Math.max(...numeros)
  return SegundoMaior
}
console.log(segundoMaior2([20 , 23 ,27 ,30])) // return 27
