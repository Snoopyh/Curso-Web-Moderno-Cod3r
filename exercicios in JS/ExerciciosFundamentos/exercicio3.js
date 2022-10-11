function salarioPorHora(nome ,horasMes , salarioHora ){
  let salarioTotal = horasMes * salarioHora
  salarioTotal = salarioTotal.toFixed(2)
  return `Salario de ${nome} é igual a R$${salarioTotal}`
}
console.log(salarioPorHora('José',150 , 40.5))