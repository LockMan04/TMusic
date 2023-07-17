window.onload = function() {
  var audioPlayer = document.getElementById('audio-player');
  
function playMusic() {
  if (audioPlayer.paused) {
    audioPlayer.play();
    document.querySelector('.bi-play').classList.add('bi-pause');
    document.querySelector('.bi-play').classList.remove('bi-play');
  } else {
    audioPlayer.pause();
    document.querySelector('.bi-pause').classList.add('bi-play');
    document.querySelector('.bi-pause').classList.remove('bi-pause');
  }
}
};


