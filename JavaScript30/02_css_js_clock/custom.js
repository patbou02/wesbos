"use strict";

console.info("=== Custom CSS/JS Clock ===");

// Global Variables
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setHands() {
  const now = new Date();

  const hours = now.getHours();
  const hoursDegrees = ((360 / 12) * hours) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((360 / 60) * minutes) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = now.getSeconds();
  const secondsDegrees = ((360 / 60) * seconds) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setHands, 1000);