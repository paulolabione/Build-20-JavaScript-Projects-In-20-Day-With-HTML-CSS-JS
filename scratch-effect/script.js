const elTitle = document.getElementById('title');
const titleH1 = document.createElement('h1');
titleH1.id = 'titleh1';
titleH1.innerText = 'Scratch Effect';
elTitle.appendChild(titleH1);

const body = document.querySelector('body');



document.addEventListener('mousemove', (e) => {
    const scratcher = document.createElement('span');
    scratcher.style.left = -17 + e.offsetX + 'px';
    scratcher.style.top = -17 + e.offsetY + 'px';
    body.appendChild(scratcher);
})