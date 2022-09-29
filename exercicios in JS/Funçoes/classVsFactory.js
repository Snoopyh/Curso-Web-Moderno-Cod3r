class Pessoa {
  constructor(nome){
    this.nome = nome
  }
  falar(){
    console.log(`meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

const criarpessoa = nome => {
  return{
    falar: () => console.log(`meu nome é ${nome}`)
  }
}
const p2 = criarpessoa('joão')
p2.falar()