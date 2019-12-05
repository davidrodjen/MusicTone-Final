

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

//.toMaster connects it to the speakers
const synth = new Tone.AMSynth().toMaster()


// synth.triggerAttackRelease('C4', '8n');
// const notes = [
//   'C4', 'E4', 'G4',
//   'C5', 'E5', 'G5'
// ];

// var index = 0

// Tone.Transport.scheduleRepeat(time => {
//   repeat(time);
// }, '8n');

// console.log(Tone.Transport.bm.value);

// //%notes.length will cause a repeat
// function repeat(time) {
//   let note = notes[index % notes.length];
//   synth.triggerAttackRelease(note, '8n', time);
//   index++;
// }

// tone.Transport.start();

// setTimeout(() => {
//   Tone.Transport.stop();
// }, 5000)


///////////////////////////
//attach a listener to the keyboard events
document.querySelector('tone-keyboard').addEventListener('noteon', e => {
  synth.triggerAttack(e.detail.name)
})

document.querySelector('tone-keyboard').addEventListener('noteoff', e => {
  synth.triggerRelease()
})
////////////////////////
// const piano = new Tone.FMSynth().ToMaster()

// document.querySelector('tone-keyboard').addEventListener('noteon', f => {
//   piano.triggerAttack(f.detail.name)
// })

// document.querySelector('tone-keyboard').addEventListener('noteoff', f => {
//   piano.triggerRelease()
// })