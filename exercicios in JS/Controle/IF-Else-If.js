Number.prototype.entre = function (inicio , fim){
  return this >= inicio && this <= fim
}

const imprimirResultado= function(nota){
  if (nota.entre(9,10)){
    console.log('quadro de honra')
  }
  else if(nota.entre(7,8.9)){
    console.log('Aprovado')
  }
  else if (nota.entre(4,5.99)){
    console.log('Recuperação')
  }
  else if (nota.entre(0,3.99)){
    console.log('Reprovado')
  }
  else{
    console.log('Nota invalida')
  }
  console.log('FIM')
}
imprimirResultado(8)
imprimirResultado(5)
imprimirResultado(10)
imprimirResultado(2)
imprimirResultado(-2)