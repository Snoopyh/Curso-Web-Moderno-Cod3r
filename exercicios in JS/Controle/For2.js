const notas = [6.7 , 8.9 ,7.7, 3,6 ]
for (let i in notas){
  console.log(`nota = ${notas[i]}`)
}

const pessoa = {
  nome: 'ana',
  sobrenome: 'Silva',
  idade: 23,
  peso: 64,
}

for (let atributo in pessoa){
  console.log(`${atributo} = ${pessoa[atributo]}`)
}