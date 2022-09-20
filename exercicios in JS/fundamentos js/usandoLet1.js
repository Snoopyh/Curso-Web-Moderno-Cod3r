var numero = 1
{
  let numero = 2 // let preferencia ao escopo menor 
  console.log('dentro = ', numero)
}
console.log('fora = ', numero)