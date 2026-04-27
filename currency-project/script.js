const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Currency Project';
elTitle.append(titleH1);

document.addEventListener('mousemove', effect);

const layers = document.querySelectorAll('.layer');

function effect(e) {
    layers.forEach((layer) => {
        const movement = layer.getAttribute('data-speed');
        let x = (window.innerWidth - e.pageX * movement) / 250;
        let y = (window.innerWidth - e.pageX *movement) / 250;


        layer.style.transform = `translate(${-x}px) translateY(${y}px)`;

    });
}  