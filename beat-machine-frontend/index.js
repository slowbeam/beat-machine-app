document.addEventListener("DOMContentLoaded", ()=>{

  let steps = []

  function instantiateSteps() {
    let count = 1
    while (count <= 16) {
      steps.push(new Step(count))
      count++
    }
  }

  instantiateSteps()

  let playback;
  let currentTempo = 120
  let stepCount = 1
  // let shuffle = 0.0
  let shuffle = 0.29

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
    new Note(instrument, steps[stepNum - 1])
  }

  function removeNoteFromSequence(instrument, stepNum) {
    let targetIndex;
    let notes = steps[stepNum - 1].notes
    for (let i = 0; i < notes.length; i++){
      if (notes[i].instrument === instrument) {targetIndex = i; break;};
    }
    notes.splice(targetIndex, 1)
  }

  // function changeVolumeOfInstrument(instrument, level) {
  //   loadedDrumKit[instrument].forEach(audioEl=>audioEl.volume = level)
  // }

  function setShuffle(n) {
    shuffle = n
  }

  function parseTempo(currentTempo) {
    return (60000 / currentTempo) / 4
  }

  function shuffleOffset() {
    if (stepCount % 2 === 0) {
      return 1 + shuffle
    } else {
      return 1 - shuffle
    }
  }

  function parseShuffle(shuffle) {
    return shuffle / 100
  }

  function incrementTempo(){
    currentTempo += 1
    $("#tempo-screen").sevenSeg({ value: currentTempo});
  }

  function  decrementTempo(){
    currentTempo -= 1
    $("#tempo-screen").sevenSeg({ value: currentTempo});
  }

  function startPlay() {
    playback = setTimeout(function playBeats() {
      console.log(stepCount);

      steps[stepCount - 1].notes.forEach(function(note) {
        loadedDrumKit[note.instrument][stepCount - 1].play()
      })
      if (stepCount === 16){
        stepCount = 1
        // advanceLights()
      } else {
        stepCount++
        // advanceLights()
      }
      playback = setTimeout(playBeats, (parseTempo(currentTempo) * shuffleOffset()));
    }, (parseTempo(currentTempo)));
  }

  function stopPlay() {
    clearTimeout(playback)
    // stepCount = 1 // resets sequence to beginning
  }

  // function advanceLights() {
  //   let previousLight = document.querySelector(`#sequence-light-${stepCount - 1}`)
  //   previousLight.innerHTML.split('-').pop()
  //   previousLight.innerHTML = previousLight.innerHTML.join('-')
  //   let currentLight = document.querySelector(`#sequence-light-${stepCount}`)
  //   currentLight.innerHTML += '-lit'
  // }

  $("#tempo-screen").sevenSeg({ digits: 3, value: currentTempo, decimalPoint: false, allowInput: false});

  $("#shuffle-screen").sevenSeg({ digits: 2, value: 0, decimalPoint: false, allowInput: false});

  const rootDiv = document.getElementById('main-container')

  // const snareOne = document.getElementById('snare-one')
  // const snareTwo = document.getElementById('snare-two')
  // const snareThree = document.getElementById('snare-three')
  // const snareFour = document.getElementById('snare-four')
  // const snareFive = document.getElementById('snare-five')
  // const snareSix = document.getElementById('snare-six')
  // const snareSeven = document.getElementById('snare-seven')
  // const snareEight = document.getElementById('snare-eight')
  // const snareNine = document.getElementById('snare-nine')
  // const snareTen = document.getElementById('snare-ten')
  // const snareEleven = document.getElementById('snare-eleven')
  // const snareTwelve = document.getElementById('snare-twelve')
  // const snareThirteen = document.getElementById('snare-thirteen')
  // const snareFourteen = document.getElementById('snare-fourteen')
  // const snareFifteen = document.getElementById('snare-fifteen')
  // const snareSixteen = document.getElementById('snare-sixteen')
  //
  // const kickOne = document.getElementById('kick-one')
  // const kickTwo = document.getElementById('kick-two')
  // const kickThree = document.getElementById('kick-three')
  // const kickFour = document.getElementById('kick-four')
  // const kickFive = document.getElementById('kick-five')
  // const kickSix = document.getElementById('kick-six')
  // const kickSeven = document.getElementById('kick-seven')
  // const kickEight = document.getElementById('kick-eight')
  // const kickNine = document.getElementById('kick-nine')
  // const kickTen = document.getElementById('kick-ten')
  // const kickEleven = document.getElementById('kick-eleven')
  // const kickTwelve = document.getElementById('kick-twelve')
  // const kickThirteen = document.getElementById('kick-thirteen')
  // const kickFourteen = document.getElementById('kick-fourteen')
  // const kickFifteen = document.getElementById('kick-fifteen')
  // const kickSixteen = document.getElementById('kick-sixteen')
  //
  // const oHatOne = document.getElementById('o-hat-one')
  // const oHatTwo = document.getElementById('o-hat-two')
  // const oHatThree = document.getElementById('o-hat-three')
  // const oHatFour = document.getElementById('o-hat-four')
  // const oHatFive = document.getElementById('o-hat-five')
  // const oHatSix = document.getElementById('o-hat-six')
  // const oHatSeven = document.getElementById('o-hat-seven')
  // const oHatEight = document.getElementById('o-hat-eight')
  // const oHatNine = document.getElementById('o-hat-nine')
  // const oHatTen = document.getElementById('o-hat-ten')
  // const oHatEleven = document.getElementById('o-hat-eleven')
  // const oHatTwelve = document.getElementById('o-hat-twelve')
  // const oHatThirteen = document.getElementById('o-hat-thirteen')
  // const oHatFourteen = document.getElementById('o-hat-fourteen')
  // const oHatFifteen = document.getElementById('o-hat-fifteen')
  // const oHatSixteen = document.getElementById('o-hat-sixteen')
  //
  // const cHatOne = document.getElementById('c-hat-one')
  // const cHatTwo = document.getElementById('c-hat-two')
  // const cHatThree = document.getElementById('c-hat-three')
  // const cHatFour = document.getElementById('c-hat-four')
  // const cHatFive = document.getElementById('c-hat-five')
  // const cHatSix = document.getElementById('c-hat-six')
  // const cHatSeven = document.getElementById('c-hat-seven')
  // const cHatEight = document.getElementById('c-hat-eight')
  // const cHatNine = document.getElementById('c-hat-nine')
  // const cHatTen = document.getElementById('c-hat-ten')
  // const cHatEleven = document.getElementById('c-hat-eleven')
  // const cHatTwelve = document.getElementById('c-hat-twelve')
  // const cHatThirteen = document.getElementById('c-hat-thirteen')
  // const cHatFourteen = document.getElementById('c-hat-fourteen')
  // const cHatFifteen = document.getElementById('c-hat-fifteen')
  // const cHatSixteen = document.getElementById('c-hat-sixteen')

  const playButton = document.getElementById('play-button')
  const stopButton = document.getElementById('stop-button')

  const tempoUpButton = document.getElementById('tempo-up-button')
  const tempoDownButton = document.getElementById('tempo-down-button')

  const shuffleUpButton = document.getElementById('shuffle-up-button')
  const shuffleDownButton = document.getElementById('shuffle-down-button')

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

    if (event.target.dataset.action === 'play') {
      if (playButton.className === "play-button"){playButton.className = "play-button-lit"; stopButton.className = "stop-button"; startPlay()}
      else {playButton.className = "play-button"; stopButton.className = "stop-button-lit"; stopPlay()}
    }
    if (event.target.dataset.action === 'stop') {
      if (stopButton.className === "stop-button"){stopButton.className = "stop-button-lit"; playButton.className = "play-button"; stopPlay()}
    }
    if (event.target.dataset.action === 'tempo-up') {
      tempoUpButton.className = "tempo-up-button-lit"
      setTimeout(()=>{tempoUpButton.className = "tempo-up-button"}, 300)
      incrementTempo()
    }
    if (event.target.dataset.action === 'tempo-down') {
      tempoDownButton.className = "tempo-down-button-lit"
      setTimeout(()=>{tempoDownButton.className = "tempo-down-button"}, 300)
      decrementTempo()

      // case "shuffle-up":
      // shuffleUpButton.className = "shuffle-up-button-lit"
      // setTimeout(()=>{shuffleUpButton.className = "shuffle-up-button"}, 300)
      // incrementShuffle()
      // break;
      //
      // case "shuffle-down":
      // shuffleDownButton.className = "shuffle-down-button-lit"
      // setTimeout(()=>{shuffleDownButton.className = "shuffle-down-button"}, 300)
      // decrementShuffle()
      // break;

    }

  })

})


let currentShuffle = 0

function incrementShuffle(){
  currentShuffle += 1
  $("#shuffle-screen").sevenSeg({ value: currentShuffle});
}

function decrementShuffle(){
  currentShuffle -= 1
  $("#shuffle-screen").sevenSeg({ value: currentShuffle});
}





// function startPlay() {
//   playback = setInterval(playBeats, parseTempo(currentTempo))
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
