function Triangulo(lado1 , lado2 , lado3){
 if(lado1 == lado2 && lado2 == lado3){
  console.log('Equilatero')
  console.log(lado1,lado2,lado3)
}
  else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    console.log('Isosceles')
    console.log(lado1,lado2,lado3)
  }
  else{
    console.log('escaleno')
    console.log(lado1,lado2,lado3)
  }
 
}
Triangulo(8,8 ,8)
Triangulo(4,5,6)
Triangulo(5,5,6)
