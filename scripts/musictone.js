const synth = new tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "d":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       synth.triggerRelease(); 
  }
});

 //var synth = new webkitConvertPointFromPageToNode.Synth().toMaster()

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
//const synth = new Tone.AMSynth().toMaster()


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
document.querySelector('piano').addEventListener('noteon', e => {
  synth.triggerAttack(e.detail.name)
})

document.querySelector('piano').addEventListener('noteoff', e => {
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