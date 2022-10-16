const pessoa = {
  nome:'Rebeca',
  idade: 2,
  peso: 13
}
console.log(Object.keys(pessoa)) // CHAVES
console.log(Object.values(pessoa)) // Valores
console.log(Object.entries(pessoa)) // registros
Object.entries(pessoa).forEach(([chave , valor]) => {
  console.log(`${chave} : ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true,
  writable: false,
  value: '01/02/2020'
})
pessoa.dataNascimento = '02/02/2021'
console.log(pessoa.dataNascimento) // congela um do objeto nao o objeto todo
console.log(Object.keys(pessoa))

// Object.assign ECMAs2015
const dest = {a:1 , b:2}
const o1 = {b : 2}
const o2 = {b : 7 , c: 3, a:4}
const obj = Object.assign(dest , o1 ,o2)
console.log(obj) // concatenar todos os objetos

Object.freeze(obj)
obj.c= 1234
console.log(obj)