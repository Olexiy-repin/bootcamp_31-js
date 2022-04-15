const sectionsEl = document.querySelectorAll('.section');
const targetSecEl = document.querySelector('.target-section');

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

sectionsEl.forEach(el => {
  el.style.backgroundColor = `rgb(${randomInteger(0, 255)}, ${randomInteger(
    0,
    255
  )}, ${randomInteger(0, 255)})`;
});

const observerOptions = {
  root: null,
  rootMargin: '100px 0px 0px 0px',
  threshold: 1.0,
};

const logFn = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Hello');
    }
  });
};

const observer = new IntersectionObserver(logFn, observerOptions);
observer.observe(targetSecEl);
