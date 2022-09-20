// exemplo bem estranho
{
  {
    {
      {
        var sera = "sera???"
        console.log(sera)
      }
    }
  }
}
console.log(sera)  
// var fica visivel fora do escopo

//var dentro da function só e visivel na funcao

function teste(){
  var local =123
  console.log(local)
}
teste()
console.log(local)