document.addEventListener("DOMContentLoaded", ()=>{

  const rootDiv = document.getElementById('main-container')

  const snareOne = document.getElementById('snare-one')
  const snareTwo = document.getElementById('snare-two')
  const snareThree = document.getElementById('snare-three')
  const snareFour = document.getElementById('snare-four')
  const snareFive = document.getElementById('snare-five')
  const snareSix = document.getElementById('snare-six')
  const snareSeven = document.getElementById('snare-seven')
  const snareEight = document.getElementById('snare-eight')
  const snareNine = document.getElementById('snare-nine')
  const snareTen = document.getElementById('snare-ten')
  const snareEleven = document.getElementById('snare-eleven')
  const snareTwelve = document.getElementById('snare-twelve')
  const snareThirteen = document.getElementById('snare-thirteen')
  const snareFourteen = document.getElementById('snare-fourteen')
  const snareFifteen = document.getElementById('snare-fifteen')
  const snareSixteen = document.getElementById('snare-sixteen')

  const kickOne = document.getElementById('kick-one')
  const kickTwo = document.getElementById('kick-two')
  const kickThree = document.getElementById('kick-three')
  const kickFour = document.getElementById('kick-four')
  const kickFive = document.getElementById('kick-five')
  const kickSix = document.getElementById('kick-six')
  const kickSeven = document.getElementById('kick-seven')
  const kickEight = document.getElementById('kick-eight')
  const kickNine = document.getElementById('kick-nine')
  const kickTen = document.getElementById('kick-ten')
  const kickEleven = document.getElementById('kick-eleven')
  const kickTwelve = document.getElementById('kick-twelve')
  const kickThirteen = document.getElementById('kick-thirteen')
  const kickFourteen = document.getElementById('kick-fourteen')
  const kickFifteen = document.getElementById('kick-fifteen')
  const kickSixteen = document.getElementById('kick-sixteen')

  const oHatOne = document.getElementById('o-hat-one')
  const oHatTwo = document.getElementById('o-hat-two')
  const oHatThree = document.getElementById('o-hat-three')
  const oHatFour = document.getElementById('o-hat-four')
  const oHatFive = document.getElementById('o-hat-five')
  const oHatSix = document.getElementById('o-hat-six')
  const oHatSeven = document.getElementById('o-hat-seven')
  const oHatEight = document.getElementById('o-hat-eight')
  const oHatNine = document.getElementById('o-hat-nine')
  const oHatTen = document.getElementById('o-hat-ten')
  const oHatEleven = document.getElementById('o-hat-eleven')
  const oHatTwelve = document.getElementById('o-hat-twelve')
  const oHatThirteen = document.getElementById('o-hat-thirteen')
  const oHatFourteen = document.getElementById('o-hat-fourteen')
  const oHatFifteen = document.getElementById('o-hat-fifteen')
  const oHatSixteen = document.getElementById('o-hat-sixteen')

  const cHatOne = document.getElementById('c-hat-one')
  const cHatTwo = document.getElementById('c-hat-two')
  const cHatThree = document.getElementById('c-hat-three')
  const cHatFour = document.getElementById('c-hat-four')
  const cHatFive = document.getElementById('c-hat-five')
  const cHatSix = document.getElementById('c-hat-six')
  const cHatSeven = document.getElementById('c-hat-seven')
  const cHatEight = document.getElementById('c-hat-eight')
  const cHatNine = document.getElementById('c-hat-nine')
  const cHatTen = document.getElementById('c-hat-ten')
  const cHatEleven = document.getElementById('c-hat-eleven')
  const cHatTwelve = document.getElementById('c-hat-twelve')
  const cHatThirteen = document.getElementById('c-hat-thirteen')
  const cHatFourteen = document.getElementById('c-hat-fourteen')
  const cHatFifteen = document.getElementById('c-hat-fifteen')
  const cHatSixteen = document.getElementById('c-hat-sixteen')



  // rootDiv.addEventListener("click", function(event){
  //   switch(event.target.dataset.action){
  //
  //     case "kick-one":
  //     if (kickOne.className === "purple-button"){kickOne.className = "purple-button-lit"}
  //     else {kickOne.className = "purple-button"}
  //     break;
  //
  //     case "kick-two":
  //     if (kickTwo.className === "purple-button"){kickTwo.className = "purple-button-lit"}
  //     else {kickTwo.className = "purple-button"}
  //     break;
  //
  //     case "kick-three":
  //     if (kickThree.className === "purple-button"){kickThree.className = "purple-button-lit"}
  //     else {kickThree.className = "purple-button"}
  //     break;
  //
  //     case "kick-four":
  //     if (kickFour.className === "purple-button"){kickFour.className = "purple-button-lit"}
  //     else {kickFour.className = "purple-button"}
  //     break;
  //
  //     case "kick-five":
  //     if (kickFive.className === "purple-button"){kickFive.className = "purple-button-lit"}
  //     else {kickFive.className = "purple-button"}
  //     break;
  //
  //     case "kick-six":
  //     if (kickSix.className === "purple-button"){kickSix.className = "purple-button-lit"}
  //     else {kickSix.className = "purple-button"}
  //     break;
  //
  //     case "kick-seven":
  //     if (kickSeven.className === "purple-button"){kickSeven.className = "purple-button-lit"}
  //     else {kickSeven.className = "purple-button"}
  //     break;
  //
  //     case "kick-eight":
  //     if (kickEight.className === "purple-button"){kickEight.className = "purple-button-lit"}
  //     else {kickEight.className = "purple-button"}
  //     break;
  //
  //     case "kick-nine":
  //     if (kickNine.className === "purple-button"){kickNine.className = "purple-button-lit"}
  //     else {kickNine.className = "purple-button"}
  //     break;
  //
  //     case "kick-ten":
  //     if (kickTen.className === "purple-button"){kickTen.className = "purple-button-lit"}
  //     else {kickTen.className = "purple-button"}
  //     break;
  //
  //     case "kick-eleven":
  //     if (kickEleven.className === "purple-button"){kickEleven.className = "purple-button-lit"}
  //     else {kickEleven.className = "purple-button"}
  //     break;
  //
  //     case "kick-twelve":
  //     if (kickTwelve.className === "purple-button"){kickTwelve.className = "purple-button-lit"}
  //     else {kickTwelve.className = "purple-button"}
  //     break;
  //
  //     case "kick-thirteen":
  //     if (kickThirteen.className === "purple-button"){kickThirteen.className = "purple-button-lit"}
  //     else {kickThirteen.className = "purple-button"}
  //     break;
  //
  //     case "kick-fourteen":
  //     if (kickFourteen.className === "purple-button"){kickFourteen.className = "purple-button-lit"}
  //     else {kickFourteen.className = "purple-button"}
  //     break;
  //
  //     case "kick-fifteen":
  //     if (kickFifteen.className === "purple-button"){kickFifteen.className = "purple-button-lit"}
  //     else {kickFifteen.className = "purple-button"}
  //     break;
  //
  //     case "kick-sixteen":
  //     if (kickSixteen.className === "purple-button"){kickSixteen.className = "purple-button-lit"}
  //     else {kickSixteen.className = "purple-button"}
  //     break;
  //
  //     case "snare-one":
  //     if (snareOne.className === "magenta-button"){snareOne.className = "magenta-button-lit"}
  //     else {snareOne.className = "magenta-button"}
  //     break;
  //
  //     case "snare-two":
  //     if (snareTwo.className === "magenta-button"){snareTwo.className = "magenta-button-lit"}
  //     else {snareTwo.className = "magenta-button"}
  //     break;
  //
  //     case "snare-three":
  //     if (snareThree.className === "magenta-button"){snareThree.className = "magenta-button-lit"}
  //     else {snareThree.className = "magenta-button"}
  //     break;
  //
  //     case "snare-four":
  //     if (snareFour.className === "magenta-button"){snareFour.className = "magenta-button-lit"}
  //     else {snareFour.className = "magenta-button"}
  //     break;
  //
  //     case "snare-five":
  //     if (snareFive.className === "magenta-button"){snareFive.className = "magenta-button-lit"}
  //     else {snareFive.className = "magenta-button"}
  //     break;
  //
  //     case "snare-six":
  //     if (snareSix.className === "magenta-button"){snareSix.className = "magenta-button-lit"}
  //     else {snareSix.className = "magenta-button"}
  //     break;
  //
  //     case "snare-seven":
  //     if (snareSeven.className === "magenta-button"){snareSeven.className = "magenta-button-lit"}
  //     else {snareSeven.className = "magenta-button"}
  //     break;
  //
  //     case "snare-eight":
  //     if (snareEight.className === "magenta-button"){snareEight.className = "magenta-button-lit"}
  //     else {snareEight.className = "magenta-button"}
  //     break;
  //
  //     case "snare-nine":
  //     if (snareNine.className === "magenta-button"){snareNine.className = "magenta-button-lit"}
  //     else {snareNine.className = "magenta-button"}
  //     break;
  //
  //     case "snare-ten":
  //     if (snareTen.className === "magenta-button"){snareTen.className = "magenta-button-lit"}
  //     else {snareTen.className = "magenta-button"}
  //     break;
  //
  //     case "snare-eleven":
  //     if (snareEleven.className === "magenta-button"){snareEleven.className = "magenta-button-lit"}
  //     else {snareEleven.className = "magenta-button"}
  //     break;
  //
  //     case "snare-twelve":
  //     if (snareTwelve.className === "magenta-button"){snareTwelve.className = "magenta-button-lit"}
  //     else {snareTwelve.className = "magenta-button"}
  //     break;
  //
  //     case "snare-thirteen":
  //     if (snareThirteen.className === "magenta-button"){snareThirteen.className = "magenta-button-lit"}
  //     else {snareThirteen.className = "magenta-button"}
  //     break;
  //
  //     case "snare-fourteen":
  //     if (snareFourteen.className === "magenta-button"){snareFourteen.className = "magenta-button-lit"}
  //     else {snareFourteen.className = "magenta-button"}
  //     break;
  //
  //     case "snare-fifteen":
  //     if (snareFifteen.className === "magenta-button"){snareFifteen.className = "magenta-button-lit"}
  //     else {snareFifteen.className = "magenta-button"}
  //     break;
  //
  //     case "snare-sixteen":
  //     if (snareSixteen.className === "magenta-button"){snareSixteen.className = "magenta-button-lit"}
  //     else {snareSixteen.className = "magenta-button"}
  //     break;
  //
  //     case "o-hat-one":
  //     if (oHatOne.className === "green-button"){oHatOne.className = "green-button-lit"}
  //     else {oHatOne.className = "green-button"}
  //     break;
  //
  //     case "o-hat-two":
  //     if (oHatTwo.className === "green-button"){oHatTwo.className = "green-button-lit"}
  //     else {oHatTwo.className = "green-button"}
  //     break;
  //
  //     case "o-hat-three":
  //     if (oHatThree.className === "green-button"){oHatThree.className = "green-button-lit"}
  //     else {oHatThree.className = "green-button"}
  //     break;
  //
  //     case "o-hat-four":
  //     if (oHatFour.className === "green-button"){oHatFour.className = "green-button-lit"}
  //     else {oHatFour.className = "green-button"}
  //     break;
  //
  //     case "o-hat-five":
  //     if (oHatFive.className === "green-button"){oHatFive.className = "green-button-lit"}
  //     else {oHatFive.className = "green-button"}
  //     break;
  //
  //     case "o-hat-six":
  //     if (oHatSix.className === "green-button"){oHatSix.className = "green-button-lit"}
  //     else {oHatSix.className = "green-button"}
  //     break;
  //
  //     case "o-hat-seven":
  //     if (oHatSeven.className === "green-button"){oHatSeven.className = "green-button-lit"}
  //     else {oHatSeven.className = "green-button"}
  //     break;
  //
  //     case "o-hat-eight":
  //     if (oHatEight.className === "green-button"){oHatEight.className = "green-button-lit"}
  //     else {oHatEight.className = "green-button"}
  //     break;
  //
  //     case "o-hat-nine":
  //     if (oHatNine.className === "green-button"){oHatNine.className = "green-button-lit"}
  //     else {oHatNine.className = "green-button"}
  //     break;
  //
  //     case "o-hat-ten":
  //     if (oHatTen.className === "green-button"){oHatTen.className = "green-button-lit"}
  //     else {oHatTen.className = "green-button"}
  //     break;
  //
  //     case "o-hat-eleven":
  //     if (oHatEleven.className === "green-button"){oHatEleven.className = "green-button-lit"}
  //     else {oHatEleven.className = "green-button"}
  //     break;
  //
  //     case "o-hat-twelve":
  //     if (oHatTwelve.className === "green-button"){oHatTwelve.className = "green-button-lit"}
  //     else {oHatTwelve.className = "green-button"}
  //     break;
  //
  //     case "o-hat-thirteen":
  //     if (oHatThirteen.className === "green-button"){oHatThirteen.className = "green-button-lit"}
  //     else {oHatThirteen.className = "green-button"}
  //     break;
  //
  //     case "o-hat-fourteen":
  //     if (oHatFourteen.className === "green-button"){oHatFourteen.className = "green-button-lit"}
  //     else {oHatFourteen.className = "green-button"}
  //     break;
  //
  //     case "o-hat-fifteen":
  //     if (oHatFifteen.className === "green-button"){oHatFifteen.className = "green-button-lit"}
  //     else {oHatFifteen.className = "green-button"}
  //     break;
  //
  //     case "o-hat-sixteen":
  //     if (oHatSixteen.className === "green-button"){oHatSixteen.className = "green-button-lit"}
  //     else {oHatSixteen.className = "green-button"}
  //     break;
  //
  //     case "c-hat-one":
  //     if (cHatOne.className === "blue-button"){cHatOne.className = "blue-button-lit"}
  //     else {cHatOne.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-two":
  //     if (cHatTwo.className === "blue-button"){cHatTwo.className = "blue-button-lit"}
  //     else {cHatTwo.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-three":
  //     if (cHatThree.className === "blue-button"){cHatThree.className = "blue-button-lit"}
  //     else {cHatThree.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-four":
  //     if (cHatFour.className === "blue-button"){cHatFour.className = "blue-button-lit"}
  //     else {cHatFour.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-five":
  //     if (cHatFive.className === "blue-button"){cHatFive.className = "blue-button-lit"}
  //     else {cHatFive.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-six":
  //     if (cHatSix.className === "blue-button"){cHatSix.className = "blue-button-lit"}
  //     else {cHatSix.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-seven":
  //     if (cHatSeven.className === "blue-button"){cHatSeven.className = "blue-button-lit"}
  //     else {cHatSeven.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-eight":
  //     if (cHatEight.className === "blue-button"){cHatEight.className = "blue-button-lit"}
  //     else {cHatEight.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-nine":
  //     if (cHatNine.className === "blue-button"){cHatNine.className = "blue-button-lit"}
  //     else {cHatNine.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-ten":
  //     if (cHatTen.className === "blue-button"){cHatTen.className = "blue-button-lit"}
  //     else {cHatTen.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-eleven":
  //     if (cHatEleven.className === "blue-button"){cHatEleven.className = "blue-button-lit"}
  //     else {cHatEleven.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-twelve":
  //     if (cHatTwelve.className === "blue-button"){cHatTwelve.className = "blue-button-lit"}
  //     else {cHatTwelve.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-thirteen":
  //     if (cHatThirteen.className === "blue-button"){cHatThirteen.className = "blue-button-lit"}
  //     else {cHatThirteen.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-fourteen":
  //     if (cHatFourteen.className === "blue-button"){cHatFourteen.className = "blue-button-lit"}
  //     else {cHatFourteen.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-fifteen":
  //     if (cHatFifteen.className === "blue-button"){cHatFifteen.className = "blue-button-lit"}
  //     else {cHatFifteen.className = "blue-button"}
  //     break;
  //
  //     case "c-hat-sixteen":
  //     if (cHatSixteen.className === "blue-button"){cHatSixteen.className = "blue-button-lit"}
  //     else {cHatSixteen.className = "blue-button"}
  //     break;
  //
  //   }
  // })



  rootDiv.addEventListener("click", function(event){

    if (event.target.className.includes('sequencer-button')){

      if (event.target.className.includes('lit')){
        let classNameArray = event.target.className.split('-')
        classNameArray.length -= 1
        event.target.className = classNameArray.join('-')

        let instrument = event.target.id.split('-')[0]
        let stepNum = Number(event.target.id.split('-')[1])
        removeNoteFromSequence(instrument, stepNum)

      } else {
        event.target.className += '-lit'

        let instrument = event.target.id.split('-')[0]
        let stepNum = Number(event.target.id.split('-')[1])
        addNoteToSequence(instrument, stepNum)

      }
    }

  })


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

// let drumKit = {
//   kick:'audio/Roland TR-808/Bassdrum-05.wav',
//   snare:'audio/Roland TR-808/Snaredrum.wav',
//   ohat:'audio/Roland TR-808/Hat Open.wav',
//   chat:'audio/Roland TR-808/Hat Closed.wav',
//   rimshot:'audio/Roland TR-808/Rimshot.wav',
//   tomH:'audio/Roland TR-808/Tom H.wav',
//   tomM:'audio/Roland TR-808/Tom M.wav',
//   tomL:'audio/Roland TR-808/Tom L.wav',
//   cowBell: 'audio/Roland TR-808/Cowbell.wav',
//   clap: 'audio/Roland TR-808/Clap.wav'
// }

let drumKit = {
  kick:'audio/Roland TR-909/Bassdrum-03.wav',
  snare:'audio/Roland TR-909/Clap.wav',
  ohat:'audio/Roland TR-909/Hat Open.wav',
  chat:'audio/Roland TR-909/Hat Closed.wav',
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
  new Note(loadedDrumKit[instrument][stepNum - 1], instrument, steps[stepNum - 1])
}

function removeNoteFromSequence(instrument, stepNum) {
  let targetIndex;
  let notes = steps[stepNum - 1].notes
  for (let i = 0; i < notes.length; i++){
    if (notes[i].instrument === instrument) {targetIndex = i; break;};
  }
  notes.splice(targetIndex, 1)
}

function changeVolumeOfInstrument(instrument, level) {
  loadedDrumKit[instrument].forEach(audioEl=>audioEl.volume = level)
}

let playback;
let tempo = 120
let stepCount = 1
// let shuffle = 0.0
let shuffle = 0.29

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

// addNoteToSequence('kick', 0)
// addNoteToSequence('hiHatOpen', 2)
// addNoteToSequence('snare', 4)
// addNoteToSequence('kick', 6)
// addNoteToSequence('kick', 8)
// addNoteToSequence('kick', 11)
// addNoteToSequence('snare', 12)
// addNoteToSequence('kick', 13)
// addNoteToSequence('kick', 13)
// addNoteToSequence('kick', 14)
// addNoteToSequence('kick', 15)
// addNoteToSequence('hiHatClosed', 0)
// addNoteToSequence('hiHatClosed', 7)
// addNoteToSequence('hiHatClosed', 8)
// addNoteToSequence('hiHatClosed', 9)
// addNoteToSequence('hiHatClosed', 10)
// addNoteToSequence('hiHatClosed', 11)
// addNoteToSequence('hiHatClosed', 12)
// addNoteToSequence('hiHatClosed', 13)
// addNoteToSequence('hiHatClosed', 14)
// addNoteToSequence('hiHatClosed', 15)
// addNoteToSequence('rimshot', 3)
// addNoteToSequence('rimshot', 6)
// addNoteToSequence('rimshot', 8)
// addNoteToSequence('rimshot', 11)
// addNoteToSequence('rimshot', 12)
// addNoteToSequence('tomH', 5)
// addNoteToSequence('tomH', 8)
// addNoteToSequence('tomM', 13)
// addNoteToSequence('tomM', 14)
// addNoteToSequence('tomL', 15)
// addNoteToSequence('cowBell', 9)
// addNoteToSequence('cowBell', 12)
// addNoteToSequence('clap', 3)
// addNoteToSequence('clap', 6)

// addNoteToSequence('kick', 0)
// addNoteToSequence('kick', 4)
// addNoteToSequence('kick', 8)
// addNoteToSequence('kick', 12)
// addNoteToSequence('hiHatClosed', 1)
// addNoteToSequence('hiHatOpen', 2)
// addNoteToSequence('clap', 4)
