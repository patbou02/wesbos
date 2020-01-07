console.log('IT WORKS!');

const TERMS = document.querySelector('.terms-and-conditions');
const WATCH = document.querySelector('.watch');
const BUTTON = document.querySelector('.accept');

function obCallback(payload) {
  if (payload[0].intersectionRatio === 1) {
    BUTTON.disabled = false;
    // stop observing
    OB.unobserve(TERMS.lastElementChild)
  }
}

const OB = new IntersectionObserver(obCallback, {
  root: TERMS,
  threshold: 1,
});

// check difference from total scrollable height versus actual scrolled height.
// TERMS.addEventListener('scroll', function(e) {
//   (e.currentTarget.scrollTop === e.currentTarget.scrollTopMax) ?  console.info('we have reached the bottom') : console.info(`you are getting closer! Only ${e.currentTarget.scrollTopMax - e.currentTarget.scrollTop} more to go.`);
// });

OB.observe(TERMS.lastElementChild);