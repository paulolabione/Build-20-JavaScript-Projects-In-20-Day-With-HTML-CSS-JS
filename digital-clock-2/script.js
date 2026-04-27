const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Digital Clock 2';
elTitle.append(titleH1);

const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');


function update_clock() {

  let timeNow = new Date();

  let hours = timeNow.getHours();
  let minutes = timeNow.getMinutes();
  let seconds = timeNow.getSeconds();


  // hours = hours < 10 ? '0' + hours : hours;
  // minutes = minutes < 10 ? '0' + minutes : minutes;
  // seconds = seconds < 10 ? '0' + seconds : seconds;

  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  elHours.textContent = hours;
  elMinutes.textContent = minutes;
  elSeconds.textContent = seconds;
}

setInterval(update_clock, 1000);