// usando a notação literal
const obj1 = {}
console.log(obj1)
// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)
// funçoes construtoras
function Produto(nome , preco ,desc){
  this.nome = nome
  this.GetPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}
const p1 = new Produto('caneta' , 7.99, 0.15)
const p2 = new Produto('Nootbook' , 2999, 0.25)
console.log(p1.GetPrecoComDesconto())
console.log(p2.GetPrecoComDesconto())
// função factory
function criarFuncionario(nome ,salario ,faltas){
  return {
    nome: nome,
    salario: salario,
    faltas: faltas,
    getSalario() {
      return (salario / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('joão' , 7800, 3)
const f2 = criarFuncionario('maria', 11400, 1)
console.log(f1.getSalario(),f2.getSalario())

// object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// uma funçao famosa que retorna um object
const fromJson = JSON.parse('{"INFO": "SOU UM JSON"}')
console.log(fromJson.INFO)