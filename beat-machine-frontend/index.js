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

let drumKit = {
  kick: 'audio/LF_kick_08.wav',
  snare: 'audio/LF_snare_01.wav',
  hiHatClosed: 'audio/LF_hihat_closed_05.wav',
  hiHatOpen: 'audio/LF_hihat_open_03.wav'
}

function instantiateDrumKit(drumKit){
  for (let instrument in drumKit){
    let sampleObjects = []
    let count = 1
    while (count <= 16) {
      sampleObjects.push(new Audio(drumKit[instrument]))
      count++
    }
    drumKit[instrument] = sampleObjects
  }
  return drumKit
}

const loadedDrumKit = instantiateDrumKit(drumKit)

function addNoteToSequence(instrument, stepNum) {
  new Note(loadedDrumKit[instrument][stepNum], instrument, steps[stepNum])
}
addNoteToSequence('kick', 0)
addNoteToSequence('kick', 4)
addNoteToSequence('kick', 8)
addNoteToSequence('kick', 12)
addNoteToSequence('snare', 4)
addNoteToSequence('snare', 12)

function removeNoteFromSequence(instrument, stepNum) {
  let targetIndex;
  steps[stepNum].notes.forEach( (note, i) => {
    if (note.instrument === instrument) {targetIndex = i};
  })
  steps[stepNum].notes.splice(targetIndex, 1) // might delete all notes at step I think?!?
}
// removeNoteFromSequence('kick', 0)

function setTempo(n) {
  return (60000 / n) / 4
}

stepCount = 1
// setInterval(playBeats, setTempo(100))

function playBeats() {
  console.log(stepCount);

  steps[stepCount - 1].notes.forEach(function(note) {
    note.audio.play()
    // console.log(note);
  })

  if (stepCount === 16){
    stepCount = 1
  } else {
    stepCount++
  }
}



// var kick = new Audio('audio/LF_kick_08.wav')
// let note1 = new Note(kick, steps[0])
// let note2 = new Note(kick, steps[4])
// let note3 = new Note(kick, steps[8])
// let note4 = new Note(kick, steps[12])
//
// var snare = new Audio('audio/LF_snare_01.wav')
// var snare2 = new Audio('audio/LF_snare_01.wav')
// let note5 = new Note(snare, steps[4])
// let note6 = new Note(snare2, steps[12])
//
// var hiHat = new Audio('audio/LF_hihat_closed_05.wav')
// var hiHat2 = new Audio('audio/LF_hihat_closed_05.wav')
// var hiHat3 = new Audio('audio/LF_hihat_closed_05.wav')
// var hiHat4 = new Audio('audio/LF_hihat_closed_05.wav')
// var hiHatOpen = new Audio('audio/LF_hihat_open_03.wav')
// var hiHatOpen2 = new Audio('audio/LF_hihat_open_03.wav')
// let note7 = new Note(hiHat, steps[0])
// let note8 = new Note(hiHat2, steps[1])
// let note9 = new Note(hiHat3, steps[2])
// let note10 = new Note(hiHat4, steps[3])
// let note11 = new Note(hiHat, steps[4])
// let note12 = new Note(hiHat2, steps[5])
// let note13 = new Note(hiHat3, steps[6])
// let note14 = new Note(hiHat4, steps[7])
// let note15 = new Note(hiHat, steps[8])
// let note16 = new Note(hiHat2, steps[9])
// let note17 = new Note(hiHatOpen, steps[10])
// // let note18 = new Note(hiHat4, steps[11])
// let note19 = new Note(hiHat, steps[12])
// let note20 = new Note(hiHat2, steps[13])
// let note21 = new Note(hiHat3, steps[14])
// let note22 = new Note(hiHat4, steps[15])
