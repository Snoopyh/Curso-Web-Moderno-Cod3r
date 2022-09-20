const valores = [7,7.9,8.9,8.9]
console.log(valores[0], valores[3])
console.log(valores[6])
valores[6] = 9.9
console.log(valores.length)

valores.push({id:3}, false , 'teste') // nao misturar dados!! ! !
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)