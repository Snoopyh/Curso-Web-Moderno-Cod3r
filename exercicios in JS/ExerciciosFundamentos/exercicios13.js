function filtrarNumber(array){
  resultado = []
  for(let item of array)
    if(typeof item === 'number')
    resultado.push(item)
  
    return console.log(resultado)
}
filtrarNumber(["Javascript", 1, "3", "Web", 20])

function filtrarString(array) {
  return console.log(array.filter(item => typeof item === "string"))
  }

filtrarString(["Javascript", 1, "3", "Web", 20])