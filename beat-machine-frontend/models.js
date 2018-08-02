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

const DrumKit = (function() {
  const drumKits = {
    tr808: {
      kick:'audio/Roland TR-808/Bassdrum-05.wav',
      snare:'audio/Roland TR-808/Snaredrum.wav',
      ohat:'audio/Roland TR-808/Hat Open.wav',
      chat:'audio/Roland TR-808/Hat Closed.wav'
    },
    tr909: {
      kick:'audio/Roland TR-909/Bassdrum-03.wav',
      snare:'audio/Roland TR-909/Clap.wav',
      ohat:'audio/Roland TR-909/Hat Open.wav',
      chat:'audio/Roland TR-909/Hat Closed.wav'
    },
    trap: {
      kick:'audio/TRAP/Trapaholic Kick (1).WAV',
      snare:'audio/TRAP/Trapaholic Snare (7).WAV',
      ohat:'audio/TRAP/Trapaholic Hihat (25).wav',
      chat:'audio/TRAP/Trap Chant.wav'
    }
  }
  return class DrumKit {
    constructor(name) {
      this.name = name
      this.kick = this.instantiateAudioElements(drumKits[name].kick)
      this.snare = this.instantiateAudioElements(drumKits[name].snare)
      this.ohat = this.instantiateAudioElements(drumKits[name].ohat)
      this.chat = this.instantiateAudioElements(drumKits[name].chat)
    }
    instantiateAudioElements (audioFilePath){
      let sampleObjects = []
      let count = 1
      while (count <= 16) {
        sampleObjects.push(new Audio(audioFilePath))
        count++
      }
      return sampleObjects
    }
  }
})()
