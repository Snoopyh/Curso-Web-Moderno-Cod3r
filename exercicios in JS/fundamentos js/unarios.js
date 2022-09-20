let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // tem uma prioridade maior
console.log(num1)

console.log(++num1 === num2--) // fugir desse tipo de padrão
console.log(num1 === num2)