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
      kick:'audio/Roland TR-808/Bassdrum-04.wav',
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
    trap1: {
      kick:'audio/TRAP1/trap-kick.WAV',
      snare:'audio/TRAP1/Trapaholic Snare (7).WAV',
      ohat:'audio/TRAP1/trap-ride.wav',
      chat:'audio/TRAP1/Trap Chant.wav'
    },
    trap2: {
      kick:'audio/TRAP2/trap-kick.wav',
      snare:'audio/TRAP2/DT - Snare14.WAV',
      ohat:'audio/TRAP2/Open Hat.wav',
      chat:'audio/TRAP2/Hat_Closed_02.wav'
    },
    trap3: {
      kick: 'audio/TRAP3/trap-3-kick.wav',
      snare: 'audio/TRAP3/trap-3-snare.wav',
      ohat: 'audio/TRAP3/trap-3-808.wav',
      chat: 'audio/TRAP3/trap-3-chat.wav'
    },
    anotherKit: {
      kick:'audio/another kit/LF_kick_08.wav',
      snare:'audio/another kit/LF_snare_01.wav',
      ohat:'audio/another kit/LF_hihat_open_03.wav',
      chat:'audio/another kit/LF_hihat_closed_05.wav'
    },
    airhorns: {
      kick:'audio/airhorns/airhorn1.wav',
      snare:'audio/airhorns/airhorn2.wav',
      ohat:'audio/airhorns/airhorn3.wav',
      chat:'audio/airhorns/airhorn4.wav'
    },
    grapelady: {
      kick: 'audio/GrapeLady/grape1.mp3',
      snare: 'audio/GrapeLady/grape2.mp3',
      ohat: 'audio/GrapeLady/grape3.mp3',
      chat: 'audio/GrapeLady/grape4.mp3'
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
    static all(){
      return drumKits
    }
  }
})()
