const produto = [
  {nome : 'Nootbook' , preco: 2499 , fragil: true},
  {nome : 'Ipad Pro' , preco: 4199 , fragil: true},
  {nome : 'Copo de Vidro' , preco: 12.49, fragil : true},
  {nome:'Copo de Plastico', preco:18.99, fragil: false}
]
// minha função
console.log(produto.filter(function(p){
  if(p.fragil == true && p.preco > 2000){
    return console.log(`O ${p.nome} é caro e Fragil`)
  }
  else if(p.preco < 2000 && p.fragil == true){
    return console.log(`O ${p.nome} é barato e Fragil`)
  }
  else{
    return console.log(`O ${p.nome} é barato e não é Fragil`)
  }
}))
/*
console.log(produto.filter(function(p){
  return p.preco > 2
}))*/

// função da aula
const caro = produto => produto.preco >=500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))