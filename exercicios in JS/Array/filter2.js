// implementando um filter
Array.prototype.filter2 = function(callback ) {
  const newArray = []
  for(let i = 0 ; this.length ; i++){
    if(callback(this[i], i, this)) {
        newArray.push(this[i])
    }
  }
  return newArray
}



const produto = [
  {nome: 'NOOTBOOK', preco:2499 , fragil: true},
  {nome: 'ipadPro', preco:3499 , fragil: true},
  {nome: 'copo plastico', preco:10 , fragil: false},
  {nome: 'caneta', preco:13 , fragil: false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))