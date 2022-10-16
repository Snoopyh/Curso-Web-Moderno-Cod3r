// minha resolução
function checarAnoBissexto(ano){
  if((ano % 4 == 0 && ano % 100 != 0)|| ano % 400 == 0)
  return 'Ano Bissexto'
  else{
    return 'Ano não Bissexto'
  }
}
console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))

// resolução cod3r
function checarAnoBissexto1(ano) {
  const divisivelPorQuatro = ano % 4 == 0
  const divisivelPorCem = ano % 100 == 0
  const divisivelPorQuatrocentos = ano % 400 == 0
  let response = (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos
  return response === true ? 'Ano Bissexto' : 'Ano Não Bissexto'  

  }
console.log(checarAnoBissexto1(2020))
console.log(checarAnoBissexto1(2100))

// resolução 2 cod3r 
// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto2(ano){
  let response = new Date(ano , 1 , 29).getDate() === 29;
  return response === true ? 'Ano Bissexto' : 'Ano Não Bissexto'
}
console.log(checarAnoBissexto2(2020))
console.log(checarAnoBissexto2(2100))