// Destructuring a partir do array
const [a] = [10]
console.log(a)

const [n1, ,n3, ,n5 = 0] = [10 , 7  ,9 ,8 , ,2 ,3]
console.log(n1 , n3 , n5)

const [,[, nota]] = [[,4,9],[9,8,7] ] // nao usaria na pratica
console.log(nota)