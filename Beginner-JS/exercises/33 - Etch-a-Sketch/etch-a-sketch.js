'use strict';

console.info('testing file');

// Select the elements on the page - canvas, shake button
const CANVAS = document.querySelector('canvas');
const CTX = CANVAS.getContext('2d');
const MOVE_AMOUNT = 10;
const SHAKE_BTN = document.querySelector('button.shake');

// Setup our canvas for drawing
CTX.lineJoin = 'round';
CTX.lineCap = 'round';
CTX.lineWidth = 10;

// Write randomize draw point function

// DESTRUCTURING: this is equivalent to the following where variable names
// are same as object property and therefore the following is a shorthand.
//    const width = CANVAS.width;
//    const height = CANVAS.height;
const { width, height } = CANVAS;

// Create random starting X and Y coordinates.
let X = Math.floor(Math.random() * width);
let Y = Math.floor(Math.random() * height);

CTX.beginPath();
CTX.moveTo(X, Y);
CTX.lineTo(X, Y);
CTX.stroke();
// return `Starting point is [x: ${x}, y: ${y}]`;

// Write a draw function

// OBJECT DESTRUCTURING: this is the equivalent to the following where
// function draw(options) {
//   console.log(options);
// }
function draw({ key }) {
  console.info(key);
  // start the path
  CTX.beginPath();
  CTX.moveTo(X, Y);
  // update our X and Y values depending on whether the user pressed up, down, left or right.
  switch(key) {
    case 'ArrowUp':
      console.info('UP');
      Y -= MOVE_AMOUNT;
      break;
    case 'ArrowDown':
      console.info('DOWN');
      Y += MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      console.info('LEFT');
      X -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      console.info('RIGHT');
      X += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  CTX.lineTo(X, Y);
  CTX.stroke();
}

// Write a handler for the keys
function handleKey(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

// Clear (shake) Function

// Listen for arrow keys
window.addEventListener('keydown', handleKey);