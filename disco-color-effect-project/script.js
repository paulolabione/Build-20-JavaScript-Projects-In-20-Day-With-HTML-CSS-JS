const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.id = 'title-h1';
titleH1.textContent = 'Disco Color Effect Project'
elTitle.append(titleH1);

const lights = document.querySelectorAll('.light');
// const body = document.body;
const fakeBody = document.querySelector('.fake-body')

let active = 0;

setInterval(() => {
  changeColor();
}, 1000);

function changeColor() {
  if (active > 0) {
    lights[active - 1].classList.remove('active');

  }

  fakeBody.style.backgroundColor = getComputedStyle(lights[active]).getPropertyValue('--light-color');

  lights[active].classList.add('active');

  if (active === lights.length - 1) {
    setTimeout( () => {
      lights[active].classList.remove('active');
      active = 0;
    }, 900);
  }else {
    active++;
  }
}