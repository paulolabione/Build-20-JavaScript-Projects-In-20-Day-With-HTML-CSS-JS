const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.id = 'titleh1'
titleH1.innerText = 'Illumination'
elTitle.appendChild(titleH1);

const mouseEvent = document.documentElement; // Refers to HTML element

mouseEvent.addEventListener('mousemove', (e) => {
  mouseEvent.style.setProperty('--x', e.clientX + 'px');
  mouseEvent.style.setProperty('--y', e.clientY + 'px');
});
