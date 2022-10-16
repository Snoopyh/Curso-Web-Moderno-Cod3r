function receberSomentePares(array){
  let resultado = []

  for(let i = 0 ; i < array.length ; i += 2){
  const numerosPar = array[i] % 2 === 0
  if(numerosPar)
    resultado.push(array[i])
  }
  return resultado
}
console.log(receberSomentePares([1,2,3,4]))
console.log(receberSomentePares([10,70,22,43]))

// resoluçao cod3r 1
function receberSomenteOsParesDeIndicePares(numeros){
  return numeros.filter((numero , indice) =>{
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0

    return numeroPar && indicePar
  })
}
console.log(receberSomenteOsParesDeIndicePares([1,2,3,4]))
console.log(receberSomenteOsParesDeIndicePares([10,70,22,43]))