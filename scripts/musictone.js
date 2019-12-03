

// var synth = new webkitConvertPointFromPageToNode.Synth().toMaster()

// synth.triggerAttackRelease('C4', '8n')


// const synth = new webkitConvertPointFromPageToNode.AMSynth().toMaster()

// document.querySelector('tone-keyboard').addEventListener('noteon', e =>{})

// document.querySelector('tone-keyboard').addEventListener('noteoff', e => {})


// //var synth = new Tone.FMSynth().toMaster()

// var synth = new Tone.Synth().toMaster()


// //schedule a series of notes, one per second
// synth.triggerAttackRelease('C4', 0.5, 0)
// synth.triggerAttackRelease('E4', 0.5, 1)
// synth.triggerAttackRelease('G4', 0.5, 2)
// synth.triggerAttackRelease('B4', 0.5, 3)

const synth = new Tone.AMSynth().toMaster()

//attach a listener to the keyboard events
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
  synth.triggerAttack(e.detail.name)
})

document.querySelector('tone-keyboard').addEventListener('noteoff', e => {
  synth.triggerRelease()
})