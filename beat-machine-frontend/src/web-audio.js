document.addEventListener('DOMContentLoaded', (event) => {
let context;
let bufferLoader;

function init() {
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  console.log('context created');

  bufferLoader = new BufferLoader(
    context,
    [
      './audio/LF_hihat_closed_05.wav',
      './audio/LF_hihat_open_03.wav'
    ],
    finishedLoading
  );

  bufferLoader.load();
}

function finishedLoading(bufferList) {
  let src1 = context.createBufferSource();
  let src2 = context.createBufferSource();

  src1.buffer = bufferList[0];
  src2.buffer = bufferList[1];

  src1.connect(context.destination);
  src2.connect(context.destination);
  src1.start(0)
  src2.start(0)
}

init()

})
