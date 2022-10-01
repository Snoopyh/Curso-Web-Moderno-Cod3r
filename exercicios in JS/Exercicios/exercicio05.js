// função feita por min
function retornarDinheiro(valor = 0, moeda = "R$" ){
  resultado = (`valor: ${valor.toFixed(2)} ${moeda}`)
  return resultado
}
console.log(retornarDinheiro(8.88))

function formaValorDecimal(valorDecimal){
  valorEmReais = `R$ = ${valorDecimal.toFixed(2).toString().replace(".",",")}`
  console.log(valorEmReais)
}
formaValorDecimal(0.1 + 0.2)