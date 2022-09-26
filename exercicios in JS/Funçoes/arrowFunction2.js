function Pessoa(){ 
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  },1000)
}
new Pessoa()
// this no contexto lexico de arrow function não varia