function criarPessoa(nome , sobrenome = 'Sobrenome Invalido'){
  return{
    nome: nome,
    sobrenome: sobrenome
  }
}
console.log(criarPessoa('ana','souza'))
console.log(criarPessoa('ana','maria do carmo'))
console.log(criarPessoa('ana'))

function criarProduto (nome , preco = 'Preço não declarado' ){
  return{
    nome: nome,
    preco: preco
  }
}
console.log(criarProduto('Sabão em pó',4.99))
console.log(criarProduto('Coca-Cola 2L',5.99))
console.log(criarProduto('Coca-Cola 2L'))