function inverso (params){
   const tipo = typeof params
 if(tipo == "boolean"){
    return !params}
 else if(tipo == "number"){
  return -params
 }
 else{
   return `booleano ou número esperados, mas o parâmetro é do tipo ${tipo}`

 }
 
}

console.log(inverso(true))
console.log(inverso(7))
console.log(inverso('aaa'))
