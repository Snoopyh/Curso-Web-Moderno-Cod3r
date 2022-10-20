/*Desenvolva uma função que receba uma frase 
como parâmetro e retorne essa string somente com as consoantes,
ou seja, sem as vogais.*/
function removerVogais(frase){
  return console.log(frase.replace(/(a|e|i|o|u)/gi, ''))
 }
removerVogais("aCod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts"

// resolução cod3r 1
function removerVogais1(frase){
  const vogais = ["a","A" , "e" ,"E" , "i", "I" , "o", "O", "u" , "U"]
  vogais.forEach(vogal =>frase = frase.replace(vogal, ''))
  return frase
}
console.log(removerVogais1("aCod3r")) 
console.log(removerVogais1("Fundamentos")) 
// resolução cod3r 2
function removerVogais2(frase){
  return frase.replace(/[aeiou]/ig, '')
}
console.log(removerVogais2("aCod3r")) 
console.log(removerVogais2("Fundamentos")) 