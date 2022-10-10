const alunos = [ 
  {nome:'Joao', nota: 7.3, bolsista:true},
  {nome:'Maria', nota: 9.2, bolsista:false},
  {nome:'Pedro', nota: 9.8, bolsista:true},
  {nome:'Joana', nota: 8.7, bolsista:true}
]
// todos os alunos são bolsista?
const todosBolsistas = (resultado , bolsista) => resultado && bolsista
const resultadoBolsista = alunos.map(a => a.bolsista).reduce(todosBolsistas)

console.log(`todos os alunos são bolsistas? ${resultadoBolsista ? 'sim' : 'não'}`)
// se cada aluno é bolsista?

const algumBolsista = (resultado , bolsista) => resultado || bolsista
const resultadoAlunoBolsista = alunos.map(a => a.bolsista).reduce(algumBolsista)

console.log(`Algum aluno é bolsista? ${resultadoAlunoBolsista ? 'Sim ' : 'Não'}`)

