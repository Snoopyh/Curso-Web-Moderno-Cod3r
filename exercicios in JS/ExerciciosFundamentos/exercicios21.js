/* Criar uma função que receba um array de números e retorne o menor número desse array.*/
function menorNumero(array){
  return array.reduce((anterior , atual) => anterior < atual ? anterior : atual)
}
console.log(menorNumero([7 , 8 ,9 ,1 ,50 ,99]))

// resolução cod3r
function menorNumero1(numeros){
  let menor = numeros[0]
  for(let i in numeros)
    if(numeros[i] < menor)
    menor = numeros[i]
  
  return menor
}
console.log(menorNumero1([7 , 8 ,9 ,1 ,50 ,99]))