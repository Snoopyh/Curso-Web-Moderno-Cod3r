// Object.preventExtensions
const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: 199,
  tag: 'Promoção'
})
console.log(`Extensivel : `, Object.isExtensible(produto))
produto.nome = 'borracha'
produto.descricao = 'borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal // so mexe nos atributos
const pessoa = {
  nome: 'Juliana',
  idade: 35
}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
pessoa.nome = 'Joana'
console.log(pessoa)

//Object.freeze Resultado de objeto selado + valores constantes