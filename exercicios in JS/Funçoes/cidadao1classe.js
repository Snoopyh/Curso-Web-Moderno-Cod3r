// Função de alta ordem!
// usar função como um dado

// criar função de forma literal
function teste1(){ }

// armazenar função em uma variavel
const teste2 = function (){}
// armazenar função dentro de um array

const array = [function(a , b){ return a , b}, teste1, teste2]

console.log(array[0](2,3))
// armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

//passar uma função para parametro para outra função
function run(fun){
  fun()
}
run(function () {console.log('Executando')})

// uma função pode retornar e contar outra função
function soma( a , b ){
  return function (c){
    console.log(a + b +c)
  }
}
soma(2,3)(4)
const cincoMais = soma(2,3)
cincoMais(4)