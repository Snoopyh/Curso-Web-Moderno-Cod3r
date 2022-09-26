const notas =[ 6.7 , 9.8 , 8.6, 6.5 , 3.5 , 4.6 ]
// sem callback
const notasBaixas1 = []
for (let i in notas){
  if(notas[i] < 7){
    notasBaixas1.push(notas[i])
  }
}
console.log(notasBaixas1)

// com callback
const notasMenor7 = nota => nota < 7 
const notasBaixas2 = notas.filter(notasMenor7)
console.log(notasBaixas2)