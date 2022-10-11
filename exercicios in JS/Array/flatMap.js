const escola = [{
  nome: 'Turma m1',
  alunos: [{
      nome:'Gustavo',
      nota: 8.1
  }, {
    nome:'Ana',
    nota: 9.1
  }]
},{
  nome: 'Turma m2',
  alunos:[{
      nome:'Larissa',
      nota: 8.6
  },{
    nome:'Joana',
    nota: 6.1
  }]
}]
const getNotaAluno = aluno => aluno.nota
const getNotasTurma = turma => turma.alunos.map(getNotaAluno)

const nota1 = escola.flatMap(getNotasTurma)
console.log(nota1)

Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback))
}