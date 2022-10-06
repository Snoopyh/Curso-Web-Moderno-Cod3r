const  pilotos = ['Massa' , 'Vettel' , 'Raikkonen' , 'Alonso']
pilotos.pop()// remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')// adiciona no ultimo elemento do array
console.log(pilotos)

pilotos.shift()// remove no primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')// adiciona no primeiro elemento do array
console.log(pilotos)

// splice pode tanto adicionar como remover elementos

//adicionar
pilotos.splice(2 , 0 , 'Bottas', 'Alonso')
console.log(pilotos)

//remover
pilotos.splice(3 , 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um novo array apartir do indice marcado
console.log(algunsPilotos1)

const algunsPilotos = pilotos.slice(1 , 4)
console.log(algunsPilotos)