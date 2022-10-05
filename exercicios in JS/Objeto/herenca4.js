function MeuObjeto(){}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anonimo';
MeuObjeto.prototype.falar = () =>{
  console.log(`Bom Dia eu me chamo ${this.nome}!`)
}

obj1.falar()

obj1.nome = 'Ana'
console.log(`Bom Dia eu me chamo ${obj1.nome} !`)

console.log(`Bom Dia eu me chamo ${obj2.nome} !`)

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Souza'
console.log(`Bom Dia eu me chamo ${obj3.nome} !`)