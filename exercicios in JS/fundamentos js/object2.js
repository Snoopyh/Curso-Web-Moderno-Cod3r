// funçao pode ser instanciada apartir de new
console.log(typeof Object)
console.log(typeof new Object)

const client = function(){}
console.log(typeof client)
console.log(typeof new client)

class Produto{} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())