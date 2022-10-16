function ObjetoParaArray(objeto){
  Object.entries(objeto).forEach(([chave = Object.keys(objeto) , valor = Object.values(objeto)]) => {
    console.log([chave , [valor]])
 }) 
  return objeto
}
ObjetoParaArray({
  nome: 'joao',
  idade: 13 
})

//resolução da cod3r
function objetoParaArray1(objeto) {
  const resultado = []
  for(let chave in objeto)
    resultado.push(chave , objeto[chave])
    return resultado
}
console.log(objetoParaArray1({
  nome: 'joao',
  idade: 13 ,
}))

//resolução 2
function objetoParaArray2(objeto) {
  const chaves = Object.keys(objeto)
  const resultado = chaves.map(chave => [chave , objeto[chave]])
  return resultado

}
console.log(objetoParaArray2({
  nome: 'joao',
  idade: 13 ,
}))

//resolução 3
function objetoParaArray3(objeto) {
  return Object.entries(objeto)
  }
  console.log(objetoParaArray3({
    nome: 'joao',
    idade: 13 ,
  }))
  