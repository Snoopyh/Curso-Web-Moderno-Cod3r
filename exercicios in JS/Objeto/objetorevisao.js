// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'cadeira'
produto ['marca do produto'] = 'Generica'
produto.preco = 220
console.log(produto)
delete produto.preco
delete produto ['marca do produto']
console.log(produto)

const carro = {
  modelo: 'A4',
  valor: 84000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereço: {
      rua: 'rua das 3 marias',
      logadouro:'sei la',
    }
  },
  condutores: [{
    nome:'Junior',
    idade: 19,
  },{
    nome: 'Ana',
    idade: 23,
  }],
  calcularValorSeguro: () => {/*..*/}
}
carro.proprietario.endereço.logadouro = '1000'
delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro
console.log(carro)