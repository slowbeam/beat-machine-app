class Step {
  constructor(number) {
    this.number = number
    this.notes = []
  }
}

class Note {
  constructor(instrument, step) {
    this.instrument = instrument
    this.step = step
    step.notes.push(this)
  }
}
