function removerObjeto(objeto ={},NameProp){
  const copia = Object.assign({} , objeto)
  delete copia[NameProp]
  return copia
}

console.log(removerObjeto({a: 1 , b:2 , c:3 }, "a"))

function removerPropriedade2(objeto, remover , remover2) {
const copia = {...objeto}
delete copia[remover]
delete copia[remover2]
return copia
}
console.log(removerPropriedade2({a: 1 , b:2 , c:3 }, "a" , "c"))