const funcs = []

for(let i = 0 ; i < 10 ; i++){
  funcs.push(function (){
    console.log(i)
  })
}
// função ela tem conciencia do local que foi deficnido Closure
funcs[2]()
funcs[8]()