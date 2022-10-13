function maiorQue(a , b , ...params){
  if(a >= b ){
    return false
  }
  else{
    return a >= b
  }
}
console.log(maiorQue(7 , 9))
console.log(maiorQue(17 , 9))

function maiorOuIgual(primeiro, segundo) {
  console.log(typeof primeiro)
  if(typeof primeiro != typeof segundo) return false
  return primeiro >= segundo
  }
  
  console.log(maiorOuIgual(17 , 9))