const pessoa = {nome : 'joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa = {nome: 'Ana'}
//console.log(pessoa)

Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)

const pessoaConst = Object.freeze({nome : 'joana'})
console.log(pessoaConst)