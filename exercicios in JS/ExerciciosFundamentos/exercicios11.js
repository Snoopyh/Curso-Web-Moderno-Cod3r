// oque eu fiz
function receberPrimeiroElemento(a){
 const newArray = a[0]
 const newArray2 = a.at(-1)
 let resultado = [newArray , newArray2]
 return resultado

}
console.log(receberPrimeiroElemento([10 , 'Ola!', 6 , 8]))
console.log(receberPrimeiroElemento([10 , 'Ola!', 6 , 'Estou','exercicio']))
// resoluçao cod3r
function receberPrimeiroEUltimoElemento1(elementos) {
  const indiceDoPrimeiroElemento = 0
  const indiceDoUltimoElemento = elementos.length - 1
  const primeiroElemento = elementos[indiceDoPrimeiroElemento]
  const ultimoElemento = elementos[indiceDoUltimoElemento]
  return [primeiroElemento, ultimoElemento]
}

// resolução 2 cod3r
function receberPrimeiroEUltimoElemento2(elementos) {
  const primeiroElemento= elementos.shift()
  const ultimoElemento = elementos.pop()
  return [primeiroElemento, ultimoElemento]
  }
// resolução3 cod3r
function receberPrimeiroEUltimoElemento3([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop()
  return [primeiroElemento, ultimoElemento]
  }

  console.log(receberPrimeiroEUltimoElemento1([10 , 'Ola!', 6 , 'Estou','exercicio']))
  console.log(receberPrimeiroEUltimoElemento2([10 , 'Ola!', 6 , 'Estou','exercicio']))
  console.log(receberPrimeiroEUltimoElemento3([10 , 'Ola!', 6 , 'Estou','exercicio']))
  