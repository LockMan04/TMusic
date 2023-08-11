// Chữ Chạy
var typedEffect = new Typed(".multiText", {
    strings : ["Hello", "Chill Tý Nhạc Nhé", "Khò Khò", "Cà Nhính Cà Nhính", "Anh Yêu Bé Nhất", "TMusic AppWeb Music Số 1 Việt Nam"],
    loop : true,
    typeSpeed : 80,
    backSpeed : 50,
    backDelay : 10000
})

// Time Music
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


// Tester
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const imagePlay = $('.song-playing-img img')
const nameSong = $('.song-playing-title-namesong')
const nameSinger = $('.name-singer')
const audio = $('#audio-player')
const playBtn = $('#play-pause')
const timeRange = $('#music-range')
const timeStart = $('#music-duration')
const timeEnd = $('#music-duration-end')


window.onload = function() { 
  timeRange.value = 0
  timeStart.textContent = '00:00'
}

const app = {
  isPlaying: false,
  currentIndex: 10,
  songs: [
  {
    id: '1',
    name: 'nếu lúc đó',
    type: 'Bài hát',
    singer: 'tlinh, 2pillz',
    path: './assets/music/songs/NeuLucDo-tlinh2pillz-8783613.mp3',
    image: './assets/music/img-songs/neulucdo.jpg'
  },
  {
    id: '2',
    name: 'Anh Nhớ Ra',
    type: 'Bài hát',
    singer: 'Vũ ft.Trang',
    path: './assets/music/songs/Anh Nhớ Ra (feat. TRANG) - Vũ..mp3',
    image: './assets/music/img-songs/Anh Nhớ Ra (feat. TRANG) - Vũ..jpg'
  },
  {
    id: '3',
    name: 'Anh Đã Ổn Hơn',
    type: 'Bài hát',
    singer: 'MKC',
    path: './assets/music/songs/AnhDaOnHon-MCK-8804113.mp3',
    image: './assets/music/img-songs/anh da on hon.jpg'
  },
  {
    id: '4',
    name: 'Chìm Sâu',
    type: 'Bài hát',
    singer: 'RPT MKC',
    path: './assets/music/songs/Chìm Sâu - RPT MCK.mp3',
    image: './assets/music/img-songs/Chìm Sâu - RPT MCK.jpg'
  },
  {
    id: '5',
    name: 'Chuyện Đôi Ta',
    type: 'Bài hát',
    singer: 'Emcee L(Da LAB), ft.Muộii',
    path: './assets/music/songs/Chuyện Đôi Ta (feat. Muộii) - Emcee L (Da LAB).mp3',
    image: './assets/music/img-songs/Chuyện Đôi Ta (feat. Muộii) - Emcee L (Da LAB).jpg'
  },
  {
    id: '6',
    name: 'Ghệ Đẹp',
    type: 'Bài hát',
    singer: 'Cain',
    path: './assets/music/songs/Ghệ Đẹp - Cain.mp3',
    image: './assets/music/img-songs/Ghệ Đẹp - Cain.jpg'
  },
  {
    id: '7',
    name: 'ghệ iu dấu của em ơi',
    type: 'Bài hát',
    singer: 'tlinh',
    path: './assets/music/songs/ghệ iu dấu của em ơi - tlinh.mp3',
    image: './assets/music/img-songs/ghệ iu dấu của em ơi - tlinh.jpg'
  },
  {
    id: '8',
    name: 'Sinh Ra Đã Là Thứ Đối Lập Nhau',
    type: 'Bài hát',
    singer: 'Emcee L (Da LAB), ft.Badbies',
    path: './assets/music/songs/Sinh Ra Đã Là Thứ Đối Lập Nhau (feat. Badbies) - Emcee L (Da LAB).mp3',
    image: './assets/music/img-songs/Sinh Ra Đã Là Thứ Đối Lập Nhau (feat. Badbies) - Emcee L (Da LAB).jpg'
  },
  {
    id: '9',
    name: 'Trước Khi Em Tồn Tại',
    type: 'Bài hát',
    singer: 'Thắng',
    path: './assets/music/songs/Trước Khi Em Tồn Tại - Thắng.mp3',
    image: './assets/music/img-songs/Trước Khi Em Tồn Tại - Thắng.jpg'
  },
  {
    id: '10',
    name: 'Waitting For You',
    type: 'Bài hát',
    singer: 'MONO',
    path: './assets/music/songs/Waiting For You - MONO.mp3',
    image: './assets/music/img-songs/Waiting For You - MONO.jpg'
  },
  {
    id: '11',
    name: 'She Said',
    type: 'Bài hát',
    singer: 'WEAN, NAOMI',
    path: './assets/music/songs/She Said - WEAN, NAOMI - NhacHay360.mp3',
    image: './assets/music/img-songs/she said.jpg'
  }
  ],
  
  render: function () {
    const htmls = this.songs.map(song => {
      return `
            <div class="library-playlist-item" style="--i:${song.id}">
              <div class="library-playlist-img">
                  <img src="${song.image}" alt="">
              </div>
              <div class="library-playlist-title">
                  <p>${song.name}</p>
                  <p>${song.type}<i class="bi bi-dot"></i>${song.singer}</p>
              </div>
            </div>
      `
    })
    $('.library-playlist').innerHTML = htmls.join('')
  },
  defineProperties: function() {
    Object.defineProperty(this, 'currentSong', {
      get: function() {
        return this.songs[this.currentIndex]
      }
    })
  },

  loadCurrentSong: function () {
    const _this = this
    imagePlay.src = this.currentSong.image
    nameSinger.textContent = this.currentSong.singer
    nameSong.textContent = this.currentSong.name
    audio.src = this.currentSong.path

    playBtn.onclick = function () {
      if(_this.isPlaying) {
        audio.pause()
      } else {
        audio.play()
      }
    }

    // Sử lý play
    audio.onplay = function () { 
      _this.isPlaying = true
      playBtn.classList.replace('bi-play', 'bi-pause')
    }

    // Sử lý pause
    audio.onpause = function () {
      _this.isPlaying = false
      playBtn.classList.replace('bi-pause', 'bi-play')
    }

    audio.ontimeupdate = function () { 
      const timeNow = audio.currentTime
      const timeDuration = audio.duration

      timeRange.value = timeNow / timeDuration * 100

    }
    
  },

  // Web bắt đầu
  start: function () {
    // Lấy ra bài hát đầu tiên
    this.defineProperties()

    // Load bài hát 
    this.loadCurrentSong()

    // Load playlist
    this.render();
  }
}

app.start();