// Closure e o escopo criado quando uma funçao e declarada
// e esse escopo vai permitir a função acessar e manipular variaveis externas a função

// Contexto lexico em ação
const x = 'Global'

function fora(){
  const x = "Local"
  function dentro(){
    return x
  }
  return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())