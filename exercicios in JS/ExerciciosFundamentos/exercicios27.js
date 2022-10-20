/*Desenvolva uma função que recebe um objeto como parâmetro
 e retorne um outro objeto que corresponde ao ao
objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas, 
conforme exemplo a seguir:*/
function inverter(obj){
  const resultado = {}
Object.entries(obj).forEach( ObjInvertido => {
  const chave = 0,
        valor = 1 
 resultado[ ObjInvertido[valor] ] = ObjInvertido[chave]

})
return console.log(resultado)
}
inverter({ a: 1, b: 2, c: 3}) // retornará { 1: "a", 2: "b", 3: "c"}

// resolução cod3r
function inverterObj(obj){
  const paresDeChaveValorInvertidos = Object.entries(obj)
  .map( parChaveValor => parChaveValor.reverse())
  return Object.fromEntries(paresDeChaveValorInvertidos)
}
console.log(inverterObj({ a: 1, b: 2, c: 3}) )