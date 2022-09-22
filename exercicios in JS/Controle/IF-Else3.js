const imprimirResultado = function(nota) {
  if (nota >=7){
    console.log('ALUNO APROVADO')
  }
  else{
    console.log('ALUNO REPROVADO')
  }
}
imprimirResultado(3)
imprimirResultado(10)
imprimirResultado('Epa') // cuidado !!!
