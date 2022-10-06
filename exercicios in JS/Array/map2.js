const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]
//retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const apenasNome = produto => produto.nome

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
const apenasNome1 = carrinho.map(paraObjeto).map(apenasNome)
console.log(resultado)
console.log(apenasNome1)
