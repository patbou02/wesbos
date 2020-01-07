"use strict";

console.info('it works');

// Grab page elements
const CARD_BUTTONS = document.querySelectorAll('.card button');
const MODAL_OUTER = document.querySelector('.modal-outer');
const MODAL_INNER = document.querySelector('.modal-inner');

function handleCardButtonClick(e) {
  const BUTTON = e.currentTarget;
  const CARD = BUTTON.closest('.card');
  const IMG_SRC = CARD.querySelector('img').src;
  const DESC = CARD.dataset.description;
  const NAME = CARD.querySelector('h2').textContent;

  MODAL_INNER.innerHTML = `
    <img width="600" height="600" src="${IMG_SRC.replace('200', '600')}" alt="${NAME}" />
    <p>${DESC}</p>
  `;

  MODAL_OUTER.classList.add('open');
}

function closeModal() {
  MODAL_OUTER.classList.remove('open');
}

// Set event listeners
CARD_BUTTONS.forEach(button => button.addEventListener('click', handleCardButtonClick));

// add event listener on click
MODAL_OUTER.addEventListener('click', function(e) {
  const isOutside = !e.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
});

// add event listener on escape using ARROW FUNCTION
window.addEventListener('keyup', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});