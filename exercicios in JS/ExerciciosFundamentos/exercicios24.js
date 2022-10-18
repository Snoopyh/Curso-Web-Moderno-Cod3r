/*-Desenvolva uma função que recebe um caractere e uma string como parâmetros
 e retorne a quantidade de vezes que o caractere se repete na string. 
A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
minúsculas.*/
function contarCaractere(contarCaractere , frase){
  let contador = 0
  for(let i = 0 ; i < frase.length ; i++)
    if(frase.charAt(i) === contarCaractere)
    contador ++
  return console.log(contador)
}

contarCaractere("r", " Asorte favorece os audazes ") 
contarCaractere("c", "Conhece-te a ti mesmo") 
// resolução cod3r
function contarCaractere1(caractereBuscador , frase){
  return [...frase].filter(caractere => caractere === caractereBuscador).length
}
console.log(contarCaractere1("r", " Asorte favorece os audazes "))