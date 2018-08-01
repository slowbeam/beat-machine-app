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

// let drumKit = {
//   kick: 'audio/LF_kick_08.wav',
//   snare: 'audio/LF_snare_01.wav',
//   hiHatClosed: 'audio/LF_hihat_closed_05.wav',
//   hiHatOpen: 'audio/LF_hihat_open_03.wav'
// }

let drumKit = {
  kick:'audio/Roland TR-808/Bassdrum-05.wav',
  snare:'audio/Roland TR-808/Snaredrum.wav',
  hiHatOpen:'audio/Roland TR-808/Hat Open.wav',
  hiHatClosed:'audio/Roland TR-808/Hat Closed.wav',
  rimshot:'audio/Roland TR-808/Rimshot.wav',
  tomH:'audio/Roland TR-808/Tom H.wav',
  tomM:'audio/Roland TR-808/Tom M.wav',
  tomL:'audio/Roland TR-808/Tom L.wav',
  cowBell: 'audio/Roland TR-808/Cowbell.wav',
  clap: 'audio/Roland TR-808/Clap.wav'
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
addNoteToSequence('rimshot', 3)
addNoteToSequence('rimshot', 6)
addNoteToSequence('rimshot', 8)
addNoteToSequence('rimshot', 11)
addNoteToSequence('rimshot', 12)
addNoteToSequence('tomH', 5)
addNoteToSequence('tomH', 8)
addNoteToSequence('tomM', 13)
addNoteToSequence('tomM', 14)
addNoteToSequence('tomL', 15)
addNoteToSequence('cowBell', 9)
addNoteToSequence('cowBell', 12)
addNoteToSequence('clap', 3)
addNoteToSequence('clap', 6)

// addNoteToSequence('kick', 0)
// addNoteToSequence('kick', 4)
// addNoteToSequence('kick', 8)
// addNoteToSequence('kick', 12)
// addNoteToSequence('hiHatClosed', 1)
// addNoteToSequence('hiHatOpen', 2)
// addNoteToSequence('clap', 4)

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

let playback;
let tempo = 100
let stepCount = 1
let shuffle = 0

function setTempo(n) {
  tempo = n
}

function setShuffle(n) {
  shuffle = n
}

function parseTempo(tempo) {
  return (60000 / tempo) / 4
}

function shuffleOffset() {
  if (stepCount % 2 === 0) {
    return 1 + shuffle
  } else {
    return 1 - shuffle
  }
}

function startPlay() {
  playback = setTimeout(function playBeats() {
    console.log(stepCount);

    steps[stepCount - 1].notes.forEach(function(note) {
      note.audio.play()
    })
    if (stepCount === 16){
      stepCount = 1
    } else {
      stepCount++
    }
    playback = setTimeout(playBeats, (parseTempo(tempo) * shuffleOffset()));
  }, (parseTempo(tempo)));
}

function stopPlay() {
  clearTimeout(playback)
  // stepCount = 1 // resets sequence to beginning
}

// function startPlay() {
//   playback = setInterval(playBeats, parseTempo(tempo))
// }
// function stopPlay() {
//   clearInterval(playback)
//   stepCount = 1 // resets sequence to beginning
// }
//
// function playBeats() {
//   // console.log(stepCount);
//
//   steps[stepCount - 1].notes.forEach(function(note) {
//     note.audio.play()
//   })
//   if (stepCount === 16){
//     stepCount = 1
//   } else {
//     stepCount++
//   }
// }
