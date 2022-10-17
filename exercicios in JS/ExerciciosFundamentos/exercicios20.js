/*Faça uma função que recebe a base e a altura de um triângulo
e retorne a área desse triângulo. A precisão deverá
ser de duas casas decimais, arredondando se necessário.*/

function areaDoTriagulo(base , altura){
  const triangulo = (base * altura) / 2
  return triangulo.toFixed(2)
}
console.log(areaDoTriagulo(10,15))
console.log(areaDoTriagulo(7, 9))
console.log(areaDoTriagulo(9.25, 13.1))

