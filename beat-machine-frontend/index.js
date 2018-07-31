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
addNoteToSequence('hiHatOpen', 2)
addNoteToSequence('snare', 4)
addNoteToSequence('kick', 6)
addNoteToSequence('kick', 8)
addNoteToSequence('kick', 11)
addNoteToSequence('snare', 12)
addNoteToSequence('kick', 13)
addNoteToSequence('kick', 13)
addNoteToSequence('kick', 14)
addNoteToSequence('kick', 15)
addNoteToSequence('hiHatClosed', 0)
addNoteToSequence('hiHatClosed', 7)
addNoteToSequence('hiHatClosed', 8)
addNoteToSequence('hiHatClosed', 9)
addNoteToSequence('hiHatClosed', 10)
addNoteToSequence('hiHatClosed', 11)
addNoteToSequence('hiHatClosed', 12)
addNoteToSequence('hiHatClosed', 13)
addNoteToSequence('hiHatClosed', 14)
addNoteToSequence('hiHatClosed', 15)

function removeNoteFromSequence(instrument, stepNum) {
  let targetIndex;
  let notes = steps[stepNum].notes
  for (let i = 0; i < notes.length; i++){
    if (notes[i].instrument === instrument) {targetIndex = i; break;};
  }
  notes.splice(targetIndex, 1) // might sometimes delete all notes at step I think?!? maybe not
}
// removeNoteFromSequence('kick', 0)

function changeVolumeOfInstrument(instrument, level) {
  loadedDrumKit[instrument].forEach(audioEl=>audioEl.volume = level)
}

let playBack;
let tempo = 100

function setTempo(tempo) {
  return (60000 / tempo) / 4
}

function startPlay() {
  stepCount = 1
  playBack = setInterval(playBeats, setTempo(tempo))
}

function stopPlay() {
  clearInterval(playBack)
}

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
