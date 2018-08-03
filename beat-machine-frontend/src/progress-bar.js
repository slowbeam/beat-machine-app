const audio = document.getElementById("audio");
const container = document.getElementById('container');
const progress = document.getElementById('progress');
let timer;
let percent = 0;

audio.addEventListener("playing", function(event) {
  let duration = event.target.duration;
  advance(duration, audio);
});

audio.addEventListener("pause", function(event) {
  clearTimeout(timer);
});

document.addEventListener('click', event => {
  if (event.target.dataset.action === 'toggle') {
    togglePlay()
  }
})

container.addEventListener('click', event => {
  let percent = event.offsetX / container.offsetWidth
  progress.style.width = percent * 100 +'%'
  audio.currentTime = percent * audio.duration;
})

let advance = function(duration, element) {
  percent = Math.min(element.currentTime / duration * 100, 100);
  progress.style.width = percent+'%'
  startTimer(duration, element);
}

let startTimer = function(duration, element){
  if(percent < 100) {
    timer = setTimeout(function (){advance(duration, element)}, 100);
  }
}

function togglePlay (e) {
  e = e || window.event;
  var btn = e.target;
  if (!audio.paused) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }

}
