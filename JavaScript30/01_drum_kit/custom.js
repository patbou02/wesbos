"use strict";

console.info("=== Custom Script for Drum Kit ===");

window.onload = init;

function init() {
  const keys = document.querySelectorAll('.key');

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; // return if no audio
    audio.currentTime = 0; // rewind to beginning of sound file
    audio.play(); // play audio
    key.classList.add('playing'); // add 'playing' class
  }

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it is not a transform
    this.classList.remove('playing'); // remove 'playing' class
  }

  keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  window.addEventListener('keydown', playSound);
}