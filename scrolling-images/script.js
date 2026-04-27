const elTitle = document.querySelector('.title');
const titleH1 = document.createElement('h1');
titleH1.classList.add('title-h1');
titleH1.textContent = 'Scrolling Images';
elTitle.append(titleH1);

const elCard = document.querySelectorAll('.card');

window.addEventListener('scroll', animateCards);

function animateCards() {
    // const checkingBottom = (window.innerHeight / 4) * (125 / 25);

    const checkingBottom = window.innerHeight * 0.98

    elCard.forEach((singleCard) => {
        const cardTop = singleCard.getBoundingClientRect().top;

        let toSlidIn = cardTop < checkingBottom;

        if(toSlidIn) {
            singleCard.classList.add('slidingIn');
        }else {
            singleCard.classList.remove('slidingIn')
        }
    });
};