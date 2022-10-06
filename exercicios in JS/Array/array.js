console.log(typeof Array , typeof new Array ,typeof [])

let aprovados = new Array('bia' , 'carlos' , 'ana')
console.log(aprovados)

aprovados = ['Bia' , 'Carlos' , 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
aprovados[3] = 'Paulo' // substituir alguem que ja existe
console.log(aprovados[3])

aprovados.push('souza')// adicionar no ultimo
console.log(aprovados.length)// saber o tamanho do array
aprovados[9] = 'Rafael'
aprovados.push('Joana')
console.log(aprovados)
aprovados.sort() // ordenar o array por ordem alfabetica , ALTERA O ARRAY
console.log(aprovados)
delete aprovados[1]
console.log(aprovados)

aprovados = ['bia' , 'carlos', 'ana']
aprovados.splice(1, 1 , 'ELEMENTO 1' , 'ELEMENTO 2') // INDICE , EXCLUIR , E ADICONAR
console.log(aprovados)