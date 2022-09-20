// uma coisa que seria absurda em outras linguagens
console.log('a = ',a)
var a = 2
console.log('a = ',a)

function hoinsting(){
  console.log('a = ',a)
var a = 2
console.log('a = ',a)
}

hoinsting()

console.log('a = ', a)
let a = 2
// sofre o ISSAMENTO , nao tem motivo de fazer isso é observação

// LET NAO USA O HOINSTING