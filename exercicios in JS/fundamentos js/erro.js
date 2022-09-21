function tratarErrorELançar(erro){
  //throw new Error ('...')
  //throw 10
  //throw true
  throw 'ERROR'
}

function imprimirNome(obj){
  try{console.log(obj.name.toUpperCase()+ '!!!')
} catch(e){
  tratarErrorELançar(e)
} finally{
  console.log('final')
}
}
const obj ={nome: 'joao'}
imprimirNome(obj)
