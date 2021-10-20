// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById('voice-select');
  let textToSpeak = document.getElementById('text-to-speak');
  let speakButton = document.querySelector('button');
  let speakImg = document.querySelector('img');
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();

    for (var i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name;
      voiceSelect.appendChild(option);
    }
  }

  speechSynthesis.onvoiceschanged = populateVoiceList;

  speakButton.addEventListener('click', function() {
    let utterance = new SpeechSynthesisUtterance(textToSpeak.value);
    let voiceName = voiceSelect.value;
    for (const voice in voices) {
      if (voices[voice].name == voiceName) {
        utterance.voice = voices[voice];
      }
    }
    utterance.addEventListener('start', function() {
      speakImg.setAttribute('src', 'assets/images/smiling-open.png');
    });
    utterance.addEventListener('end', function() {
      speakImg.setAttribute('src', 'assets/images/smiling.png');
    });
    synth.speak(utterance);
  });


}
