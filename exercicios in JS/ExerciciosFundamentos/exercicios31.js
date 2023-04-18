//Crie uma função que receba um número como parâmetro e verifique se ele é um número primo.
function isPrimo(num) {
  
  if(num <= 1){
    return false
  }
  for(let i = 2; i < num ; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

console.log(isPrimo(5))
console.log(isPrimo(10))
console.log(isPrimo(23))