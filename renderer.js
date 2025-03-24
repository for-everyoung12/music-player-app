const songs = [
    {
      title: "like Jennie",
      artist: "Jennie",
      file: "assets/songs/like-JENNIE.mp3",
      cover: "assets/covers/jennie-cover.jpg"
    },
    {
        title: "ETA",
        artist: "Newjeans",
        file: "assets/songs/ETA-NEWJEANS.mp3",
        cover: "assets/covers/newjeanz.jpg"
    }
  ];
  
  let currentIndex = 0;
  
  const audio = document.getElementById('audio');
  const title = document.getElementById('title');
  const artist = document.getElementById('artist');
  const cover = document.getElementById('cover');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current');
  const durationEl = document.getElementById('duration');
  const playIcon = document.getElementById('playIcon');
  
  function loadingSong(index) {
    const song = songs[index];
    title.innerText = song.title;
    artist.innerText = song.artist;
    cover.src = song.cover;
    audio.src = song.file;
  
    playIcon.src = "assets/icons/pause.png";
  }
  
  audio.addEventListener('timeupdate', () => {
    if (!isNaN(audio.duration)) {
      progress.max = Math.floor(audio.duration);
      progress.value = Math.floor(audio.currentTime);
  
      currentTimeEl.innerText = formatTime(audio.currentTime);
      durationEl.innerText = formatTime(audio.duration);
  
      const percent = (audio.currentTime / audio.duration) * 100;
      progress.style.background = `linear-gradient(to right, #b38bff 0%, #b38bff ${percent}%, #ffffff44 ${percent}%, #ffffff44 100%)`;
    }
  });
  
  
  progress.addEventListener('input', () => {
    audio.currentTime = progress.value;
  });
  
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playIcon.src = "assets/icons/play.png"; 
    } else {
      audio.pause();
      playIcon.src = "assets/icons/pause.png"; 
    }
  }
  
  function nextSong() {
    currentIndex = (currentIndex + 1) % songs.length;
    loadingSong(currentIndex);
    audio.play();
    playIcon.src = "assets/icons/play.png";
  }
  
  function prevSong() {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadingSong(currentIndex);
    audio.play();
    playIcon.src = "assets/icons/play.png";
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }
  
  // Load ban đầu
  loadingSong(currentIndex);
  