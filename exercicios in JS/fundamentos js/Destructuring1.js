// novo recurso ES2015
const pessoa = {
  nome: "ana",
  idade: 20,
  endereco:{
    rua: 'rua das carmelitas',
    numero: 1000
  }
}

const {nome, idade } = pessoa
console.log(nome,idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome , bemHumorada)

const {endereco: {rua , numero , cep} } = pessoa
console.log(rua,numero,cep)