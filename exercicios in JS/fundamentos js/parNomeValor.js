// par nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec(){
  const saudacao = 'Falaaa' // contexto lexico 2
  return saudacao
}
// OBJETOS são grupos aninhados de pares nome/valor
const client = {
  nome: 'Pedro',
  idade: 21,
  peso: 90,
  endereco:{
    rua: 'q-04',
    numero: '123'
  }
}
console.log(saudacao)
console.log(exec())
console.log(client)