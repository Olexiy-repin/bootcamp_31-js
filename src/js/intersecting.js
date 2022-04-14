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

// const options = {
//   rootMargin: '0px 0px 0px 0px',
//   threshold: 1,
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('Hello');
//     }
//   });
// }, options);

// observer.observe(targetSecEl);
