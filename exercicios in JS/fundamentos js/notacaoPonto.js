console.log(Math.ceil(6.1))
const obj1 = {}
obj1.name = 'Roberto'
//obj1['name'] = 'Roberta'
console.log(obj1.name)

function Obj(nome){
  this.nome = nome
  this.exec = () => {
    console.log('exec...')
  }
}
const obj2 = new Obj('joao')
const obj3 = new Obj('armario')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()