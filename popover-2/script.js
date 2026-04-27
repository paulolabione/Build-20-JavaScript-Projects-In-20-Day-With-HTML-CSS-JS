const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Popover';
elTitle.append(titleH1);

const elPopovercontainer = document.querySelector('.popover-container');
const elButton = document.querySelector('.button');

const DivPopover = document.createElement('div');
const h3Popover = document.createElement('h3');
const pPopover = document.createElement('p');
const buttonPopover = document.createElement('button');

DivPopover.classList.add('div-popover');
buttonPopover.classList.add('button-popover');

elPopovercontainer.append(DivPopover);

h3Popover.textContent = 'My Popover';
DivPopover.append(h3Popover)

pPopover.textContent = 'This is some text inside my popover.';
DivPopover.append(pPopover);

buttonPopover.textContent = 'Close';
DivPopover.append(buttonPopover)

function popover() {
  console.log('cliked')
  elButton.style.display = 'none';
  DivPopover.style.display = 'flex';
}

function close() {
  console.log('clicked 2')
  elButton.style.display = 'inline-block';
  DivPopover.style.display = 'none';
}

DivPopover.style.display = 'none';

elButton.addEventListener('click', popover);

buttonPopover.addEventListener('click', close);

// window.popover = function () {
//   console.log('cliked');
//   elButton.style.display = 'none';
// }

