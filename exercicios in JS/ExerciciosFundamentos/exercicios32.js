// Escreva uma função que receba uma string como parâmetro e retorne a mesma string em ordem inversa.
function inversa(palavra){
  
  const resultado = palavra.split("").reverse(palavra).join("")
  return resultado
}
console.log(inversa("Teste"))