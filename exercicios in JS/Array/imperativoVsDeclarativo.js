const alunos = [
  {nome:'joao' , nota: 7.9 },
  {nome:'maria' , nota: 9.2 },
  {nome:'ana' , nota: 5.9 }
]
// abordagem imperativa

let total1 = 0
for( let i = 0; i < alunos.length; i++){
  total1 += alunos[i].nota
} 
let resultado = (total1 / alunos.length)
resultado = resultado.toFixed(2)
console.log(resultado)
// abordagem declarativa
const getNota = aluno => aluno.nota
const soma = (total , nota) => total + nota
const total2 = alunos.map(getNota).reduce(soma)
let resultadoSoma = (total2 / alunos.length)
resultadoSoma = resultadoSoma.toFixed(2)
console.log(resultadoSoma)