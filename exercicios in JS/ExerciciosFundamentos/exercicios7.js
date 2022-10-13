function estaEntre (numero ,min ,max , inclusivo = false){
  // console.log(numero , min , max)
  if(min <= numero && max >= numero){
    inclusivo = true
    console.log(numero , min , max)
    return inclusivo
  }
  else{
    inclusivo = false
    console.log(numero , min , max)
    return inclusivo
  }
  
}
// numero = 90 min = 50 max = 100
console.log(estaEntre(90 , 50 ,100))
console.log(estaEntre(16 , 100 ,160))

