function pessoa(nome){
    this.nome = nome
    this.falar = () => console.log(`meu nome é ${nome}`)
  
}
const pessoa1 = new pessoa('João')
pessoa1.falar()