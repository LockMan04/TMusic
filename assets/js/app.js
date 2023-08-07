// Chữ Chạy
var typedEffect = new Typed(".multiText", {
    strings : ["Hello", "Chill Tý Nhạc Nhé", "Khò Khò", "Cà Nhính Cà Nhính", "Anh Yêu Bé Nhất", "TMusic AppWeb Music Số 1 Việt Nam"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 50,
    backDelay : 10000
})

// Play Music
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
    document.querySelectorAlluerySelector('.bi-pause').classList.remove('bi-pause');
  }
}
};

// Time Music
    var audioPlayer = document.getElementById('audio-player');
    var audioPlayer = document.getElementById('audio-player');
    var musicRange = document.getElementById('music-range');
    var musicDuration = document.getElementById('music-duration');
    var musicDurationEnd = document.getElementById('music-duration-end');

audioPlayer.addEventListener('loadedmetadata', function() {
  var totalDuration = audioPlayer.duration;
  var formattedDuration = formatTime(totalDuration);
  musicDurationEnd.textContent = formattedDuration;
});

audioPlayer.addEventListener('loadedmetadata', function() {
    var totalDuration = audioPlayer.duration;
    var minutes = Math.floor(totalDuration / 60);
    var seconds = Math.floor(totalDuration % 60);
    var formattedDuration = padZero(minutes) + ':' + padZero(seconds);
    musicDuration.textContent = formattedDuration;
});

musicRange.addEventListener('input', function() {
    var selectedTime = (musicRange.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = selectedTime;
});

audioPlayer.addEventListener('timeupdate', function() {
    var currentTime = audioPlayer.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    var formattedTime = padZero(minutes) + ':' + padZero(seconds);
    musicRange.value = (currentTime / audioPlayer.duration) * 100;
    musicDuration.textContent = formattedTime;
});

function formatTime(duration) {
  var minutes = Math.floor(duration / 60);
  var seconds = Math.floor(duration % 60);

  var formattedTime = '';
  formattedTime += (minutes < 10 ? '0' : '') + minutes + ':';
  formattedTime += (seconds < 10 ? '0' : '') + seconds;

  return formattedTime;
}
function padZero(number) {
  return number.toString().padStart(2, '0');
}

// Nút Play Music
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

// Đóng mở Home / Tìm Kiếm
const homeButton = document.getElementById('home');
const searchButton = document.getElementById('search');
const HomeHiden = document.getElementById('home-hiden');
const searchHiden = document.getElementById('search-hiden');
const inforHiden = document.getElementById('infor-hiden');

searchButton.addEventListener('click', function() {
  HomeHiden.classList.add('hiden');
  searchButton.classList.add('text-underline');
  homeButton.classList.remove('text-underline');
  searchHiden.classList.remove('hiden');
});
homeButton.addEventListener('click', function() {
  HomeHiden.classList.remove('hiden');
  searchHiden.classList.add('hiden');
  searchButton.classList.remove('text-underline');
  homeButton.classList.add('text-underline');
})
