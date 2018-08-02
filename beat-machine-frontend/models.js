const Step = (function() {
  return class Step {
    constructor(number) {
      this.number = number
      this.notes = []
    }
  }
})()

const Note = (function() {
  return class Note {
    constructor(instrument, step) {
      this.instrument = instrument
      // this.step = step
      step.notes.push(this)
    }
  }
})()

// class DrumKit {
//   constructor(name, instrumentsAudio) {
//     this.name = name
//
//   }
// }
