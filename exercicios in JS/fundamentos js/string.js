const escola = "cod3r"

console.log(escola.charAt(4))// saber qual letra esta no indice 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))// tabela unicode
console.log(escola.indexOf('3'))// saber qual indice ta string
console.log(escola.substring(1))// imprimir do 1 ao ultimo
console.log(escola.substring(0,3))//imprime do numero ate o outro indice sem incluir o pos virgula

console.log('escola '.concat(escola).concat("!"))
console.log(escola.replace(/\d/, 'e' )) // subistituir todas os d pelo e
console.log('maria,ana,joao'.split(','))