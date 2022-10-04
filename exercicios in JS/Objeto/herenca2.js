// Cadeia de prototype chain
const avo = {attrl: 'A'}
const pai = {__proto__: avo, attr2: 'B' , attr3: '3'}
const filho ={__proto__: pai , attr3: 'C'}
console.log(filho.attrl , filho.attr2 , filho.attr3)

const Carro = {
  velAtual : 0,
  velMax : 200,
  acelerarMais(delta){
    if(this.velAtual + delta <= this.velMax){
      this.velAtual += delta
    }else {
      this.velAtual = this.velMax
    }
  },
  status(){
    return `${this.velAtual} Km/h de ${this.velMax}Km/h `
  }
}
const ferrari = {
  modelo: 'F40',
  velMax: 324, // shadowning
}
const volvo = {
  modelo: 'V40',
  status(){
    return `${this.modelo} : ${super.status()}` // super para chamar o metodo do meu Prototipo
  }
}
Object.setPrototypeOf(ferrari , Carro) // metodo especificado pela linguagem
Object.setPrototypeOf(volvo , Carro)
console.log(ferrari)
console.log(volvo)
volvo.acelerarMais(100)
console.log(volvo.status())
ferrari.acelerarMais(200)
ferrari.acelerarMais(30)
console.log(ferrari.status())