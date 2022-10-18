/*Desenvolva uma função que receba como parâmetro um número de 1 a 10. 
Internamente, na função, será gerado
um número aleatório de 1 a 10. 
A função deverá retornar se o parâmetro de entrada foi igual ao número sorteado
internamente. 
Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
*/

function funcaoDaSorte(numeroEscolhido){
  const min = 1
  const max = 10
  let numSorteado = Math.floor(Math.random() * (max - min + 1) + min)
  if(numSorteado == numeroEscolhido){
    return `Parabens o numero sorteado foi o : ${numSorteado} e o escolhido foi ${numeroEscolhido}`
  }
  else{
    return `Que pena o numero sorteado foi : ${numSorteado} e o escolhido foi ${numeroEscolhido}`
  }
}
console.log(funcaoDaSorte(10))
// resolução da cod3r
/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function funcaoDaSorte1(numeroEscolhido){
  const min = 1
  const max = 10
  const numAleatorio = Math.floor(Math.random() * (max - min + min) + min)
  return (numeroEscolhido === numAleatorio ?
    `Parabéns! O número sorteado foi o ${numAleatorio}` :
    `Que pena, o número sorteado foi o ${numAleatorio}`
    )
    
}
console.log(funcaoDaSorte1(10))
