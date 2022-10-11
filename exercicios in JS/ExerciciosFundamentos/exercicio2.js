function getIdadeEmDias(idade){
  let idadeemdias = idade * 365
  idadeemdias = idadeemdias.toFixed(2)
  return `sua idade em dias são ${idadeemdias} dias`
}
console.log(getIdadeEmDias(30))