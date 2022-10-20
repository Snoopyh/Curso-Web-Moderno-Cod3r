/*A fim de criar um mecanismo de busca para sua aplicação, 
você precisa iniciar criando uma função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, 
como segundo parâmetro, um array de strings. 
A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
*/

// MINHA RESOLUÇÃO
function buscarPalavraSemelhantes(palavra , array){
  const semelhante = array.filter(el => el.includes(palavra))
  return semelhante
}
console.log(buscarPalavraSemelhantes("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavraSemelhantes("java", ["javascript", "java", "c++"]) )

// resolução cod3r
function buscarPalavraSemelhantes1(inicio , palavras){
  const resultado = []
  for(let palavra of palavras)
    if(palavra.includes(inicio))
      resultado.push(palavra)
  return resultado
}

console.log(buscarPalavraSemelhantes1("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavraSemelhantes1("java", ["javascript", "java", "c++"]) )
// resolução 2 da cod3r
function buscarPalavrasSemelhantes2(inicio , palavras){
  return palavras.filter(palavra => palavra.includes(inicio))
}
console.log(buscarPalavrasSemelhantes2("pro", ["programação", "mobile", "profissional"]))
console.log(buscarPalavrasSemelhantes2("java", ["javascript", "java", "c++"]) )