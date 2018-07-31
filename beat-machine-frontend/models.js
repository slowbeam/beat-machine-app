class Step {
  constructor(number) {
    this.number = number
    this.notes = []
  }
}

class Note {
  constructor(audio, instrument, step) {
    this.audio = audio
    this.instrument = instrument
    // this.step = step
    step.notes.push(this)
  }
}
