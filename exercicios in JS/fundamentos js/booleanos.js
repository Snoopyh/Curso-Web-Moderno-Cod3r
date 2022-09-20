let isAtivo = false
console.log(isAtivo)

isAtivo = true 
console.log(true)

isAtivo = 1
console.log(!!isAtivo)

console.log('os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![ ])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = 10))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar...') // ou
console.log(!!(''|| null || 0 ||' '))// se um for verdadeiro e verdadeiro
