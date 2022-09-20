function compras(trabalho1 , trabalho2){
  const comprarSorvete = trabalho1 || trabalho2 // || = ou
  const comprarTV50 = trabalho1 && trabalho2 // && = e , and
  // const comprarTV32 = !!(trabalho1^trabalho2)// bitwise XOR . ou exclusivo
  const comprarTV32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete // operador unario
  return{
    comprarSorvete,
    comprarTV50,
    comprarTV32,
    manterSaudavel
  }
}
console.log(compras(true , true))
console.log(compras(true , false))
console.log(compras(false , true))
console.log(compras(false , false))