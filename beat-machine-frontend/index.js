document.addEventListener("DOMContentLoaded", ()=>{

  const rootDiv = document.getElementById('main-container')

  rootDiv.addEventListener("click", function(event){
    switch(event.target.dataset.action){
      case "kick-one":
      kick.play()
    }
  })
  var kick = new Audio('audio/LF_kick_08.wav')



  // kick.play()


})

let steps = []

function instantiateSteps() {
  let count = 1
  while (count <= 16) {
    steps.push(new Step(count))
    count++
  }
}

instantiateSteps()
