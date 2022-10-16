/*Você está trabalhando numa aplicação pessoal de controle de despesas.
 Na tela principal dessa aplicação, é
possível adicionar produtos ou serviços, informando nome, 
categoria e preço. Uma funcionalidade que você está
desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
*/
// resoluçao cod3r
function despesasTotais(objeto){
  let total = 0
  for(let item of objeto)
  total += item.preco
  return total
}
console.log(despesasTotais([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150},
  {nome: "restaurante", categoria: "Entretenimento", preco: 180}
  ]))
  console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))
// resoluçao cod3r 1
function despesasTotais1(itens) {
  return itens
  .map(item => item.preco)
  .reduce((acumulador, valorAtual) => acumulador + valorAtual)
  }
  
console.log(despesasTotais1([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150},
  {nome: "restaurante", categoria: "Entretenimento", preco: 180}
  ]))
  console.log(despesasTotais1([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))
function despesasTotais2(items){
  return items.reduce((acumulador , valorAtual) => acumulador + valorAtual.preco, 0)
}
console.log(despesasTotais2([
  {nome: "Jornal online", categoria: "Informação", preco: 89.99},
  {nome: "Cinema", categoria: "Entretenimento", preco: 150},
  {nome: "restaurante", categoria: "Entretenimento", preco: 180}
  ]))
  console.log(despesasTotais2([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]))