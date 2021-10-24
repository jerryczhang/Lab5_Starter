// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let vol = document.getElementById('volume');
  let hornImg = document.querySelector('header+img');
  let soundImg = document.querySelector('input+img');
  let audio = document.querySelector('audio');
  let playButton = document.querySelector('button');
  let dropdown = document.getElementById('horn-select');
  const jsConfetti = new JSConfetti();

  audio.volume = vol.value / 100;

  dropdown.addEventListener('change', function() {
    if (dropdown.value == 'air-horn') {
      hornImg.setAttribute('src', 'assets/images/air-horn.svg');
      hornImg.setAttribute('alt', 'air horn');
      audio.setAttribute('src', 'assets/audio/air-horn.mp3')
    } else if (dropdown.value == 'car-horn') {
      hornImg.setAttribute('src', 'assets/images/car-horn.svg');
      hornImg.setAttribute('alt', 'car horn');
      audio.setAttribute('src', 'assets/audio/car-horn.mp3')
    } else {
      hornImg.setAttribute('src', 'assets/images/party-horn.svg');
      hornImg.setAttribute('alt', 'party horn');
      audio.setAttribute('src', 'assets/audio/party-horn.mp3')
    }
  });

  vol.addEventListener('change', function() {
    if (vol.value == 0) {
      soundImg.setAttribute('src', 'assets/icons/volume-level-0.svg');
    } else if (vol.value < 33) {
      soundImg.setAttribute('src', 'assets/icons/volume-level-1.svg');
    } else if (vol.value < 67) {
      soundImg.setAttribute('src', 'assets/icons/volume-level-2.svg');
    } else {
      soundImg.setAttribute('src', 'assets/icons/volume-level-3.svg');
    }
    audio.volume = vol.value / 100;
  });

  playButton.addEventListener('click', function() {
    if (dropdown.value != 'select') {
      audio.play();
    }
    if (dropdown.value == 'party-horn' && vol.value > 0) {
      jsConfetti.addConfetti();
    }
  });
}