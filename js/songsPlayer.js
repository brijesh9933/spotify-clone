import { songs } from './songsCollection.js';

const playPauseBtn = document.getElementById('playPauseBtn');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressBar = document.querySelector('.progress-bar');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');

const songNameElement = document.getElementById('songName');
const artistNameElement = document.getElementById('artistName');


songs.forEach(song => {
    console.log(`Title: ${song.songName}, Artist: ${song.artistName}`);
  });


let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex].songPart);
let isPlaying = false;

function togglePlayPause() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

function updateProgress() {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progress}%`;
    progressBar.setAttribute('aria-valuenow', progress);
    
    currentTimeSpan.textContent = formatTime(audio.currentTime);
    durationSpan.textContent = formatTime(audio.duration);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    const currentSong = songs[currentSongIndex];
    audio.src = currentSong.songPart;
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
    updateSongInfo(currentSong);
}

function playPreviousSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    const currentSong = songs[currentSongIndex];
    audio.src = currentSong.songPart;
    audio.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    isPlaying = true;
    updateSongInfo(currentSong);
}

playPauseBtn.addEventListener('click', togglePlayPause);
nextBtn.addEventListener('click', playNextSong);
prevBtn.addEventListener('click', playPreviousSong);
audio.addEventListener('timeupdate', updateProgress);


function updateSongInfo(song) {
    songNameElement.textContent = song.songName;
    artistNameElement.textContent = song.artistName;
}

updateSongInfo(songs[currentSongIndex]);