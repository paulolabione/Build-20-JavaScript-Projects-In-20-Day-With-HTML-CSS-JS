const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Search Box';
elTitle.append(titleH1)

const container = document.querySelector('.container');
const input = document.querySelector('.search');
const button = document.getElementById('_button');
const searchIcon = document.querySelector('.fa-search');
const xIcon = document.querySelector('.fa-times');

button.addEventListener('click', () => {
  container.classList.toggle('active');
  button.classList.toggle('active');
  // xIcon.classList.toggle('active');
  // searchIcon.classList.toggle('active');

  if (container.classList.contains('active')) {
    searchIcon.style.opacity = 0;
    xIcon.style.opacity = 1;
  }else {
    searchIcon.style.opacity = 1;
    xIcon.style.opacity = 0;
  }

  input.focus()


})